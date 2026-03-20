#!/usr/bin/env node
/**
 * Pharmacy Quiz — Question Bank Generator
 * ----------------------------------------
 * Generates 2000 hard PLEPC1 questions via Gemini AI in 100 batches of 20.
 * Saves the result to src/data/quizData.js as a permanent local bank.
 *
 * Usage:
 *   node scripts/generateQuestionBank.js
 *
 * Requirements:
 *   - .env must contain VITE_GEMINI_API_KEY
 *   - npm install @google/generative-ai dotenv
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, '../src/data/quizData.js');
const PROGRESS_FILE = join(__dirname, '../scripts/.bank_progress.json');

const API_KEY = process.env.VITE_GEMINI_API_KEY;
if (!API_KEY) { console.error('❌ Missing VITE_GEMINI_API_KEY in .env'); process.exit(1); }

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

// ── Topic pool ──────────────────────────────────────────────────────────────
const ALL_TOPICS = [
  'Tuberculosis pharmacotherapy', 'HIV/AIDS antiretroviral therapy',
  'Urinary Tract Infection treatment', 'Community-acquired pneumonia & aspiration pneumonia',
  'Skin and soft tissue infections', 'Hypertension: drug selection & JNC/KDIGO guidelines',
  'Type 2 Diabetes: insulin regimens & oral agents', 'Dyslipidemia & statin therapy',
  "Parkinson's disease pharmacotherapy", 'Asthma: GINA stepwise therapy',
  'COPD: GOLD guidelines & exacerbation management', 'Allergic Rhinitis: antihistamines & intranasal steroids',
  'GERD: PPIs, H2 blockers & lifestyle', 'Peptic Ulcer Disease & H. pylori eradication',
  'Liver cirrhosis & hepatic encephalopathy management', 'Epilepsy: AED selection & drug interactions',
  'Depression & anxiety: SSRI/SNRI pharmacology', 'Gout: urate-lowering therapy & colchicine',
  'Chronic Kidney Disease: dose adjustment & renal replacement', 'Hypokalemia & electrolyte correction',
  'Paracetamol toxicity: NAC protocol & management', 'Warfarin: INR management & reversal agents',
  'Drug use in pregnancy & lactation (FDA categories)', 'Herbal medicine: interactions & contraindications',
  'Chemotherapy-induced nausea: antiemetics & 5-HT3 antagonists', 'Glaucoma: prostaglandin analogues & beta-blockers',
  'Sepsis: antibiotic selection & pharmacokinetics', 'Schizophrenia: typical vs atypical antipsychotics',
  'Heart failure: RAAS inhibitors, beta-blockers & diuretics', 'Thai Pharmacy Law & ethics',
  'Renal replacement therapy: HD vs PD & drug dosing', 'Drug-drug interactions: CYP450 mechanisms',
  'Oral contraceptives: drug interactions & efficacy', 'Hypothyroidism: levothyroxine dosing & monitoring',
  'Osteoporosis: bisphosphonates & DEXA screening', 'Anticoagulation: DOACs vs warfarin comparison',
  'Meningitis: empirical antibiotic therapy', 'Rheumatoid arthritis: DMARDs & biologics',
  'Thyroid storm: emergency management', 'Adrenal insufficiency & corticosteroid tapering',
  'Neonatal pharmacotherapy & weight-based dosing', 'Geriatric pharmacotherapy & polypharmacy',
  'Oncology: supportive care & drug calculation', 'Transplant immunosuppression: tacrolimus & cyclosporine',
  'Pain management: opioids & WHO ladder', 'Antimicrobial stewardship & resistance mechanisms',
  'TPN & enteral nutrition in ICU patients', 'Psychiatric medications: mood stabilizers & lithium toxicity',
  'Venous thromboembolism: DVT & PE treatment', 'Cardiovascular: acute coronary syndrome & STEMI',
];

const randomTopics = (n) => {
  const shuffled = [...ALL_TOPICS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n).join(', ');
};

// ── Helpers ─────────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const loadProgress = () => {
  if (existsSync(PROGRESS_FILE)) {
    try { return JSON.parse(readFileSync(PROGRESS_FILE, 'utf8')); } catch { /**/ }
  }
  return { completedBatches: [], questions: [] };
};

const saveProgress = (progress) => {
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
};

