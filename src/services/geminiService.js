import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const BLUEPRINT_SUMMARY = `
85% Pharmaceutical Care (Pharmacotherapy, PK/PD, DDI, ADRs, Special Populations, Herbal)
15% Supporting Knowledge (MedChem, Toxicology, Law, Administrative Pharmacy)
30 Clinical Situations: TB, HIV, UTI, RTI, Cellulitis, HTN, Diabetes, Dyslipidemia, Parkinson,
Asthma, COPD, Allergic Rhinitis, GERD, PUD, Cirrhosis, Epilepsy, Depression, Gout, CKD,
Hypokalemia, Paracetamol Toxicity, Warfarin INR, Pregnancy/Lactation, Herbal, FEFO inventory,
Pharmacy Law, Chemotherapy Nausea, Glaucoma, Ethics.
`;

const getModel = () => genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const hasKey = () => API_KEY && API_KEY !== 'YOUR_KEY_HERE';

export const geminiService = {

  /**
   * Generates N independent clinical cases in parallel.
   * Returns a flat array of questions, each tagged with their caseTitle and caseText.
   */
  async generateMultipleCases(numCases) {
    if (!hasKey()) throw new Error("Missing Gemini API Key.");
    const promises = Array.from({ length: numCases }, () => this.generateCaseBlock());
    const cases = await Promise.all(promises);
    const flatQuestions = [];
    cases.forEach((caseBlock, ci) => {
      caseBlock.questions.forEach((q, qi) => {
        flatQuestions.push({
          ...q,
          id: ci * 100 + qi,
          type: 'case',
          _caseTitle: caseBlock.caseTitle,
          _caseText: caseBlock.caseText,
          _caseIndex: ci,
        });
      });
    });
    return flatQuestions;
  },

  /**
   * Generates regular MCQ questions based on the blueprint.
   */
  async generateQuestions(count = 5) {
    if (!hasKey()) throw new Error("Missing Gemini API Key.");

    const model = getModel();
    const prompt = `
      You are a Senior Thai Pharmacy Professor conducting PLEPC1 board exam questions.
      Generate ${count} hard, high-difficulty clinical pharmacy MCQ questions IN THAI.
      
      RULES:
      1. Follow 85:15 Blueprint ratio.
      2. Situations to use: ${BLUEPRINT_SUMMARY}
      3. Output a STRICT JSON ARRAY only. No markdown.
      4. Each item MUST have these exact keys:
         - "id": number
         - "type": "mcq"
         - "question": string (clinical case scenario in Thai)
         - "options": array of exactly 5 strings
         - "answer": number (0-based index of correct option)
         - "explanation": string (brief Thai rationale, 30-50 words)
         - "category": string (e.g., "โรคติดเชื้อ")
         - "situation": string (e.g., "CKD Dose Adjustment")
    `;

    try {
      const result = await model.generateContent(prompt);
      let text = result.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
      return JSON.parse(text);
    } catch (error) {
      console.error("MCQ Generation Error:", error);
      throw error;
    }
  },

  /**
   * Generates ONE clinical case with 4 linked questions (case-based format).
   * Returns an object: { caseText: string, questions: array }
   */
  async generateCaseBlock() {
    if (!hasKey()) throw new Error("Missing Gemini API Key.");

    const model = getModel();
    const prompt = `
      You are a Senior Thai Clinical Pharmacist writing PLEPC1 hard case-based questions.
      
      Generate ONE complex clinical case scenario and EXACTLY 4 linked MCQ questions about it.
      The case should be a real-world pharmacy challenge (Drug interactions, ADRs, dosing in special populations, or clinical decision making).
      All content must be IN THAI.
      
      Output a STRICT JSON object with NO markdown:
      {
        "caseTitle": "...",
        "caseText": "A 2-4 paragraph clinical case in Thai describing a patient, their medications, labs, and presenting complaint.",
        "questions": [
          {
            "id": 1,
            "type": "case",
            "question": "question text in Thai",
            "options": ["option A", "option B", "option C", "option D", "option E"],
            "answer": 0,
            "explanation": "Thai rationale (40-60 words)"
          },
          ...4 total
        ]
      }
      
      RULES:
      - Case must involve at least 2 drugs.
      - Each question must test a different aspect: one for drug selection, one for dosing/dose adjustment, one for interactions/ADR, one for monitoring/counseling.
      - Difficulty: BOARD EXAM HARD.
      - Options must be pharmacologically realistic.
    `;

    try {
      const result = await model.generateContent(prompt);
      let text = result.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
      return JSON.parse(text);
    } catch (error) {
      console.error("Case Block Generation Error:", error);
      throw error;
    }
  },

  /**
   * Generates a deep clinical rationale for a specific question.
   */
  async generateRationale(question, options, answerIndex) {
    if (!hasKey()) return null;

    const model = getModel();
    const correctAnswer = options[answerIndex];

    const prompt = `
      วิเคราะห์คำถามเภสัชกรรมคลินิกนี้และให้คำอธิบายเชิงลึกเป็นภาษาไทย:
      
      คำถาม: ${question}
      ตัวเลือก: ${options.join(", ")}
      คำตอบที่ถูกต้อง: ${correctAnswer}
      
      ให้เนื้อหา:
      - เหตุผลทางคลินิก (PK/PD, Guidelines)
      - เหตุผลว่าทำไมคำตอบนั้นถูก
      - ทำไมตัวเลือกที่น่าจะผิดพลาดที่สุดถึงไม่ถูก
      - ใช้ภาษาเชิงวิชาชีพแต่เข้าใจง่าย 150-200 คำ
    `;

    try {
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (error) {
      console.error("Rationale Error:", error);
      return null;
    }
  }
};
