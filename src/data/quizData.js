export const quizData = [
  {
    id: 1,
    question: "ผู้ป่วยชายอายุ 65 ปี เป็นโรคความดันโลหิตสูง (HTN) และโรคไตเรื้อรัง (CKD Stage 3) ยาในกลุ่มใดถือเป็นอันดับแรก (First-line) ที่ควรใช้เพื่อชะลอการเสื่อมของไต?",
    options: [
      "Calcium Channel Blockers (Amlodipine)",
      "ACE Inhibitors (Enalapril)",
      "Beta Blockers (Atenolol)",
      "Thiazide Diuretics (HCTZ)",
      "Alpha Blockers (Prazosin)"
    ],
    answer: 1,
    explanation: "ACE inhibitors หรือ ARBs เป็นยาทางเลือกแรกในผู้ป่วย CKD ที่มี HTN เนื่องจากมีฤทธิ์ลดความดันใน glomerulus ช่วยลด proteinuria และชะลอการเสื่อมของไต (Renoprotection)",
    category: "Cardiovascular / Renal",
    situation: "CV/CKD"
  },
  {
    id: 2,
    question: "ข้อใดคืออาการไม่พึงประสงค์ (ADR) ที่เป็นเอกลักษณ์ของยา Rifampicin ที่ต้องสื่อสารให้ผู้ป่วยทราบเพื่อลดความตระหนก?",
    options: [
      "อาการไอแห้ง (Dry cough)",
      "ภาวะยูริกในเลือดสูง (Hyperuricemia)",
      "สารคัดหลั่งเปลี่ยนเป็นสีส้มแดง",
      "การมองเห็นสีผิดปกติ (Optic neuritis)",
      "เสียงอื้อในหู (Ototoxicity)"
    ],
    answer: 2,
    explanation: "Rifampicin ทำให้สารคัดหลั่ง เช่น ปัสสาวะ น้ำตา เหงื่อ เปลี่ยนเป็นสีส้มแดง ซึ่งเป็นอาการปกติแต่ต้องแจ้งผู้ป่วยล่วงหน้า",
    category: "Infectious Diseases",
    situation: "TB"
  },
  {
    id: 3,
    question: "ผู้ป่วยหญิงมีอาการแสบร้อนกลางอก (Heartburn) และสำลักน้ำรสเปรี้ยวขึ้นมาที่คอ วินิจฉัยเบื้องต้นเป็น GERD ข้อใดคือยาที่ให้ประสิทธิภาพสูงสุดในการรักษา?",
    options: [
      "Antacids",
      "H2-Receptor Antagonists (Ranitidine)",
      "Proton Pump Inhibitors (Omeprazole)",
      "Prokinetics (Domperidone)",
      "Sucralfate"
    ],
    answer: 2,
    explanation: "PPIs (เช่น Omeprazole) เป็นยาที่มีประสิทธิภาพสูงสุดในการยับยั้งการหลั่งกรดและรักษาอาการของ GERD รวมถึงช่วยให้หลอดอาหารที่อักเสบหายได้ดีกว่ากลุ่มอื่น",
    category: "Gastrointestinal",
    situation: "GERD"
  },
  {
    id: 4,
    question: "ในการเตรียมแผนการรักษาผู้ป่วยเบาหวาน (DM Type 2) ยา Metformin มีกลไกการออกฤทธิ์หลักตามข้อใด?",
    options: [
      "กระตุ้นการหลั่งอินซูลินจากตับอ่อน",
      "ยับยั้งการดูดซึมน้ำตาลที่ลำไส้เล็ก",
      "ลดการสร้างน้ำตาลที่ตับและเพิ่มความไวของอินซูลิน",
      "ยับยั้งเอนไซม์ SGLT2 ที่ไต",
      "เลียนแบบการทำงานของฮอร์โมน GLP-1"
    ],
    answer: 2,
    explanation: "Metformin ออกฤทธิ์หลักโดยการลดการสร้างน้ำตาลจากตับ (Hepatic glucose production) และเพิ่มความไวต่ออินซูลินในกล้ามเนื้อ (Insulin sensitivity)",
    category: "Endocrine",
    situation: "Diabetes"
  },
  {
    id: 5,
    question: "ผู้ป่วยหญิงตั้งครรภ์ไตรมาสที่ 1 มีอาการปวดศีรษะ ยาแก้ปวดชนิดใดที่ถือว่าปลอดภัยที่สุด (Pregnancy Category B)?",
    options: [
      "Aspirin",
      "Ibuprofen",
      "Paracetamol",
      "Naproxen",
      "Celecoxib"
    ],
    answer: 2,
    explanation: "Paracetamol (Acetaminophen) เป็นยาแก้ปวดและลดไข้ที่ปลอดภัยที่สุดสำหรับหญิงตั้งครรภ์ทุกไตรมาส ส่วน NSAIDs ควรหลีกเลี่ยง โดยเฉพาะในไตรมาสสุดท้าย",
    category: "Special Population",
    situation: "Pregnancy"
  },
  {
    id: 6,
    question: "ผู้ป่วยเป็นโรคหืด (Asthma) มีอาการกำเริบเฉียบพลัน (Acute Exacerbation) ยาพ่นชนิดใดที่ควรหยิบใช้เป็นอันดับแรกเพื่อบรรยายอาการ?",
    options: [
      "Salmeterol (LABA)",
      "Salbutamol (SABA)",
      "Fluticasone (ICS)",
      "Tiotropium (LAMA)",
      "Budesonide (ICS)"
    ],
    answer: 1,
    explanation: "Short-Acting Beta-2 Agonists (SABA) เช่น Salbutamol หรือ Albuterol เป็นยาขยายหลอดลมที่ออกฤทธิ์เร็ว เหมาะสำหรับบรรเทาความยากลำบากในการหายใจทันที",
    category: "Pulmonary",
    situation: "Asthma"
  },
  {
    id: 7,
    question: "ตามเกณฑ์มาตรฐานฯ พ.ศ. 2554 ข้อใดคือบทบาทหน้าที่ของเภสัชกรในการทำ DUE (Drug Use Evaluation)?",
    options: [
      "การจ่ายยาให้ผู้ป่วยตามใบสั่งยา",
      "การคัดกรองโรคเบื้องต้นในชุมชน",
      "การวิเคราะห์ข้อมูลเพื่อประเมินความสมเหตุผลของการใช้ยาในองค์กร",
      "การผลิตยาตระเตรียมในโรงพยาบาล",
      "การให้คำปรึกษาเรื่องการคุมกำเนิด"
    ],
    answer: 2,
    explanation: "การประเมินการใช้ยา (DUE) คือการรวบรวม วิเคราะห์ข้อมูล เพื่อเสนอแนวทางการใช้ยาที่สมเหตุผลและปลอดภัยในระดับองค์กร (ตามเกณฑ์ 5.6.3)",
    category: "System & Law",
    situation: "Competency"
  },
  {
    id: 8,
    question: "ผู้ป่วยมีอาการแพ้ยาแบบรุนแรง (Anaphylaxis) หลังจากได้รับยาฉีด Penicillin ยาชนิดใดคือ First-line treatment ที่ต้องให้ทันที?",
    options: [
      "Dexamethasone IV",
      "Chlorpheniramine IV",
      "Adrenaline (Epinephrine) IM",
      "Hydrocortisone IV",
      "Ranitidine IV"
    ],
    answer: 2,
    explanation: "Adrenaline (Epinephrine) ฉีดเข้ากล้ามเนื้อ (IM) เป็นการรักษาที่สำคัญที่สุดและต้องให้เร็วที่สุดในกรณี Anaphylaxis เพื่อเพิ่มความดันและขยายหลอดลม",
    category: "Infectious / Immune",
    situation: "Allergy"
  },
  {
    id: 9,
    question: "กลไกการเกิดอันตรายจากยา (Toxicology) ของ Paracetamol เมื่อได้รับเกินขนาด (Overdose) เกิดจากสารมัธยันตร์ (Intermediate) ชนิดใด?",
    options: [
      "Glucuronide conjugate",
      "Sulfate conjugate",
      "NAPQI",
      "Glutathione",
      "N-acetylcysteine"
    ],
    answer: 2,
    explanation: "เมื่อได้รับ Paracetamol เกินขนาด ร่างกายจะสร้างสาร NAPQI (N-acetyl-p-benzoquinone imine) จำนวนมาก ซึ่งเป็นพิษต่อตับหาก glutathione ในตับมีไม่เพียงพอ",
    category: "Toxicology",
    situation: "Overdose"
  },
  {
    id: 10,
    question: "ผู้ป่วยเริ่มใช้ยาแก้ซึมเศร้ากลุ่ม SSRIs (เช่น Fluoxetine) อาการไม่พึงประสงค์ใดที่มักพบในช่วงแรกของการรักษา?",
    options: [
      "ปากแห้ง ท้องผูก (Anticholinergic)",
      "คลื่นไส้ กระสับกระส่าย (Nausea/Agitation)",
      "น้ำหนักเพิ่มขึ้นอย่างรวดเร็ว",
      "ความดันโลหิตสูงเฉียบพลัน",
      "ปัสสาวะไม่ออก"
    ],
    answer: 1,
    explanation: "SSRIs มักทำให้เกิดอาการทางทางเดินอาหารและอาการกระสับกระส่ายในช่วง 1-2 สัปดาห์แรก ก่อนที่ผลการรักษาจะเริ่มเห็นชัดเจน",
    category: "Psychiatric",
    situation: "Depression"
  },
  {
    id: 11,
    question: "ผู้ป่วยชายมีอาการปวดข้อเท้าขวาอย่างรุนแรง บวมแดงร้อนเฉียบพลัน ตรวจพบระดับกรดยูริกในเลือดสูง วินิจฉัยเป็น Acute Gouty Arthritis ยาชนิดใดคือการรักษาทางเลือกแรกเพื่อบรรเทาอาการปวดอักเสบ?",
    options: [
      "Allopurinol",
      "Probenecid",
      "Colchicine หรือ NSAIDs",
      "Febuxostat",
      "Methotrexate"
    ],
    answer: 2,
    explanation: "ในการรักษาโรคเกาต์เฉียบพลัน (Acute Gout) ควรใช้ยาต้านการอักเสบ เช่น Colchicine, NSAIDs หรือ Corticosteroids ส่วนยาที่ลดระดับยูริก (เช่น Allopurinol) ไม่ควรเริ่มใช้ในช่วงที่มีอาการอักเสบเฉียบพลัน",
    category: "Bone and Joint",
    situation: "Gout"
  },
  {
    id: 12,
    question: "ผู้ป่วยโรคเบาหวานประเภทที่ 2 ที่ใช้ยา Glibenclamide มาพบเภสัชกรด้วยอาการ ใจสั่น เหงื่อออก ตัวสั่น และหน้ามืด ข้อใดคือสิ่งที่เภสัชกรควรแนะนำเบื้องต้น?",
    options: [
      "ดื่มน้ำเปล่ามากๆ",
      "รับประทานน้ำหวานหรือลูกอมทันที",
      "นอนพักผ่อน",
      "รีบรับประทานยาเม็ดถัดไปทันที",
      "งดอาหารมื้อถัดไป"
    ],
    answer: 1,
    explanation: "อาการใจสั่น เหงื่อออก และตัวสั่น เป็นสัญญาณของภาวะน้ำตาลในเลือดต่ำ (Hypoglycemia) ซึ่งเป็น ADR สำคัญของยาในกลุ่ม Sulfonylureas (เช่น Glibenclamide) การแก้ไขเบื้องต้นคือการได้รับน้ำตาลที่ดูดซึมเร็ว",
    category: "Endocrine",
    situation: "Diabetes/ADR"
  },
  {
    id: 13,
    question: "ผู้ป่วย HIV ที่กำลังรับประทานยาต้านไวรัสสูตรที่มี Tenofovir (TDF) ควรได้รับการติดตามค่าทางห้องปฏิบัติการใดสม่ำเสมอเพื่อเฝ้าระวังพิษจากยา?",
    options: [
      "ระดับน้ำตาลในเลือด (FBG)",
      "ค่าการทำงานของไต (Serum Creatinine/eGFR)",
      "ค่าการทำงานของตับ (ALT/AST)",
      "ระดับไขมันในเลือด (LDL)",
      "ความเข้มข้นของเลือด (Hct)"
    ],
    answer: 1,
    explanation: "Tenofovir disoproxil fumarate (TDF) มีพิษต่อไต (Nephrotoxicity) และอาจทำให้เกิด Fanconi syndrome ได้ จึงต้องติดตามการทำงานของไตอย่างใกล้ชิด",
    category: "Infectious Diseases",
    situation: "HIV"
  },
  {
    id: 14,
    question: "ในการคัดกรองผู้ป่วยที่มาซื้อยาแก้แพ้ที่ร้านยา หากผู้ป่วยแจ้งว่ามีอาชีพขับรถบรรทุก เภสัชกรควรเลือกยาแก้แพ้ชนิดใดที่เหมาะสมที่สุด?",
    options: [
      "Chlorpheniramine",
      "Hydroxyzine",
      "Loratadine",
      "Diphenhydramine",
      "Cyproheptadine"
    ],
    answer: 2,
    explanation: "Second-generation antihistamines เช่น Loratadine หรือ Cetirizine มีคุณสมบัติผ่านเข้าสู่สมองได้น้อยมาก ทำให้ไม่เกิดอาการง่วงซึม เหมาะสำหรับผู้ที่ต้องทำงานเสี่ยงอันตรายหรือขับขี่พาหนะ",
    category: "Screening / Health Promotion",
    situation: "Allergic Rhinitis"
  },
  {
    id: 15,
    question: "กฎหมายและจรรยาบรรณ: หากเภสัชกรพบว่ายายาเสพติดให้โทษประเภท 3 (เช่น ยาแก้ไอผสมโคเดอีน) ในร้านยามีจำนวนไม่ตรงกับบัญชีที่ลงไว้ จะต้องดำเนินตามข้อใด?",
    options: [
      "ไม่ต้องทำอะไร รอตรวจสอบรอบปี",
      "ทำลายยาทิ้งเพื่อให้ตัวเลขตรงกัน",
      "รายงานต่อสำนักงานคณะกรรมการอาหารและยา (อย.) ภายในเวลาที่กำหนด",
      "จดบันทึกไว้ในสมุดส่วนตัว",
      "ปรับปรุงตัวเลขในบัญชีให้ตรงกับความเป็นจริงเอง"
    ],
    answer: 2,
    explanation: "ตามกฎหมายยาเสพติด เภสัชกรมีหน้าที่จัดทำบัญชีรับ-จ่าย และหากมีความผิดปกติเกิดขึ้นต้องรายงานต่อพนักงานเจ้าหน้าที่ตามระเบียบ",
    category: "Law and Ethics",
    situation: "Regulatory"
  },
  {
    id: 16,
    question: "ผู้ป่วยหญิงให้นมบุตรมีอาการไอและเจ็บคอมาก ยาในกลุ่มใดที่ควรหลีกเลี่ยงเป็นอย่างยิ่งเนื่องจากสามารถขับออกทางน้ำนมและอาจกดการหายใจของทารกได้?",
    options: ["Paracetamol", "Amoxicillin", "Codeine", "Bromhexine", "Chlorpheniramine"],
    answer: 2,
    explanation: "Codeine ถูกเปลี่ยนเป็น Morphine ในร่างกาย ซึ่งขับออกทางน้ำนมและอาจทำให้ทารกที่ได้รับน้ำนมเกิดภาวะกดการหายใจ (Respiratory depression) ได้",
    category: "Special Population",
    situation: "Lactation"
  },
  {
    id: 17,
    question: "ในการบริหารจัดการคลังยา ระบบใดที่ช่วยลดความเสี่ยงจากการหมดอายุของยาได้ดีที่สุด?",
    options: ["First-In, First-Out (FIFO)", "First-Expired, First-Out (FEFO)", "Last-In, First-Out (LIFO)", "ABC Analysis", "VEN Analysis"],
    answer: 1,
    explanation: "FEFO (First-Expired, First-Out) คือการนำยาที่จะหมดอายุก่อนมาให้ก่อน ซึ่งมีประสิทธิภาพในการป้องกันยาหมดอายุค้างคลังได้ดีกว่า FIFO",
    category: "System & Management",
    situation: "Inventory"
  },
  {
    id: 18,
    question: "ผู้ป่วยมีอาการหัวใจเต้นผิดจังหวะ (Atrial Fibrillation) และกำลังใช้ยา Warfarin ข้อใดคือค่าทางห้องปฏิบัติการที่ใช้ตรวจสอบประสิทธิภาพและความปลอดภัยของยา?",
    options: ["HbA1c", "Serum Creatinine", "INR (International Normalized Ratio)", "Troponin I", "Platelet count"],
    answer: 2,
    explanation: "INR เป็นค่ามาตรฐานสากลในการติดตามผลของยา Warfarin โดยปกติเป้าหมายจะอยู่ที่ 2.0-3.0 เพื่อป้องกันการเกิดลิ่มเลือดอุดตันและความเสี่ยงในการเลือดออก",
    category: "Cardiovascular",
    situation: "Anticoagulation"
  },
  {
    id: 19,
    question: "อาการไม่พึงประสงค์ (ADR) ที่รุนแรงของยาในกลุ่ม Aminoglycosides (เช่น Gentamicin) คือข้อใด?",
    options: ["ไอแห้ง", "พิษต่อหูและพิษต่อไต (Oto/Nephrotoxicity)", "หน้ามืดเวลากดนอน", "ปวดกล้ามเนื้ออย่างรุนแรง", "เหงือกบวม"],
    answer: 1,
    explanation: "Aminoglycosides มีพิษสะสมที่สำคัญคือ Ototoxicity (ทำให้สูญเสียการได้ยินหรือทรงตัว) และ Nephrotoxicity (ทำให้ไตวายเฉียบพลัน)",
    category: "Infectious Diseases",
    situation: "ADR/Antibiotics"
  },
  {
    id: 20,
    question: "ผู้ป่วยโรคหืด (Asthma) ที่ใช้ยาพ่นกลุ่ม ICS (เช่น Budesonide) เป็นประจำ ควรได้รับคำแนะนำอย่างไรเพื่อป้องกันการเกิดเชื้อราในช่องปาก?",
    options: ["ดื่มน้ำมากๆ หลังพ่นยา", "บ้วนปากและคอด้วยน้ำสะอาดหลังพ่นยา", "งดรับประทานอาหารหลังพ่นยา 1 ชม.", "พ่นยาเฉพาะตอนมีอาการ", "ใช้แปรงสีฟันขัดลิ้นทุกครั้ง"],
    answer: 1,
    explanation: "การบ้วนปาก (Rinse and spit) หลังพ่นยา Corticosteroids จะช่วยกำจัดละอองยาที่ค้างในช่องปาก ลดความเสี่ยงในการเกิด Oral Candidiasis (เชื้อรา)",
    category: "Pulmonary",
    situation: "Asthma/Counseling"
  },
  {
    id: 21,
    question: "กลไกการออกฤทธิ์ของยา Omeprazole คือข้อใด?",
    options: ["เป็นด่างไปสะเทินกรดในกระเพาะ", "ยับยั้งเอนไซม์ H+/K+ ATPase", "บล็อก H2-receptor", "เคลือบแผลในกระเพาะอาหาร", "กระตุ้นการหลั่งเมือก (Mucus)"],
    answer: 1,
    explanation: "PPIs (เช่น Omeprazole) ออกฤทธิ์ยับยั้งเอนไซม์ Proton Pump (H+/K+ ATPase) ถาวร ซึ่งเป็นขั้นตอนสุดท้ายของการหลั่งกรด",
    category: "Gastrointestinal",
    situation: "Peptic Ulcer"
  },
  {
    id: 22,
    question: "ผู้ป่วยอายุ 70 ปี มีอาการสับสนและล้มบ่อย เมื่อตรวจสอบพบว่าเพิ่งเริ่มยาแก้แพ้กลุ่ม First-generation ยาชนิดนี้มีคุณสมบัติใดที่ทำให้เกิดอาการดังกล่าวในผู้สูงอายุ?",
    options: ["Anticholinergic effects", "Antihypertensive effects", "Anticoagulant effects", "Hypoglycemic effects", "Anabolic effects"],
    answer: 0,
    explanation: "First-generation antihistamines มีฤทธิ์ Anticholinergic แรง ซึ่งอาจทำให้เกิดความสับสน (Confusion) ท้องผูก ปัสสาวะคั่ง และเพิ่มความเสี่ยงในการล้มในผู้สูงอายุ (Beers Criteria)",
    category: "Special Population",
    situation: "Elderly"
  },
  {
    id: 23,
    question: "ในการรักษาพิษจากยา Paracetamol เกินขนาด สารต้านพิษ (Antidote) ที่จำเพาะคือข้อใด?",
    options: ["Naloxone", "Flumazenil", "N-acetylcysteine (NAC)", "Atropine", "Vitamin K"],
    answer: 2,
    explanation: "N-acetylcysteine (NAC) ช่วยเพิ่มระดับ Glutathione ในตับเพื่อไปจับกับสาร Napqi (พิษ) และช่วยเปลี่ยนทางเดินกำจัดพิษให้ปลอดภัยขึ้น",
    category: "Toxicology",
    situation: "Overdose/Antidote"
  },
  {
    id: 24,
    question: "ผู้ป่วยโรคหัวใจที่ได้รับยา Digoxin หากพบภาวะใดในเลือดจะเพิ่มความเสี่ยงต่อการเกิดพิษจากยา Digoxin (Digoxin Toxicity) ได้มากที่สุด?",
    options: ["Hyperkalemia", "Hypokalemia", "Hyponatremia", "Hypercalcemia", "Hypermagnesemia"],
    answer: 1,
    explanation: "Hypokalemia (ระดับโพแทสเซียมในเลือดต่ำ) จะเพิ่มการจับของ Digoxin ที่ Na+/K+ ATPase pump ทำให้เกิดหัวใจเต้นผิดจังหวะรุนแรงได้",
    category: "Cardiovascular",
    situation: "Drug Interaction/Labs"
  },
  {
    id: 25,
    question: "ยาสมุนไพรชนิดใดที่มีชื่อเสียงในการใช้ขับลม แก้ท้องอืด ท้องเฟ้อ และใช้ประกอบอาหารบ่อยๆ?",
    options: ["ขมิ้นชัน", "ขิง", "กระชายดำ", "ฟ้าทะลายโจร", "บอระเพ็ด"],
    answer: 1,
    explanation: "ขิง (Ginger) มีสรรพคุณเด่นในการขับลม แก้คลื่นไส้อาเจียน และช่วยเพิ่มการบีบตัวของทางเดินอาหาร",
    category: "Herbal Medicine",
    situation: "Common Ailments"
  },
  {
    id: 26,
    question: "ผู้ป่วยอุบัติเหตุเสียเลือดมาก มีภาวะความดันต่ำเฉียบพลัน แพทย์ต้องการให้สารน้ำที่เป็น Isotonic Solution ชนิดใดเหมาะสมที่สุด?",
    options: ["5% Dextrose in Water (D5W)", "0.9% Sodium Chloride (Normal Saline)", "0.45% Sodium Chloride", "10% Dextrose", "Sterile Water"],
    answer: 1,
    explanation: "0.9% Normal Saline เป็น Isotonic solution ที่ใช้สำหรับกู้คืนปริมาตรพลาสมา (Volume replacement) ในภาวะ Shock หรือเสียเลือด",
    category: "Fluids & Electrolytes",
    situation: "Critical Care"
  },
  {
    id: 27,
    question: "ยาในกลุ่ม Statins (เช่น Simvastatin) ควรแนะนำให้ผู้ป่วยรับประทานในช่วงเวลาใดเพื่อให้ได้ประสิทธิภาพสูงสุดในการยับยั้งการสร้างคอเลสเตอรอล?",
    options: ["ก่อนอาหารเช้า", "หลังอาหารเช้า", "พร้อมมื้ออาหารเที่ยง", "ก่อนนอน (Evening/Bedtime)", "ตอนตื่นนอน"],
    answer: 3,
    explanation: "เนื่องจากกระบวนการสร้างคอเลสเตอรอลในตับจะเกิดขึ้นสูงสุดในช่วงกลางคืน ยาที่มีระยะเวลาออกฤทธิ์สั้นอย่าง Simvastatin จึงควรทานก่อนนอน",
    category: "Cardiovascular",
    situation: "Dyslipidemia"
  },
  {
    id: 28,
    question: "ในการประเมินความร่วมมือในการใช้ยา (Adherence) วิธีการใดที่ถือว่าเป็น 'Gold Standard' ในเชิงปฏิบัติการ?",
    options: ["การซักถามผู้ป่วย directly", "การนับเม็ดยา (Pill count)", "การใช้เครื่องมืออิเล็กทรอนิกส์ (MEMS)", "การตรวจระดับยาในเลือด", "การสังเกตผลการรักษา"],
    answer: 2,
    explanation: "MEMS (Medication Event Monitoring System) หรือฝาขวดเก็บข้อมูลถือเป็นวิธีที่แม่นยำที่สุด แต่ในโรงพยาบาลส่วนใหญ่มักใช้การนับเม็ดหรือซักถาม",
    category: "Social Pharmacy",
    situation: "Adherence"
  },
  {
    id: 29,
    question: "ผู้ป่วยมีอาการ 'Red Man Syndrome' ระหว่างการได้รับยาฉีด Vancomycin เภสัชกรควรแนะนำให้ดำเนินการอย่างไรกับอัตราการให้ยา?",
    options: ["หยุดให้ยาทันทีและไม่ให้ซ้ำอีก", "ลดอัตราความเร็วในการหยด (Infusion rate)", "เพิ่มความเร็วเพื่อให้ยาหมดไวขึ้น", "เปลี่ยนเป็นฉีดเข้ากล้ามเนื้อแทน", "ให้ยาขับปัสสาวะควบคู่กัน"],
    answer: 1,
    explanation: "Red Man Syndrome มักเกิดจากการหลั่ง Histamine เมื่อให้ Vancomycin เร็วเกินไป การแก้ไขคือการลดความเร็วในการให้ลง (ควรให้มากกว่า 60 นาที)",
    category: "Infectious Diseases",
    situation: "ADR/Infusion"
  },
  {
    id: 31,
    question: "ผู้ป่วยชายอายุ 65 ปี มีโรคประจำตัวคือ AF และ CKD Stage 4 (CrCl 25 mL/min) แพทย์ต้องการเริ่มยา Dabigatran เพื่อป้องกัน Stroke ควรให้คำแนะนำอย่างไร?",
    options: ["สามารถใช้ขนาดปกติ 150 mg bid ได้", "แนะนำให้เปลี่ยนเป็น Warfarin เนื่องจาก Dabigatran ห้ามใช้ใน CrCl < 30", "ลดขนาดลงเหลือ 75 mg bid", "ใช้ขนาด 110 mg bid ได้ตามปกติ", "แนะนำให้หยุดใช้ยากลุ่ม Anticoagulants ทั้งหมด"],
    answer: 1,
    explanation: "Dabigatran ถูกขับออกทางไตสูง (~80%) ในประเทศไทยและยุโรปห้ามใช้ (Contraindicated) ในผู้ป่วยที่มี CrCl < 30 mL/min เนื่องจากเสี่ยงต่อการเกิดเลือดออกรุนแรง ควรเปลี่ยนไปใช้ Warfarin หรือ Apixaban (ตามข้อบ่งใช้)",
    category: "Cardiovascular/Renal",
    situation: "Anticoagulation in CKD"
  },
  {
    id: 32,
    question: "ผู้ป่วยหญิงท้อง 28 สัปดาห์ มีอาการแสบร้อนกลางอก (GERD) อย่างรุนแรงและบ่อยครั้ง การรักษาลำดับแรก (First-line) ตามหลักการรักษาความปลอดภัยในหญิงตั้งครรภ์คือข้อใด?",
    options: ["แนะปรับพฤติกรรมและทาน Antacids/Alginates", "เริ่ม Omeprazole 20 mg OD ทันที", "ให้ Misoprostol เพื่อป้องกันแผล", "แนะนำให้ดื่มน้ำอัดลมเพื่อขับลม", "เริ่ม Ranitidine ขนาดสูง"],
    answer: 0,
    explanation: "ในหญิงตั้งครรภ์ที่มีอาการ GERD ลำดับแรกคือการปรับพฤติกรรม (Lifestyle modification) หากไม่ดีขึ้นควรใช้ Antacids หรือ Alginates ซึ่งมีความปลอดภัยลำดับต้นๆ ก่อนพิจารณาใชยากลุ่ม PPIs",
    category: "OB-GYN",
    situation: "GERD in Pregnancy"
  },
  {
    id: 33,
    question: "ผู้ป่วยเป็นโรค HIV รับประทานยา TLD (Tenofovir/Lamivudine/Dolutegravir) ตรวจพบว่ามีอาการซึมเศร้า แพทย์สั่งจ่าย St. John's Wort ในฐานะเภสัชกรท่านจะให้คำแนะนำอย่างไร?",
    options: ["สามารถรับประทานร่วมกันได้ช่วยเสริมการรักษา", "ห้ามรับประทานร่วมกันเนื่องจาก St. John's Wort จะลดระดับยาทั้งสูตร TLD จนรักษาไม่ได้ผล", "ให้รับประทานห่างกัน 2 ชั่วโมง", "ลดขนาดยา TLD ลงครึ่งหนึ่ง", "ให้รับประทานเฉพาะช่วงที่มีอาการ"],
    answer: 1,
    explanation: "St. John's Wort เป็น Potent CYP3A4 และ P-gp inducer ซึ่งจะลดระดับยาในสูตร TLD (โดยเฉพาะ Dolutegravir และ Tenofovir) อย่างรุนแรง ทำให้เกิดความล้มเหลวในการรักษา (Treatment failure) และดื้อยา",
    category: "Drug Interaction",
    situation: "HIV and Herbal Interaction"
  },
  {
    id: 34,
    question: "ผู้ป่วยเด็กอายุ 5 ปี มีอาการหอบหืดกำเริบ (Acute Asthma Exacerbation) ที่ห้องฉุกเฉิน ตัวเลือกใดคือการบริหารยากลุ่ม Bronchodilator ที่เหมาะสมที่สุดตาม Standard of Care?",
    options: ["ฉีด Adrenaline เข้ากล้ามเนื้อ", "พ่นยา Salbutามol ผ่าน MDI with Spacer หรือ Nebulizer", "ให้ Theophylline ชนิดกิน", "ให้ยากลุ่ม Antihistamine เพื่อลดน้ำมูก", "พ่นยา Steroid ขนาดสูงเพียงอย่างเดียว"],
    answer: 1,
    explanation: "การพ่นยา SABA (เช่น Salbutamol) ผ่าน MDI with Spacer หรือ Nebulizer คือมาตรฐานแรกในการรักษา Acute Exacerbation เพื่อขยายหลอดลมอย่างรวดเร็ว",
    category: "Pulmonary",
    situation: "Acute Asthma in Pediatric"
  },
  {
    id: 35,
    question: "ผู้ป่วยมีภาวะ Hyperkalemia (K = 6.8 mEq/L) และตรวจคลื่นไฟฟ้าหัวใจพบ EKG changes (T-wave สูงแหลม) ยาตัวแรกที่ต้องให้เพื่อป้องกันหัวใจหยุดเต้น (Cardiac Protection) คือข้อใด?",
    options: ["Sodium Bicarbonate", "Furosemide", "Calcium Gluconate IV", "Sodium Polystyrene Sulfonate (Kayexalate)", "Insulin with D50W"],
    answer: 2,
    explanation: "เมื่อมีภาวะ Hyperkalemia ร่วมกับ EKG changes เป้าหมายแรกคือการ Stabilize cardiac membrane เพื่อป้องกันภาวะหัวใจเต้นผิดจังหวะ โดยการให้ Calcium Gluconate IV อย่างเร่งด่วน",
    category: "Renal/Electrolytes",
    situation: "Emergency Hyperkalemia"
  },
  {
    id: 36,
    question: "ผู้ป่วยชายอายุ 70 ปี มาด้วยอาการ BPH แพทย์จ่ายยา Terazosin ให้รับประทาน คำแนะนำใดที่สำคัญที่สุดเพื่อป้องกันภาวะแทรกซ้อนจากการเริ่มยาครั้งแรก?",
    options: ["ให้รับประทานตอนเดินมากๆ", "ให้รับประทานก่อนนอน (First-dose syncope prevention)", "ให้เคี้ยวยาให้ละเอียด", "ห้ามรับประทานร่วมกับน้ำเปล่า", "ให้รับประทานมื้อเช้าก่อนออกจากบ้าน"],
    answer: 1,
    explanation: "Terazosin เป็น Alpha-1 blocker ซึ่งมีผลข้างเคียงคือ Orthostatic hypotension โดยเฉพาะในมื้อแรก (First-dose phenomenon) จึงควรแนะนำให้ทานก่อนนอนเพื่อป้องกันอาการหน้ามืดล้มตัว",
    category: "Genitourinary",
    situation: "BPH Pharmacotherapy"
  },
  {
    id: 37,
    question: "ผู้ป่วยทาน Warfarin เป็นประจำ ตรวจค่า INR ได้ 7.5 (ไม่มีเลือดออกรุนแรง) ตามโปรโตคอลการจัดการ เภสัชกรควรแนะนำอย่างไร?",
    options: ["ให้ฉีด Vitamin K เข้ากล้ามเนื้อทันที", "งด Warfarin 1-2 มื้อ และพิจารณาให้ Vitamin K ขนาดต่ำชนิดกิน", "กิน Warfarin ต่อไปในขนาดเดิม", "เปลี่ยนไปใช้ Aspirin แทน", "ให้ทานน้ำผักใบเขียวมากๆ"],
    answer: 1,
    explanation: "หาก INR อยู่ระหว่าง 4.5-10 และไม่มีเลือดออก แนะนำให้งด Warfarin 1-2 มื้อ และอาจให้ Vitamin K (1-2.5 mg) ชนิดรับประทานหากมีความเสี่ยงเลือดออกสูง",
    category: "Hematology",
    situation: "High INR Management"
  },
  {
    id: 38,
    question: "ยาในข้อใดที่มีกลไกการออกฤทธิ์เป็น SGLT2 Inhibitor และมีประโยชน์ในการลดโอกาสเกิด Heart Failure hospitalization ในผู้ป่วยเบาหวาน?",
    options: ["Sitagliptin", "Empagliflozin", "Pioglitazone", "Liraglutide", "Glibenclamide"],
    answer: 1,
    explanation: "Empagliflozin เป็นยากลุ่ม SGLT2 Inhibitor ที่ได้รับการรับรองว่าช่วยลด Cardiovascular death และ Heart failure hospitalization ได้อย่างมีนัยสำคัญ",
    category: "Endocrine/CV",
    situation: "DM and CV Protection"
  },
  {
    id: 39,
    question: "ในการคัดกรองผู้ป่วยที่มร้านยา (5.6.1) หากพบผู้ป่วยมาด้วยอาการ 'เจ็บปวดกล้ามเนื้อน่องเพียงข้างเดียว ขาบวมแดง' หลังจากการเดินทางไกล ข้อใดคือการจัดการที่เหมาะสมที่สุด?",
    options: ["จ่ายยาหม่องไปนวด", "ให้ยา NSAIDs และให้กลับไปพักผ่อน", "รีบส่งต่อโรงพยาบาล (Refer) เนื่องจากสงสัยภาวะ DVT", "ให้แนะนำการออกกำลังกายขา", "จ่ายยาปฏิชีวนะเนื่องจากสงสัยผิวหนังอักเสบ"],
    answer: 2,
    explanation: "อาการบวมแดงที่น่องเพียงข้างเดียวหลังอยู่นิ่งนานๆ เป็นอาการคลาสสิกของ Deep Vein Thrombosis (DVT) ซึ่งเป็นภาวะฉุกเฉินระดับหนึ่งที่เสี่ยงต่อ Pulmonary Embolism ต้องรีบส่งต่อโรงพยาบาล",
    category: "Screening/Referral",
    situation: "DVT Suspicion"
  },
  {
    id: 40,
    question: "ผู้ป่วยได้รับยา Digoxin ตรวจพบระดับยาในเลือด (VPC) สูงและเริ่มมีอาการเห็นแสงสีเหลือง (Yellow Vision) ข้อใดคือ Antidote ที่เฉพาะเจาะจงที่สุด?",
    options: ["Atropine", "Digoxin Immune Fab (DigiFab)", "Desferrioxamine", "Naloxone", "Protamine Sulfate"],
    answer: 1,
    explanation: "Digoxin Immune Fab เป็นแอนติบอดีที่จับกับ Digoxin โดยตรงเพื่อถอนพิษในกรณีที่มีระดับยาเป็นพิษรุนแรง (Digoxin Toxicity)",
    category: "Toxicology",
    situation: "Digoxin Toxicity"
  },
  {
    id: 41,
    question: "ผู้ป่วยหญิงมีอาการตกขาวสีขาวขุ่นคล้ายตะกอนนม คันช่องคลอดมาก (Vulvovaginal Candidiasis) ยาตัวเลือกแรกที่เหมาะสมสำหรับการใช้ยาเฉพาะที่คือข้อใด?",
    options: ["Metronidazole vaginal tablet", "Clotrimazole vaginal suppository", "Povidone-iodine douche", "Acyclovir cream", "Hydrocortisone cream"],
    answer: 1,
    explanation: "อาการตกขาวคล้ายตะกอนนมและคันมากเป็นลักษณะของการติดเชื้อรา (Candida) ซึ่งรักษาได้ด้วยยา Clotrimazole ชนิดเหน็บช่องคลอด",
    category: "Infectious Disease",
    situation: "Vaginal Candidiasis"
  },
  {
    id: 42,
    question: "ข้อใดคืออาการข้างเคียงที่สำคัญและเป็นอันตรายของยา Clozapine ที่เภสัชกรต้องติดตามผล Lab อย่างเคร่งครัด?",
    options: ["Hemolytic Anemia", "Agranulocytosis", "Acute Renal Failure", "Gingival Hyperplasia", "Hypothyroidism"],
    answer: 1,
    explanation: "Clozapine มีความเสี่ยงสูงต่อการเกิด Agranulocytosis (เม็ดเลือดขาวต่ำอย่างรุนแรง) ต้องมีการติดตาม Absolute Neutrophil Count (ANC) เป็นประจำ",
    category: "Psychiatry",
    situation: "Clozapine Monitoring"
  },
  {
    id: 43,
    question: "ผู้ป่วยเด็กมีอาการหูชั้นกลางอักเสบ (AOM) แพทย์สั่งจ่าย Amoxicillin 90 mg/kg/day ขนานยาขนาดสูงนี้มีวัตถุประสงค์เพื่อเชื้อใดเป็นสำคัญ?",
    options: ["Mycoplasma pneumoniae", "Penicillin-resistant Streptococcus pneumoniae (PRSP)", "Staphylococcus aureus", "Pseudomonas aeruginosa", "E. coli"],
    answer: 1,
    explanation: "การใช้ Amoxicillin ขนาดสูง (High-dose) ในเด็กที่เป็น AOM มุ่งเน้นไปที่การเอาชนะกลไกการดื้อยาของเชื้อ S. pneumoniae ที่ดื้อต่อ Penicillin",
    category: "Infectious Disease",
    situation: "High-dose Amox in AOM"
  },
  {
    id: 44,
    question: "ผู้ป่วยมีภาวะ Anaphylactic Shock หลังฉีดยาปฏิชีวนะ ยาชนิดแรกที่ต้องได้รับทันทีคือข้อใด?",
    options: ["Chlorpheniramine IV", "Dexamethasone IV", "Epinephrine (Adrenaline) IM/IV", "Salbutamol nebulizer", "Ranitidine IV"],
    answer: 2,
    explanation: "Epinephrine เป็น Life-saving drug ในกรณี Anaphylaxis เพื่อเพิ่มความดันและลดการหดเกร็งของหลอดลมอย่างรวดเร็ว",
    category: "Emergency",
    situation: "Anaphylaxis Management"
  },
  {
    id: 45,
    question: "ยากลุ่ม NSAIDs ข้อใดมีคุณสมบัติเป็น Selective COX-2 Inhibitor ซึ่งลดความเสี่ยงต่อการเกิดแผลในกระเพาะอาหารได้มากกว่ากลุ่มทั่วไป?",
    options: ["Ibuprofen", "Naproxen", "Celecoxib", "Indomethacin", "Diclofenac"],
    answer: 2,
    explanation: "Celecoxib ออกฤทธิ์ยับยั้งเฉพาะเอนไซม์ COX-2 ทำให้มีผลต่อกระเพาะอาหารน้อยกว่ายากลุ่ม Non-selective NSAIDs",
    category: "Bone & Joint",
    situation: "NSAIDs Selectivity"
  },
  {
    id: 46,
    question: "ข้อใดคือความผิดพลาดทางยา (Medication Error) ประเภท 'Monitoring Error' ตามเกณฑ์ความปลอดภัยของผู้ป่วย?",
    options: ["คีย์ยาผิดจำนวนข้อ", "จ่ายยาให้ผิดคน", "ไม่ได้ตรวจระดับยาตามแผนที่วางไว้เพื่อปรับขนาด", "เลือกยาผิดขนาดโดยตั้งใจ", "ผู้ป่วยลืมทานยาเองที่บ้าน"],
    answer: 2,
    explanation: "Monitoring Error คือความผิดพลาดที่เกิดจากการไม่ติดตามผลลัพธ์ของการใช้ยาหรือพารามิเตอร์ทางห้องปฏิบัติการเพื่อประเมินความปลอดภัยและประสิทธิภาพ",
    category: "Public Health",
    situation: "Medication Error Types"
  },
  {
    id: 47,
    question: "ผู้ป่วยชายอายุ 55 ปี เป็นเบาหวานและเริ่มมีโปรตีนรั่วในปัสสาวะ (Microalbuminuria) แพทย์ควรเริ่มยากลุ่มใดเพื่อชะลอการเสื่อมของไต (Renoprotection)?",
    options: ["Furosemide", "Enalapril (ACEI)", "Amlodipine", "Hydrochlorothiazide", "Atenolol"],
    answer: 1,
    explanation: "ยากลุ่ม ACEIs (เช่น Enalapril) หรือ ARBs มีคุณสมบัติช่วยลดความดันในหน่วยไตและลดโปรตีนรั่ว (antiproteinuric effect) ช่วยชะลอความเสื่อมของไตในผู้ป่วยเบาหวาน",
    category: "Endocrine/Renal",
    situation: "Diabetic Nephropathy"
  },
  {
    id: 48,
    question: "ผู้ป่วยชายมีอาการปวดข้อเท้าเฉียบพลัน บวม แดง ร้อน ตรวจพบระดับกรดยูริกสูง (Acute Gouty Attack) ยาตัวเลือกแรกที่แนะนำคือข้อใด?",
    options: ["Allopurinol", "Febuxostat", "Colchicine", "Vitamin C", "Glucosamine"],
    answer: 2,
    explanation: "ในช่วงที่มีอาการอักเสบเฉียบพลัน (Acute attack) เป้าหมายคือลดการอักเสบ โดยการใช้ Colchicine หรือ NSAIDs ห้ามเริ่มยาลดกรดยูริก (Allopurinol) ในช่วงนี้ทันที",
    category: "Bone & Joint",
    situation: "Acute Gout Management"
  },
  {
    id: 49,
    question: "ยาในข้อใดเป็นยากลุ่ม Inhaled Corticosteroid (ICS) ซึ่งต้องแนะนำให้ผู้ป่วย 'บ้วนปากหลังพ่นยา' เพื่อป้องกันการเกิดเชื้อราในปาก?",
    options: ["Salbutamol", "Fluticasone", "Ipratropium", "Salmeterol", "Theophylline"],
    answer: 1,
    explanation: "Fluticasone เป็นยาพ่นสเตียรอยด์ การบ้วนปากหลังใช้งานจะช่วยลดการสะสมของยาในช่องปากเพื่อป้องกัน Oral Candidiasis และอาการเจ็บคอ",
    category: "Pulmonary",
    situation: "Inhaler Counseling"
  },
  {
    id: 50,
    question: "ข้อใดคือเกณฑ์ 'Major Criteria' ของการวินิจฉัย Rheumatic Heart Disease ตาม Jones Criteria?",
    options: ["ไข้ (Fever)", "ปวดข้อ (Arthralgia)", "หัวใจอักเสบ (Carditis)", "ค่า ESR สูง", "คลื่นไฟฟ้าหัวใจ PR interval ยาว"],
    answer: 2,
    explanation: "Carditis เป็นหนึ่งใน Major Criteria ของ Jones Criteria ในขณะที่ ไข้ และ ปวดข้อ เป็นเพียง Minor Criteria เท่านั้น",
    category: "Cardiovascular",
    situation: "Rheumatic Fever Criteria"
  },
  {
    id: 51,
    question: "ผู้ป่วยได้รับยา Phenytoin แล้วมีอาการเหงือกโต (Gingival Hyperplasia) เภสัชกรควรให้คำแนะนำเบื้องต้นอย่างไร?",
    options: ["ให้หยุดยาเองทันที", "แนะนำการรักษาความสะอาดในช่องปากอย่างเคร่งครัดและพบทันตแพทย์", "ให้ใช้ยาสีฟันขนาดสูง", "ให้รับประทานแคลเซียมเพิ่ม", "แนะนำให้ถอนฟันออก"],
    answer: 1,
    explanation: "Gingival Hyperplasia เป็นผลข้างเคียงเฉพาะของ Phenytoin การรักษาความสะอาดในช่องปากจะช่วยลดความรุนแรงและต้องปรึกษาแพทย์หากมีปัญหามาก",
    category: "Neurology",
    situation: "Phenytoin Side Effect"
  },
  {
    id: 52,
    question: "ยาข้อใดห้ามใช้ร่วมกับ Simvastatin เนื่องจากความเสี่ยงต่อการเกิด Rhabdomyolysis (กล้ามเนื้อสลาย) เพิ่มสูงขึ้นอย่างมาก?",
    options: ["Metformin", "Gemfibrozil", "Amlodipine", "Losartan", "Paracetamol"],
    answer: 1,
    explanation: "Gemfibrozil จะยับยั้งกระบวนการ Glucuronidation ของ Statins ทำให้ระดับ Statins ในเลือดสูงขึ้นมาก เสี่ยงต่อกล้ามเนื้อสลายตัวอย่างรุนแรง",
    category: "Drug Interaction",
    situation: "Statin and Fibrate"
  },
  {
    id: 53,
    question: "สารเคมีในสมุนไพรข้อใดที่พบใน 'ฟ้าทะลายโจร' และมีรายงานว่าช่วยยับยั้งการเพิ่มจำนวนของไวรัสบางชนิด?",
    options: ["Curcumin", "Andrographolide", "Allicin", "Gingerol", "Quercetin"],
    answer: 1,
    explanation: "Andrographolide เป็นสารสำคัญในฟ้าทะลายโจรที่มีฤทธิ์ต้านการอักเสบและต้านไวรัส",
    category: "Herbal Medicine",
    situation: "Andrographolide Activity"
  },
  {
    id: 54,
    question: "ผู้ป่วยได้รับยา Warfarin และต้องการรับประทานผลิตภัณฑ์เสริมอาหาร 'น้ำมันปลา (Fish Oil)' เภสัชกรควรระวังเรื่องอะไร?",
    options: ["ระดับน้ำตาลในเลือดสูง", "ความเสี่ยงต่อการเกิดเลือดออก (Increased bleeding risk)", "ยา Warfarin ไม่ออกฤทธิ์", "ทำให้ง่วงนอน", "ความดันโลหิตสูง"],
    answer: 1,
    explanation: "น้ำมันปลาในขนาดสูงอาจมีฤทธิ์ต้านการเกาะกลุ่มของเกล็ดเลือด เมื่อใช้ร่วมกับ Warfarin จะเพิ่มความเสี่ยงต่อภาวะเลือดออกผิดปกติ",
    category: "Drug Interaction",
    situation: "Warfarin and Supplements"
  },
  {
    id: 55,
    question: "ในการเตรียมยา Sterile (5.6.3) ข้อใดคือ 'Laminar Air Flow' ประเภทที่ใช้ในการเตรียมยาเคมีบำบัดเพื่อความปลอดภัยของผู้ปฏิบัติงาน?",
    options: ["Horizontal Laminar Flow", "Vertical Laminar Flow (Biological Safety Cabinet Class II)", "เปิดเตรียมกลางแจ้ง", "ใช้เครื่องดูดฝุ่นทั่วไป", "เตรียมในห้องมืด"],
    answer: 1,
    explanation: "ยากลุ่ม Cytotoxic (ยาเคมีบำบัด) ต้องเตรียมในตู้ BSC Class II (Vertical Flow) เพื่อป้องกันไม่ให้ไอระเหยของยาพัดเข้าหาผู้เตรียม",
    category: "Pharmacy Practice",
    situation: "Cytotoxic Preparation"
  },
  {
    id: 56,
    question: "ข้อใดคือลักษณะของ 'Pre-renal AKI' เมื่อตรวจวิเคราะห์ปัสสาวะและเลือด?",
    options: ["FE Na > 2%", "Urine Osmolality < 350", "BUN / Cr Ratio > 20:1", "พบเม็ดเลือดขาวจำนวนมากในปัสสาวะ", "นิ่วในทางเดินปัสสาวะ"],
    answer: 2,
    explanation: "Pre-renal AKI (สาจากสภาวะก่อนไต เช่น ขาดน้ำ) มักมีค่า BUN สูงขึ้นเร็วกว่า Cr ทำให้สัดส่วน BUN:Cr มักจะมากกว่า 20:1",
    category: "Renal",
    situation: "AKI Differential Diagnosis"
  },
  {
    id: 57,
    question: "ยาในข้อใดเป็น 'Loop Diuretic' ที่ใช้รักษาภาวะบวมน้ำ (Edema) จากโรคหัวใจล้มเหลว?",
    options: ["Hydrochlorothiazide", "Spironolactone", "Furosemide", "Amiloride", "Indapamide"],
    answer: 2,
    explanation: "Furosemide เป็น Loop Diuretic ที่มีฤทธิ์ขับปัสสาวะแรงที่สุด เหมาะสำหรับลดภาวะบวมน้ำอย่างรวดเร็ว",
    category: "Cardiovascular",
    situation: "Edema Management"
  },
  {
    id: 58,
    question: "ข้อใดคือกลไกการออกฤทธิ์ของยา Levonorgestrel ในฐานะ 'ยาคุมกำเนิดฉุกเฉิน' (Emergency Contraceptive)?",
    options: ["ทำลายตัวอสุจิ", "ยับยั้งหรือเลื่อนการตกไข่ (Delay ovulation)", "ทำให้แท้งบุตร", "ฆ่าเชื้อในมดลูก", "กระตุ้นการสร้างเยื่อบุโพรงมดลูก"],
    answer: 1,
    explanation: "กลไกหลักของยาคุมฉุกเฉินคือการยับยั้งหรือเลื่อนการตกไข่ ไม่ใช่การทำแท้งและไม่ได้ผลหากมีการฝังตัวของตัวอ่อนไปแล้ว",
    category: "OB-GYN",
    situation: "Emergency Contraception"
  },
  {
    id: 59,
    question: "ในการคัดกรองเบื้องต้น (5.6.1) หากผู้ป่วยมาด้วย 'ปวดศีรษะรุนแรงแบบที่ไม่เคยเป็นมาก่อน แขนขาอ่อนแรงครึ่งซีก ปากเบี้ยว' ข้อใดคือการจัดการที่ถูกต้องที่สุด?",
    options: ["ให้ทานยา Paracetamol และรอดูอาการ", "นวดศีรษะด้วยน้ำมันสมุนไพร", "รีบนำส่งโรงพยาบาลทันที (Fast Track Stroke)", "ให้นอนพักผ่อนจนกว่าจะหายเหนื่อย", "จ่ายยาคลายความกังวล"],
    answer: 2,
    explanation: "อาการเหล่านี้เป็นสัญญาณเตือนของ Stroke (โรคหลอดเลือดสมอง) ต้องรีบนำส่งโรงพยาบาล (Time is Brain) เพื่อรับการรักษาอย่างเร่งด่วน",
    category: "Screening/Neurology",
    situation: "Stroke Recognition"
  },
  {
    id: 60,
    question: "ข้อใดคือพระราชบัญญัติที่ควบคุมการขายยาในร้านยาประเภท 'ยาอันตราย' และ 'ยาควบคุมพิเศษ' ในประเทศไทย?",
    options: ["พ.ร.บ. คุ้มครองผู้บริโภค", "พ.ร.บ. ยา พ.ศ. 2510", "พ.ร.บ. อาหาร", "พ.ร.บ. เครื่องสำอาง", "พ.ร.บ. การแพทย์"],
    answer: 1,
    explanation: "พ.ร.บ. ยา พ.ศ. 2510 (และฉบับแก้ไข) เป็นกฎหมายหลักที่ควบคุมการผลิต นำเข้า และขายยาในประเทศไทย",
    category: "Pharmacy Law",
    situation: "Drug Regulations"
  }
];
