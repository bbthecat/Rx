import { GoogleGenerativeAI } from "@google/generative-ai";
import { recordApiCall } from './apiUsage.js';

// ── Multi-key rotation ────────────────────────────────────────────────────────
// Add more keys in .env as VITE_GEMINI_API_KEY_2, _3, _4, _5 for more quota
const API_KEYS = [
  import.meta.env.VITE_GEMINI_API_KEY,
  import.meta.env.VITE_GEMINI_API_KEY_2,
  import.meta.env.VITE_GEMINI_API_KEY_3,
  import.meta.env.VITE_GEMINI_API_KEY_4,
  import.meta.env.VITE_GEMINI_API_KEY_5,
].filter(k => k && k !== 'YOUR_KEY_HERE');

let keyIndex = 0;

const getModel = () => {
  const key = API_KEYS[keyIndex % API_KEYS.length];
  return new GoogleGenerativeAI(key).getGenerativeModel({ model: "gemini-2.0-flash" });
};

// Rotate to next key (called when 429 is hit)
const rotateKey = () => { keyIndex = (keyIndex + 1) % Math.max(1, API_KEYS.length); };

const hasKey = () => API_KEYS.length > 0;


// Full topic pool — randomly sampled each call to force question variety
const ALL_TOPICS = [
  "Tuberculosis (TB) pharmacotherapy", "HIV/AIDS antiretroviral therapy",
  "Urinary Tract Infection (UTI) treatment", "Community-acquired pneumonia",
  "Skin and soft tissue infections", "Hypertension drug selection",
  "Type 2 Diabetes: insulin & oral agents", "Dyslipidemia & statin therapy",
  "Parkinson's disease medications", "Asthma inhalers & stepwise therapy",
  "COPD exacerbation management", "Allergic Rhinitis: antihistamines",
  "GERD: PPIs & H2 blockers", "Peptic Ulcer Disease (H. pylori eradication)",
  "Liver cirrhosis & hepatic encephalopathy", "Epilepsy: AED selection",
  "Depression: SSRI/SNRI vs TCA", "Gout: urate-lowering therapy",
  "Chronic Kidney Disease (CKD) dose adjustment", "Hypokalemia correction",
  "Paracetamol toxicity & NAC protocol", "Warfarin INR management",
  "Drug use in pregnancy & lactation", "Herbal medicine interactions",
  "Chemotherapy-induced nausea: antiemetics", "Glaucoma eye drop therapy",
  "Sepsis antibiotic choice", "Schizophrenia: antipsychotics",
  "Heart failure: ACEi, ARB, beta-blocker", "Pharmacy law & ethics",
  "Renal replacement therapy dosing", "Drug-drug interaction management",
  "Oral contraceptives & interactions", "Hypothyroidism: levothyroxine",
  "Osteoporosis: bisphosphonates", "Anticoagulation: DOAC vs warfarin",
];

// Pick a random subset of topics to include in each prompt
const randomTopics = (n = 6) => {
  const shuffled = [...ALL_TOPICS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n).join(", ");
};



export const geminiService = {

  /**
   * Generates N independent clinical cases in parallel.
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
   * Generates regular MCQ questions — random topics injected for variety.
   */
  async generateQuestions(count = 5) {
    if (!hasKey()) throw new Error("Missing Gemini API Key.");

    const model = getModel();
    const topics = randomTopics(Math.min(count, 8));
    const seed = Date.now(); // force cache-busting

    const prompt = `
      [Session: ${seed}]
      You are a Senior Thai Pharmacy Professor. Generate ${count} UNIQUE, high-difficulty clinical pharmacy MCQ questions IN THAI.
      
      MANDATORY TOPICS FOR THIS SESSION (must cover these areas): ${topics}
      
      RULES:
      1. Each question must test a DIFFERENT clinical topic — no repetition.
      2. Output STRICT JSON ARRAY only. No markdown, no extra text.
      3. Each object MUST have:
         - "id": number
         - "type": "mcq"
         - "question": string (clinical scenario in Thai, minimum 2 sentences)
         - "options": array of exactly 5 strings
         - "answer": number (0-based index)
         - "explanation": string (Thai rationale, 30-50 words)
         - "category": string (e.g., "โรคติดเชื้อ")
         - "situation": string (e.g., "CKD Dose Adjustment")
    `;

    try {
      const result = await model.generateContent(prompt);
      recordApiCall(1);
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
    const topic = randomTopics(1); // pick ONE random disease area for this case
    const seed = Date.now();

    const prompt = `
      [Session: ${seed}]
      You are a Senior Thai Clinical Pharmacist writing PLEPC1 hard case-based questions.
      
      REQUIRED DISEASE AREA FOR THIS CASE: ${topic}
      
      Generate ONE complex clinical case scenario and EXACTLY 4 linked MCQ questions about it.
      The case MUST be set in the disease area above. Use realistic Thai patient demographics and clinical data.
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
      - Each question tests a different aspect: drug selection, dose adjustment, DDI/ADR, monitoring.
      - Difficulty: BOARD EXAM HARD.
      - Options must be pharmacologically realistic.
    `;

    try {
      const result = await model.generateContent(prompt);
      recordApiCall(1);
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
