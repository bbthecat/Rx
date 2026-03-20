import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, '../src/data/quizData.js');

const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ── TEMPLATES FOR EXTREMELY HARD PLEPC1 QUESTIONS ─────────────────────────────
// These templates define logic to calculate the correct answer based on random variables

const templates = [
  // 1: CKD Dose Adjustment (Cockcroft-Gault)
  () => {
    const age = randRange(65, 90);
    const weight = randRange(50, 90);
    const scr = (Math.random() * 2 + 1.2).toFixed(1); // 1.2 - 3.2
    const gender = pick(['ชาย', 'หญิง']);
    const factor = gender === 'หญิง' ? 0.85 : 1;
    const crcl = Math.round(((140 - age) * weight) / (72 * scr) * factor);
    
    let answerText, correctIdx;
    if (crcl < 15) { answerText = 'ห้ามใช้ยา / หลีกเลี่ยง (Contraindicated)'; correctIdx = 0; }
    else if (crcl < 30) { answerText = 'ปรับลดขนาดยา 50% หรือยืดระยะเวลาให้ยา'; correctIdx = 1; }
    else if (crcl < 60) { answerText = 'ปรับลดขนาดยา 25% (Mild adjustment)'; correctIdx = 2; }
    else { answerText = 'ใช้ขนาดยาปกติ (Normal dose)'; correctIdx = 3; }

    const options = [
      'ห้ามใช้ยา / หลีกเลี่ยง (Contraindicated)',
      'ปรับลดขนาดยา 50% หรือยืดระยะเวลาให้ยา',
      'ปรับลดขนาดยา 25% (Mild adjustment)',
      'ใช้ขนาดยาปกติ (Normal dose)',
      'ต้องทำ Hemodialysis ทันที'
    ];
    
    return {
      type: 'mcq',
      category: 'Renal / Pharmacokinetics',
      situation: 'CKD Dose Adjustment',
      question: `ผู้ป่วย${gender} อายุ ${age} ปี น้ำหนัก ${weight} kg เข้ารับการรักษาด้วยยาปฏิชีวนะที่มีการขับออกทางไตสูง ผลตรวจ AST 30 U/L, ALT 25 U/L, Serum Creatinine ${scr} mg/dL จากข้อมูลดังกล่าว ผู้ป่วยรายนี้มีค่า Creatinine Clearance (CrCl) ตามสมการ Cockcroft-Gault ประมาณเท่าใด และควรจัดการขนาดยาอย่างไร? (ค่า CrCl คำนวณได้ประมาณ ${crcl} mL/min)`,
      options,
      answer: correctIdx,
      explanation: `CrCl คำนวณจาก ((140 - ${age}) × ${weight}) / (72 × ${scr})${gender === 'หญิง' ? ' × 0.85' : ''} = ${crcl} mL/min. การที่ CrCl อยู่ในระดับนี้ แนะนำให้${answerText} สำคัญมากในการป้องกันยาคั่งและเกิด Toxicity`
    };
  },

  // 2: Warfarin Interaction
  () => {
    const targetINR = pick(['2.0-3.0', '2.5-3.5']);
    const currentINR = (Math.random() * 5 + 4).toFixed(1); // 4.0 - 9.0
    const interactionDrug = pick(['Amiodarone', 'Bactrim (SMX/TMP)', 'Fluconazole', 'Metronidazole', 'Omeprazole']);
    
    let action, correctIdx;
    if (currentINR >= 9.0) { action = 'หยุด Warfarin และให้ Vitamin K 2.5-5 mg PO/IV'; correctIdx = 0; }
    else if (currentINR >= 4.5 && currentINR <= 10.0) { action = 'งด Warfarin 1-2 โดสจนกว่า INR < 3 แล้วปรับลดขนาดยาลง'; correctIdx = 1; }
    else { action = 'ปรับลดขนาดยา Warfarin ลง 10-20% ต่อสัปดาห์'; correctIdx = 2; }

    const options = [
      'หยุด Warfarin และให้ Vitamin K 2.5-5 mg PO/IV',
      'งด Warfarin 1-2 โดสจนกว่า INR < 3 แล้วปรับลดขนาดยาลง',
      'ปรับลดขนาดยา Warfarin ลง 10-20% ต่อสัปดาห์',
      'ให้ Fresh Frozen Plasma (FFP) ทันที 2 unit',
      'ให้ติดตาม INR ต่อไปโดยไม่ต้องปรับยา เนื่องจากเป็นแค่ Transient spike'
    ];

    return {
      type: 'mcq',
      category: 'Cardiovascular / Drug Interaction',
      situation: 'Warfarin Overanticoagulation',
      question: `ผู้ป่วยที่ได้รับยาวาร์ฟารินเพื่อป้องกัน Stroke (Target INR ${targetINR}) มาพบเภสัชกร วันนี้วัดค่า INR ได้ ${currentINR}. ไม่มีภาวะเลือดออกขัดเจน (No active bleeding). ซักประวัติพบว่าผู้ป่วยเพิ่งเริ่มกินยา ${interactionDrug} เมื่อ 5 วันก่อน การจัดการที่เหมาะสมที่สุดตาม ACCP Guidelines คือข้อใด?`,
      options,
      answer: correctIdx,
      explanation: `ยา ${interactionDrug} เป็น Strong CYP2C9/3A4 inhibitor ซึ่งยับยั้งการกำจัด S-warfarin ทำให้ INR พุ่งกระฉูดถึง ${currentINR}. เมื่อ INR ในช่วง 4.5-10 และไม่มี Bleeding แนะนำให้ ${action}`
    };
  },

  // 3: Asthma Stepwise (GINA)
  () => {
    const symptoms = randRange(3, 6);
    const night = randRange(1, 4);
    
    const options = [
      'เริ่ม SABA PRN อย่างเดียว',
      'เริ่ม Low-dose ICS/Formoterol (MART) แบบ PRN',
      'เริ่ม Low-dose ICS/Formoterol (MART) เป็น Maintenance + Reliever',
      'เริ่ม Medium/High-dose ICS/LABA + LAMA',
      'พิจารณาให้ Biologic therapy (e.g., Omalizumab)'
    ];

    let correctIdx, explanationText;
    if (symptoms <= 4 && night <= 1) { 
      // Step 1-2: PRN ICS/Formoterol
      correctIdx = 1; 
      explanationText = "ตาม GINA 2024 Track 1 (Preferred) อาการน้อยกว่ารายวัน แนะนำ Track 1 Step 1-2 คือ Low-dose ICS/Formoterol PRN";
    } else {
      // Step 3-4: Maintenance ICS/Formoterol
      correctIdx = 2;
      explanationText = "อาการเกิดเกือบทุกวัน แนะนำให้เริ่ม GINA Track 1 Step 3 หรือ 4 (Low/Medium-dose ICS/Formoterol เป็นทั้งยาควบคุมและบรรเทาอาการ - MART)";
    }

    return {
      type: 'mcq',
      category: 'Respiratory / Pharmacotherapy',
      situation: 'Asthma Step 1-4 Therapy',
      question: `ผู้ป่วยใหม่ อายุ ${randRange(20, 45)} ปี ได้รับการวินิจฉัยเป็น Asthma. มีอาการหอบเหนื่อยแน่นหน้าอก ${symptoms} วันต่อสัปดาห์ (ไม่ทุกวัน) และตื่นเพราะหอบเหนื่อยตอนกลางคืน ${night} ครั้งในรอบเดือนที่ผ่านมา. ตามแนวทาง GINA 2024 (Track 1 - Preferred) การเริ่มยาแผนใดถูกต้องและเหมาะสมที่สุดสำหรับการควบคุมโรคในระยะยาว?`,
      options,
      answer: correctIdx,
      explanation: explanationText
    };
  },

  // 4: Paracetamol Toxicity
  () => {
    const hours = pick([4, 6, 8, 12]);
    const level = randRange(150, 300);
    const weight = randRange(45, 80);
    const options = [
      'ให้ Activated Charcoal 50g ทันที รอ 2 ชม. ค่อยพิจารณาให้ N-acetylcysteine (NAC)',
      'เจาะระดับ Paracetamol level ใหม่หลังผ่านไป 12 ชั่วโมงเพื่อประเมินซ้ำ',
      'เริ่ม N-acetylcysteine (NAC) ทันทีแบบ 21-hour IV protocol โดยรอดูระดับ Rumack-Matthew Nomogram ต่อ',
      `คำนวณเปรียบเทียบ Nomogram หากสูงกว่า Treatment line ให้ NAC แบบ 72-hour oral regimen`,
      'ไม่ต้องทำอะไร เนื่องจากเลยระยะเวลา Golden period ของการทำ Gastric lavage แล้ว'
    ];

    return {
      type: 'mcq',
      category: 'Toxicology',
      situation: 'Acetaminophen Overdose',
      question: `ผู้ป่วยหญิงอายุ 22 ปี น้ำหนัก ${weight} kg กินยา Paracetamol 500 mg ไป 30 เม็ด (15g) ด้วยจุดประสงค์ฆ่าตัวตาย. มาถึง ER ที่เวลา ${hours} ชั่วโมงหลังกินยา. เจาะระดับ APAP level ในเลือดได้ ${level} mcg/mL. ตรวจ LFTs ยังปกติ. อะไรคือการจัดการที่สำคัญที่สุดในเวลานี้และเป็นมาตรฐานการรักษา (Standard of Care)?`,
      options,
      answer: 2,
      explanation: `พิษ Paracetamol หลังจาก 4 ชั่วโมงต้องแปลผลตาม Rumack-Matthew nomogram ระดับ ${level} mcg/mL ล้วนสูงกว่า Treatment line แนะนำการให้ IV NAC 21-hour protocol (150 mg/kg in 1h, then 50 mg/kg in 4h, then 100 mg/kg in 16h) เป็นอันดับแรก`
    };
  },

  // 5: Gout Flare + CKD
  () => {
    const age = randRange(50, 75);
    const scr = (Math.random() * 1.5 + 1.5).toFixed(1); // 1.5 - 3.0 (CKD)
    
    const options = [
      'Colchicine 1.2 mg ทันที ตามด้วย 0.6 mg อีก 1 ชั่วโมง',
      'Prednisolone 30-40 mg/day นาน 5 วัน',
      'Ibuprofen 400 mg รัปประทานทุก 8 ชั่วโมง',
      'Allopurinol 100 mg/day เพื่อลดกรดยูริกทันที',
      'Indomethacin 50 mg รัปประทานทุก 8 ชั่วโมง'
    ];

    return {
      type: 'mcq',
      category: 'Rheumatology / Adverse Reaction',
      situation: 'Acute Gout in CKD',
      question: `ผู้ป่วยชาย อายุ ${age} ปี มาด้วยอาการปวดบวมแดงร้อนที่ข้อโคนนิ้วหัวแม่เท้าขวา (1st MTP joint) อย่างรุนแรงเป็นมา 12 ชั่วโมง. ประวัติโรคประจำตัว: ความดันโลหิตสูงและ Chronic Kidney Disease (Serum Creatinine ${scr} mg/dL, eGFR ~25 mL/min/1.73m2). ยาข้อใด **ปลอดภัยและเหมาะสม** ที่สุดสำหรับการรักษา Acute Gout flare ในผู้ป่วยรายนี้?`,
      options,
      answer: 1, // Prednisolone
      explanation: `ในผู้ป่วยที่มี Gout ร่วมกับ CKD ระดับกลาง-รุนแรง (eGFR <30) หลีกเลี่ยง NSAIDs (Ibuprofen, Indomethacin) เพราะเพิ่มความเสี่ยงไตวาย และ Colchicine ต้องปรับยาหรือห้ามใช้ การให้ Oral Corticosteroids (Prednisolone) เช่น 30-40 mg/day เป็นระยะสั้น 5 วัน จึงปลอดภัยต่อไตมากที่สุด.`
    };
  }
];

// Generate 2000 unique questions
const generated = [];
for (let i = 1; i <= 2000; i++) {
  // Pick random template and execute it to generate a unique instance
  const template = pick(templates);
  const q = template();
  q.id = i;
  q.question = q.question.replace(/\s+/g, ' '); // cleanup whitespace
  generated.push(q);
}

// Convert to module export string
const jsContent = `// Auto-generated 2000-question HARD LOCAL BANK
// Instantly generated via script avoiding API limit.
// Do not edit manually. (Generated at ${new Date().toISOString()})

export const quizData = ${JSON.stringify(generated, null, 2)};
`;

writeFileSync(OUT_FILE, jsContent);
console.log(`✅ Forged 2000 hard questions instantly into ${OUT_FILE}`);
