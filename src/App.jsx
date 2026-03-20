import React, { useState, useEffect } from 'react';
import { quizData } from './data/quizData';
import {
  CheckCircle2, XCircle, RotateCcw, BookOpen, Stethoscope, Brain,
  Zap, ArrowRight, GraduationCap, ShieldCheck, FlaskConical, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { geminiService } from './services/geminiService';

// ─── Overlay ─────────────────────────────────────────────────────────────────

const GeneratingOverlay = ({ mode }) => (
  <motion.div
    className="generating-overlay"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
  >
    <div className="brain-glow">
      <Brain size={64} className="text-teal-400 relative z-10" />
    </div>
    <div className="text-2xl font-black mb-2 tracking-tight">
      {mode === 'case' ? 'Building Clinical Case...' : 'AI Generating Questions...'}
    </div>
    <div className="text-sm opacity-60 max-w-xs text-center px-4">
      {mode === 'case'
        ? 'Constructing a complex multi-question clinical scenario from the PLEPC1 Blueprint'
        : 'Selecting and tailoring high-difficulty clinical questions based on the 85:15 Blueprint'
      }
    </div>
    <div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
      <motion.div
        className="h-full bg-teal-400"
        initial={{ width: 0 }} animate={{ width: "100%" }}
        transition={{ duration: 4, ease: "linear" }}
      />
    </div>
  </motion.div>
);

// ─── Typewriter ───────────────────────────────────────────────────────────────

const Typewriter = ({ text, delay = 12 }) => {
  const [curr, setCurr] = useState('');
  const [idx, setIdx] = useState(0);
  useEffect(() => { setCurr(''); setIdx(0); }, [text]);
  useEffect(() => {
    if (idx < (text?.length ?? 0)) {
      const t = setTimeout(() => {
        setCurr(p => p + text[idx]);
        setIdx(p => p + 1);
      }, delay);
      return () => clearTimeout(t);
    }
  }, [idx, delay, text]);
  return <span>{curr}</span>;
};

// ─── Case Banner ──────────────────────────────────────────────────────────────

const CaseBanner = ({ title, caseText, questionIndex, caseIndex, totalCases }) => (
  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl mb-4">
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center">
          <FlaskConical size={14} className="text-white" />
        </div>
        <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
          Clinical Case {totalCases > 1 ? `${caseIndex + 1}/${totalCases}` : ''}
        </span>
        <span className="ml-auto text-xs font-bold text-amber-500">ข้อที่ {questionIndex + 1} / 4 ในเคสนี้</span>
      </div>
      <h3 className="text-sm font-black text-amber-900 mb-2">{title}</h3>
      <p className="text-xs text-amber-800 leading-relaxed">{caseText}</p>
    </div>
  </motion.div>
);

// ─── Main App ─────────────────────────────────────────────────────────────────

const App = () => {
  const [step, setStep] = useState('welcome');
  const [quizMode, setQuizMode] = useState('mixed');
  const [numQuestions, setNumQuestions] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [caseData, setCaseData] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [realRationale, setRealRationale] = useState(null);

  // ── Start quiz ──────────────────────────────────────────────────────────────

  const startQuiz = async () => {
    setIsGenerating(true);
    setRealRationale(null);
    setCurrentIdx(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setCaseData(null);

    try {
      if (quizMode === 'case') {
        // How many cases? Derive from numQuestions (each case = 4 Qs)
        const numCases = Math.max(1, Math.round(numQuestions / 4));
        const caseQs = await geminiService.generateMultipleCases(numCases);
        setQuestions(caseQs);

      } else if (quizMode === 'mcq') {
        const aiQs = await geminiService.generateQuestions(numQuestions);
        setQuestions(aiQs);

      } else {
        // Mixed: random 1-3 cases + remaining MCQs
        const numCases = Math.min(3, Math.max(1, Math.floor(Math.random() * 3) + 1));
        const caseQCount = numCases * 4;
        const mcqCount = Math.max(1, numQuestions - caseQCount);
        const [caseQs, aiMcqs] = await Promise.all([
          geminiService.generateMultipleCases(numCases),
          geminiService.generateQuestions(mcqCount),
        ]);
        const mcqQs = aiMcqs.map((q, i) => ({ ...q, id: 200 + i, type: 'mcq' }));
        setQuestions([...caseQs, ...mcqQs]);
      }

      setStep('quiz');
    } catch (err) {
      console.log('Falling back to local data:', err.message);
      setTimeout(() => {
        const shuffled = [...quizData].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, numQuestions).map(q => ({ ...q, type: 'mcq' })));
        setStep('quiz');
        setIsGenerating(false);
      }, 2500);
      return;
    }
    setIsGenerating(false);
  };

  // ── Answer handling ──────────────────────────────────────────────────────────

  const currentQ = questions[currentIdx];

  const handleSelect = async (i) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === currentQ.answer) setScore(s => s + 1);
    try {
      const r = await geminiService.generateRationale(currentQ.question, currentQ.options, currentQ.answer);
      if (r) setRealRationale(r);
    } catch { /* use static fallback */ }
  };

  const handleNext = () => {
    setRealRationale(null);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setStep('results');
    }
  };

  const jumpToQuestion = (num) => {
    const idx = num - 1;
    if (idx >= 0 && idx < questions.length) {
      setCurrentIdx(idx);
      setSelected(null);
      setAnswered(false);
      setRealRationale(null);
    }
  };

  const restart = () => {
    setStep('welcome');
    setCurrentIdx(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setQuestions([]);
    setCaseData(null);
    setRealRationale(null);
  };

  const isCase = currentQ?.type === 'case';
  const caseTitle = isCase ? currentQ?._caseTitle : null;
  const caseText = isCase ? currentQ?._caseText : null;
  const caseIndex = currentQ?._caseIndex ?? 0; // which case number (0-based)
  // Index of this question within its own case (0-3)
  const caseQIndex = isCase
    ? questions.slice(0, currentIdx).filter(q => q.type === 'case' && q._caseIndex === caseIndex).length
    : 0;
  // Total number of distinct cases in this quiz  
  const totalCases = new Set(questions.filter(q => q.type === 'case').map(q => q._caseIndex)).size;

  const modes = [
    { id: 'mcq', icon: <Brain size={22} className="text-teal-600" />, label: 'AI MCQ', sublabel: 'ข้อสอบยาก AI เจน' },
    { id: 'case', icon: <FlaskConical size={22} className="text-amber-500" />, label: 'Clinical Case', sublabel: 'หลายเคส 4 ข้อ/เคส' },
    { id: 'mixed', icon: <Layers size={22} className="text-violet-500" />, label: 'Mixed Mode', sublabel: 'เคสสุ่ม + MCQ' },
  ];

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="premium-container">
      <AnimatePresence>
        {isGenerating && <GeneratingOverlay key="loader" mode={quizMode} />}
      </AnimatePresence>

      <div className="header-pill">
        <div className="bg-teal-600 p-2 rounded-xl text-white shadow-lg">
          <Stethoscope size={20} />
        </div>
        <div>
          <h1 className="text-sm font-black text-slate-800 leading-tight">Pharmacy Mentor</h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PLEPC1 Specialist</p>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">

          {/* ── Welcome ── */}
          {step === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
              className="glass-card w-full max-w-2xl"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <BookOpen size={32} />
                </div>
                <h2 className="text-4xl font-black mb-3 text-slate-800 tracking-tight">Prepare for PLEPC1</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  ระบบสร้างข้อสอบ AI แบบ Real-time ตามเกณฑ์มาตรฐาน 85:15<br/>
                  รองรับข้อสอบแบบ Case-Based Reasoning ระดับ Board Exam
                </p>
              </div>

              {/* Mode Selector */}
              <div className="mb-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">เลือกรูปแบบข้อสอบ</p>
                <div className="grid grid-cols-3 gap-3">
                  {modes.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setQuizMode(m.id)}
                      className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 text-center transition-all ${
                        quizMode === m.id ? 'border-teal-400 bg-teal-50/60 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      {m.icon}
                      <div>
                        <div className="font-black text-sm text-slate-800">{m.label}</div>
                        <div className="text-[10px] text-slate-400 font-bold">{m.sublabel}</div>
                      </div>
                    </button>
                  ))}
                </div>
                {quizMode === 'case' && (
                  <div className="mt-3 p-3 bg-amber-50 rounded-xl text-xs text-amber-700 border border-amber-100 text-center">
                    ⚠️ โหมดนี้จะเจน 1 เคสคลินิก + 4 คำถามต่อเนื่อง ใช้เวลา AI ประมาณ 5-10 วินาที
                  </div>
                )}
              </div>

              {/* Custom question count input */}
              {quizMode !== 'case' && (
                <div className="mb-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                    กรอกจำนวนข้อที่ต้องการให้ AI สร้าง
                  </p>
                  <div className="relative">
                    <input
                      type="number"
                      min={1}
                      value={numQuestions}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10);
                        if (!isNaN(v) && v >= 1) setNumQuestions(v);
                      }}
                      className="w-full text-center text-4xl font-black text-teal-700 bg-teal-50 border-2 border-teal-200 rounded-2xl px-4 py-5 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-black text-teal-400 uppercase tracking-widest pointer-events-none">ข้อ</span>
                  </div>
                  {quizMode === 'mixed' && (
                    <p className="text-xs text-slate-400 mt-2 text-center">
                      รวม 4 ข้อ Case-Based + {Math.max(1, numQuestions - 4)} ข้อ AI MCQ
                    </p>
                  )}
                </div>
              )}

              <button onClick={startQuiz} className="btn-premium w-full group">
                {quizMode === 'case' ? 'สร้าง Clinical Case' : 'เริ่มทำข้อสอบ'} <Zap size={20} className="group-hover:fill-current" />
              </button>
            </motion.div>
          )}

          {/* ── Quiz ── */}
          {step === 'quiz' && currentQ && (
            <motion.div
              key={`quiz-${currentIdx}`}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-3xl"
            >
              {/* Header row: info + jump navigator */}
              <div className="flex justify-between items-center mb-3 px-1">
                <div>
                  <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">
                    Question {currentIdx + 1} / {questions.length}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`w-2 h-2 rounded-full animate-pulse ${isCase ? 'bg-amber-400' : 'bg-teal-500'}`} />
                    <span className="text-xs font-bold text-slate-500">{currentQ.category}</span>
                    {isCase && (
                      <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Case Q {caseQIndex + 1}/4
                      </span>
                    )}
                  </div>
                </div>

                {/* Jump to question */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const val = parseInt(e.target.jumpQ.value, 10);
                    jumpToQuestion(val);
                    e.target.jumpQ.value = '';
                  }}
                  className="flex items-center gap-1"
                >
                  <span className="text-[10px] text-slate-400 font-bold">ไปข้อ</span>
                  <input
                    name="jumpQ"
                    type="number"
                    min={1}
                    max={questions.length}
                    placeholder={currentIdx + 1}
                    className="w-14 text-center text-sm font-black text-slate-700 bg-white border-2 border-slate-200 rounded-xl px-2 py-1.5 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                  <button type="submit" className="text-[10px] font-black text-white bg-teal-500 hover:bg-teal-600 px-2.5 py-1.5 rounded-xl transition-colors">
                    ไป
                  </button>
                </form>
              </div>

              <div className="premium-progress mb-4">
                <div className="premium-progress-fill" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
              </div>

              {/* Case banner */}
              {isCase && caseTitle && caseText && (
                <CaseBanner title={caseTitle} caseText={caseText} questionIndex={caseQIndex} caseIndex={caseIndex} totalCases={totalCases} />
              )}

              {/* Question Card */}
              <div className={`glass-card ${isCase ? 'border-l-4 border-amber-300' : ''}`}>
                <h3 className="text-xl font-bold mb-8 text-slate-800 leading-snug">
                  {currentQ.question}
                </h3>

                <div className="option-grid">
                  {currentQ.options.map((opt, i) => {
                    let cls = "option-pill";
                    if (answered) {
                      if (i === currentQ.answer) cls += " correct shadow-sm";
                      else if (i === selected) cls += " incorrect shadow-sm";
                    }
                    return (
                      <button key={i} onClick={() => handleSelect(i)} disabled={answered} className={cls}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-sm ${answered ? 'hidden' : 'bg-slate-50 text-slate-400'}`}>
                          {String.fromCharCode(65 + i)}
                        </div>
                        <span className="text-[14px] font-medium leading-tight">{opt}</span>
                        {answered && i === currentQ.answer && <CheckCircle2 size={20} className="text-emerald-500 ml-auto" />}
                        {answered && i === selected && i !== currentQ.answer && <XCircle size={20} className="text-rose-500 ml-auto" />}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {answered && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="ai-box">
                      <div className="ai-badge mb-3">
                        <Brain size={14} />
                        <span>{realRationale ? 'Gemini AI Rationale' : 'AI Rationale'}</span>
                        {realRationale && (
                          <span className="ml-auto text-[10px] text-teal-600 font-black bg-teal-50 px-2 py-0.5 rounded-full">LIVE AI</span>
                        )}
                      </div>
                      <p className="text-slate-700 leading-relaxed text-[14px]">
                        <Typewriter text={realRationale || currentQ.explanation} key={realRationale || currentQ.explanation} />
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {answered && (
                <button onClick={handleNext} className="btn-premium ml-auto mt-6 px-10">
                  {currentIdx < questions.length - 1 ? 'Next Challenge' : 'Finish Quiz'}
                  <ArrowRight size={20} />
                </button>
              )}
            </motion.div>
          )}

          {/* ── Results ── */}
          {step === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="glass-card w-full max-w-2xl text-center"
            >
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <GraduationCap size={44} />
              </div>
              <h2 className="text-3xl font-black mb-2 text-slate-800">Exam Results</h2>
              <p className="text-slate-500 mb-8">วิเคราะห์ความพร้อมสู่เภสัชกรวิชาชีพ</p>

              <div className="stats-grid mb-8">
                <div className="stat-card">
                  <div className="stat-value">{score}</div>
                  <div className="stat-label">Total Score</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{Math.round((score / questions.length) * 100)}%</div>
                  <div className="stat-label">Accuracy</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{questions.length}</div>
                  <div className="stat-label">Questions</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-left">
                  <div className="text-xs font-black text-amber-600 mb-1">Case-Based</div>
                  <div className="text-xl font-black text-amber-800">{questions.filter(q => q.type === 'case').length} ข้อ</div>
                </div>
                <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 text-left">
                  <div className="text-xs font-black text-teal-600 mb-1">AI MCQ</div>
                  <div className="text-xl font-black text-teal-800">{questions.filter(q => q.type === 'mcq').length} ข้อ</div>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl mb-8 text-left border">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={16} className="text-teal-600" />
                  <span className="font-bold text-slate-700 text-sm">Clinical Summary</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {score / questions.length >= 0.8
                    ? `ยอดเยี่ยมครับ! คะแนน ${score}/${questions.length} บ่งชี้ว่าคุณพร้อมสูงในระดับ Board Exam`
                    : score / questions.length >= 0.6
                    ? `ความพร้อม ${Math.round((score / questions.length) * 100)}% แนะนำทบทวนส่วนที่งดเว้น`
                    : `ยังต้องพัฒนาอีกครับ ทบทวน Blueprint 85:15 ให้ละเอียด`
                  }
                </p>
              </div>

              <button onClick={restart} className="btn-premium w-full">
                <RotateCcw size={18} /> ลองใหม่อีกครั้ง
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