const generateBatch = async (batchNum, retries = 5) => {
  const topics = randomTopics(4);
  const seed = Date.now();
  const prompt = `
    [Batch ${batchNum} | Seed: ${seed}]
    You are a Senior Thai Pharmacy Professor. Generate EXACTLY 20 UNIQUE hard-difficulty clinical pharmacy MCQ questions IN THAI.
    MANDATORY TOPICS: ${topics}
    
    STRICT RULES:
    1. Each question = different clinical scenario. No duplicates.
    2. Output ONLY a valid JSON array. No markdown, no text outside JSON.
    3. Each object MUST have these exact keys:
       - "id": ${batchNum * 20 + 1} to ${batchNum * 20 + 20} (sequential)
       - "question": string (Thai clinical scenario, 2+ sentences)
       - "options": array of exactly 5 strings (Thai)
       - "answer": number 0-4 (0-based index of correct option)
       - "explanation": string (Thai rationale, 30-60 words)
       - "category": string (Thai category name)
       - "situation": string (English clinical situation label)
    
    Output the JSON array only, starting with [ and ending with ]
  `;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      let text = result.response.text();
      // Extract JSON array
      const start = text.indexOf('[');
      const end = text.lastIndexOf(']') + 1;
      if (start === -1 || end === 0) throw new Error('No JSON array found in response');
      const json = text.slice(start, end);
      const questions = JSON.parse(json);
      if (!Array.isArray(questions) || questions.length === 0) throw new Error('Empty array returned');
      return questions;
    } catch (err) {
      const is429 = err.message?.includes('429') || err.message?.includes('quota');
      if (is429) {
        const wait = Math.min(60000 * attempt, 300000); // max 5 min
        console.log(`  ⏳ Quota hit on batch ${batchNum}, waiting ${wait/1000}s before retry ${attempt}/${retries}...`);
        await sleep(wait);
      } else {
        console.log(`  ⚠️  Batch ${batchNum} attempt ${attempt} failed: ${err.message}`);
        if (attempt < retries) await sleep(3000);
      }
    }
  }
  console.log(`  ❌ Batch ${batchNum} failed after ${retries} attempts, skipping.`);
  return [];
};

// ── Main ─────────────────────────────────────────────────────────────────────
const TOTAL_BATCHES = 100; // 100 × 20 = 2000 questions
const DELAY_BETWEEN_BATCHES = 4100; // ~14 req/min → stays under 15 RPM limit

async function main() {
  console.log('🚀 Pharmacy Quiz — Question Bank Generator');
  console.log(`📦 Target: ${TOTAL_BATCHES} batches × 20 = ${TOTAL_BATCHES * 20} questions\n`);

  const progress = loadProgress();
  console.log(`📂 Resuming from batch ${progress.completedBatches.length + 1} (${progress.questions.length} questions so far)\n`);

  for (let b = 0; b < TOTAL_BATCHES; b++) {
    if (progress.completedBatches.includes(b)) {
      process.stdout.write(`✅ Batch ${b + 1}/${TOTAL_BATCHES} (cached)\r`);
      continue;
    }

    process.stdout.write(`⚙️  Generating batch ${b + 1}/${TOTAL_BATCHES}...    \r`);
    const questions = await generateBatch(b);

    if (questions.length > 0) {
      progress.questions.push(...questions);
      progress.completedBatches.push(b);
      saveProgress(progress);
      console.log(`✅ Batch ${b + 1}/${TOTAL_BATCHES} — ${progress.questions.length} questions total`);
    }

    // Rate limit: 15 RPM → wait ~4 seconds between requests
    if (b < TOTAL_BATCHES - 1) await sleep(DELAY_BETWEEN_BATCHES);
  }

  // Write final output
  const output = `// Auto-generated question bank — ${progress.questions.length} questions
// Generated: ${new Date().toISOString()}
// DO NOT EDIT MANUALLY — run scripts/generateQuestionBank.js to regenerate

export const quizData = ${JSON.stringify(progress.questions, null, 2)};
`;

  writeFileSync(OUT_FILE, output);
  console.log(`\n🎉 Done! ${progress.questions.length} questions saved to src/data/quizData.js`);
  console.log(`📁 You can now delete scripts/.bank_progress.json`);
}

main().catch(console.error);
