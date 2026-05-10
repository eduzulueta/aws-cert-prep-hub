import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { certifications, Certification, Exam } from './data';
import { courseSlides } from './slides';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  ChevronRight, 
  ArrowLeft, 
  PlayCircle, 
  CheckCircle, 
  Circle, 
  ArrowRight,
  RefreshCcw,
  XCircle,
  Brain,
  ExternalLink,
  FileText,
  Radio,
  Rss,
  MessageSquare,
  HardDrive, Database, ArrowRightLeft, Cpu, Box, LineChart, Layers, Shield, Globe, Sliders, Terminal, MoreHorizontal, MonitorPlay, Trash2
} from 'lucide-react';
import { SlidesViewAppWrapper } from './SlidesView';

type ViewState = 
  | { type: 'home' }
  | { type: 'dashboard'; certId: string }
  | { type: 'prep'; certId: string }
  | { type: 'quiz'; certId: string; examId: string; resumeAttemptId?: string }
  | { type: 'progress'; certId: string }
  | { type: 'solutions'; certId: string }
  | { type: 'resources'; certId: string }
  | { type: 'slides'; certId: string };

export default function App() {
  const [viewState, setViewState] = useState<ViewState>({ type: 'home' });

  const renderView = () => {
    switch (viewState.type) {
      case 'home':
        return <HomeView onNavigate={(certId) => setViewState({ type: 'dashboard', certId })} />;
      case 'dashboard':
        return <DashboardView certId={viewState.certId} onNavigate={setViewState} />;
      case 'prep':
        return <PrepView certId={viewState.certId} onNavigate={setViewState} />;
      case 'quiz':
        return <QuizView certId={viewState.certId} examId={viewState.examId} resumeAttemptId={viewState.resumeAttemptId} onNavigate={setViewState} />;
      case 'solutions':
        return <SolutionsView certId={viewState.certId} onNavigate={setViewState} />;
      case 'resources':
        return <ResourcesView certId={viewState.certId} onNavigate={setViewState} />;
      case 'slides':
        return <SlidesViewAppWrapper certId={viewState.certId} onNavigate={setViewState} />;
      case 'progress':
        return <ProgressView certId={viewState.certId} onNavigate={setViewState} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-slate-200 font-sans flex flex-col">
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#0C0C0E] sticky top-0 z-10">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setViewState({ type: 'home' })}
        >
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">AWS Cert Prep Hub</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">AWS Learning Portal</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <nav className="flex gap-8 text-sm font-medium text-slate-400">
            <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setViewState({ type: 'home' })}>Certifications</span>
            <span className="cursor-pointer hover:text-white transition-colors" onClick={() => viewState.type !== 'home' ? setViewState({ type: 'progress', certId: (viewState as any).certId || 'aws-dea-c01' }) : null}>Progress</span>
            <span className="cursor-pointer hover:text-white transition-colors">Resources</span>
          </nav>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10"></div>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-6xl mx-auto p-4 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewState.type}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full flex-1 flex flex-col"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component: HomeView
// -----------------------------------------------------------------------------
function HomeView({ onNavigate }: { onNavigate: (certId: string) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-bold">Available Tracks</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            onClick={() => onNavigate(cert.id)}
            className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/60 group cursor-pointer transition-all flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black uppercase">Associate</span>
              <span className="text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5" />
              </span>
            </div>
            <h3 className="text-white font-bold mb-1 group-hover:text-amber-400 transition-colors">
              {cert.title}
            </h3>
            <p className="text-xs text-amber-500/80 font-mono mb-4">{cert.code}</p>
            <p className="mt-auto text-sm text-slate-400 line-clamp-2">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component: DashboardView
// -----------------------------------------------------------------------------
function DashboardView({ certId, onNavigate }: { certId: string; onNavigate: (view: ViewState) => void }) {
  const cert = certifications.find(c => c.id === certId);
  if (!cert) return <div>Certification not found.</div>;

  return (
    <div className="h-full bg-[#111114] rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col">
      <div className="mb-10">
        <button 
          onClick={() => onNavigate({ type: 'home' })}
          className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest hover:text-amber-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Tracks
        </button>
        <p className="text-amber-500 text-sm font-bold mb-2 tracking-wide uppercase">Currently Viewing</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">{cert.title}</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> {cert.code}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> {cert.exams.length} Practice Exams
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        <div 
          onClick={() => onNavigate({ type: 'resources', certId })}
          className="group relative flex flex-col p-8 rounded-2xl bg-[#16161A] border border-white/5 hover:border-amber-500/40 transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <BookOpen className="w-32 h-32 text-white" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6 text-amber-500" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Resources & Guidance</h4>
          <p className="text-sm text-slate-400 mb-6">Official guides, well-architected framework, and the latest AWS announcements to prepare.</p>
          <button className="mt-auto flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest">
            View Resources <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div 
          onClick={() => onNavigate({ type: 'prep', certId })}
          className="group relative flex flex-col p-8 rounded-2xl bg-[#16161A] border border-white/5 hover:border-amber-500/40 transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <GraduationCap className="w-32 h-32 text-white" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
            <GraduationCap className="w-6 h-6 text-amber-500" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Exam Preparation</h4>
          <p className="text-sm text-slate-400 mb-6">Test your knowledge with practice exams and detailed question explanations.</p>
          <button className="mt-auto flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest">
            Start Training <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div 
          onClick={() => onNavigate({ type: 'solutions', certId })}
          className="group relative flex flex-col p-8 rounded-2xl bg-[#16161A] border border-white/5 hover:border-amber-500/40 transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <CheckCircle className="w-32 h-32 text-white" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
            <CheckCircle className="w-6 h-6 text-amber-500" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Cheat Sheet</h4>
          <p className="text-sm text-slate-400 mb-6">Quick lookup of all questions, right answers, and decision hacks.</p>
          <button className="mt-auto flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest">
            View Solutions <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component: ResourcesView
// -----------------------------------------------------------------------------
function ResourcesView({ certId, onNavigate }: { certId: string; onNavigate: (view: ViewState) => void }) {
  const cert = certifications.find(c => c.id === certId);
  if (!cert) return null;

  return (
    <div className="h-full bg-[#111114] rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col overflow-y-auto">
      <div className="shrink-0 mb-8">
        <button 
          onClick={() => onNavigate({ type: 'dashboard', certId })}
          className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest hover:text-amber-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2">Resources & Guidance</h2>
        <p className="text-sm text-slate-400">Essential links and latest updates for {cert.code}.</p>
        <div className="h-1 w-20 bg-amber-500 rounded font-mono mt-4"></div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <MonitorPlay className="w-5 h-5 text-amber-500" />
            Course Slides
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              onClick={() => onNavigate({ type: 'slides', certId })}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#16161A] border border-white/5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center mb-4 transition-colors">
                <Database className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors tracking-wide">Storage Section</h4>
              <p className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest mt-2 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">View Full Slides</p>
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        
        {/* Core Documents */}
        <div className="space-y-6">
          <div className="bg-[#16161A] p-6 rounded-2xl border border-white/5 flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              Core Study Materials
            </h3>
            
            <div className="space-y-4 flex-1">
              <a 
                href={cert.guideUrl || "https://aws.amazon.com/certification/"} 
                target="_blank" rel="noreferrer" 
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/5 group"
              >
                <div className="p-2 bg-amber-500/10 rounded-lg shrink-0">
                  <FileText className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold mb-1 flex items-center gap-2">
                    Official Exam Guide
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-500 transition-colors" />
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">The authoritative guide on exam domains, weighting, and syllabus.</p>
                </div>
              </a>

              <a 
                href="https://aws.amazon.com/architecture/well-architected/" 
                target="_blank" rel="noreferrer" 
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/5 group"
              >
                <div className="p-2 bg-amber-500/10 rounded-lg shrink-0">
                  <Radio className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold mb-1 flex items-center gap-2">
                    AWS Well-Architected Framework
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-500 transition-colors" />
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Learn the architectural best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud.</p>
                </div>
              </a>

              <a 
                href="https://docs.aws.amazon.com/" 
                target="_blank" rel="noreferrer" 
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/5 group"
              >
                <div className="p-2 bg-amber-500/10 rounded-lg shrink-0">
                  <BookOpen className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold mb-1 flex items-center gap-2">
                    AWS Documentation
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-500 transition-colors" />
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Explore comprehensive documentation and find specific answers about AWS services.</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Latest Updates */}
        <div className="space-y-6">
          <div className="bg-[#16161A] p-6 rounded-2xl border border-white/5 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Rss className="w-5 h-5 text-blue-400" />
                Latest Announcements
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { date: "APR 28", title: "AWS Glue 5.1 is now available in all AWS Commercial and AWS GovCloud (US) Regions", link: "https://aws.amazon.com/about-aws/whats-new/2024/04/aws-glue-5-1-aws-commercial-govcloud-us-regions/" },
                { date: "APR 28", title: "AWS Cost Optimization Hub now supports CSV download", link: "https://aws.amazon.com/about-aws/whats-new/" },
                { date: "APR 28", title: "Amazon WorkSpaces Personal enhances PCoIP to DCV protocol migration", link: "https://aws.amazon.com/about-aws/whats-new/" },
                { date: "APR 28", title: "Amazon EC2 C8gn instances are now available in additional regions", link: "https://aws.amazon.com/about-aws/whats-new/" }
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors group">
                  <div className="text-center shrink-0 w-12">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">{item.date.split(' ')[0]}</div>
                    <div className="text-lg font-bold text-slate-200">{item.date.split(' ')[1]}</div>
                  </div>
                  <h4 className="text-sm font-bold text-blue-400 group-hover:text-blue-300 leading-snug">
                    {item.title} <ExternalLink className="w-3 h-3 inline ml-1 opacity-50" />
                  </h4>
                </a>
              ))}
            </div>
            <a href="https://aws.amazon.com/new/" target="_blank" rel="noreferrer" className="block text-center mt-6 text-sm font-bold text-blue-400 hover:text-blue-300 border-t border-white/10 pt-4">
              View all announcements <ExternalLink className="w-3 h-3 inline mb-0.5" />
            </a>
          </div>

          <div className="bg-[#16161A] p-6 rounded-2xl border border-white/5 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                Recent AWS Blog posts
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { date: "APR 29", title: "Scaling biomedical research on AWS: A cloud-native approach to scientific data management", link: "https://aws.amazon.com/blogs/" },
                { date: "APR 28", title: "What the March Threat Technique Catalog update means for your AWS environment", link: "https://aws.amazon.com/blogs/" },
                { date: "APR 28", title: "Access control with IAM Identity Center session tags", link: "https://aws.amazon.com/blogs/" }
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors group">
                   <div className="text-center shrink-0 w-12">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">{item.date.split(' ')[0]}</div>
                    <div className="text-lg font-bold text-slate-200">{item.date.split(' ')[1]}</div>
                  </div>
                  <h4 className="text-sm font-bold text-emerald-400 group-hover:text-emerald-300 leading-snug">
                    {item.title} <ExternalLink className="w-3 h-3 inline ml-1 opacity-50" />
                  </h4>
                </a>
              ))}
            </div>
            <a href="https://aws.amazon.com/blogs/" target="_blank" rel="noreferrer" className="block text-center mt-6 text-sm font-bold text-emerald-400 hover:text-emerald-300 border-t border-white/10 pt-4">
              View all blog posts <ExternalLink className="w-3 h-3 inline mb-0.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Removed wrapper since imported directly
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Component: PrepView
// -----------------------------------------------------------------------------
function PrepView({ certId, onNavigate }: { certId: string; onNavigate: (view: ViewState) => void }) {
  const cert = certifications.find(c => c.id === certId);
  if (!cert) return null;

  return (
    <div className="h-full bg-[#111114] rounded-3xl border border-white/5 p-6 md:p-10 max-w-4xl mx-auto space-y-6 overflow-y-auto">
      <button 
        onClick={() => onNavigate({ type: 'dashboard', certId })}
        className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest hover:text-amber-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Dashboard
      </button>

      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Practice Exams</h2>
        <div className="h-1 w-20 bg-amber-500 rounded font-mono mt-4 mb-4"></div>
        <p className="text-slate-400">Select an exam to test your knowledge.</p>
      </div>

      <div className="grid gap-4 mt-6">
        {cert.exams.map((exam) => (
          <div 
            key={exam.id}
            className="bg-[#16161A] border justify-between border-white/5 rounded-2xl p-6 hover:border-amber-500/40 flex flex-col sm:flex-row sm:items-center gap-4 transition-all"
          >
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                {exam.title}
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded">
                  {exam.questions.length} questions
                </span>
              </h3>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl">{exam.description}</p>
            </div>
            <button 
              onClick={() => onNavigate({ type: 'quiz', certId, examId: exam.id })}
              className="mt-2 sm:mt-0 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors whitespace-nowrap border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              <PlayCircle className="w-5 h-5" />
              Start Quiz
            </button>
          </div>
        ))}
        {cert.exams.length === 0 && (
          <div className="text-center py-12 text-slate-500 bg-[#16161A] border border-white/5 rounded-2xl border-dashed">
            No exams available for this certification yet.
          </div>
        )}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component: SolutionsView
// -----------------------------------------------------------------------------
function SolutionsView({ certId, onNavigate }: { certId: string; onNavigate: (view: ViewState) => void }) {
  const cert = certifications.find(c => c.id === certId);
  if (!cert) return <div>Certification not found.</div>;

  const allQuestions = cert.exams.flatMap(e => e.questions);

  return (
    <div className="h-full flex flex-col bg-[#111114] rounded-3xl border border-white/5 p-6 md:p-10 flex-1 overflow-hidden">
      <div className="shrink-0 mb-8">
        <button 
          onClick={() => onNavigate({ type: 'dashboard', certId })}
          className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest hover:text-amber-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>
        <h2 className="text-3xl font-bold text-white mb-2">Cheat Sheet: {cert.code}</h2>
        <p className="text-sm text-slate-400">Quick lookup for all questions, correct answers, and decision hacks.</p>
        <div className="h-1 w-20 bg-amber-500 rounded font-mono mt-4"></div>
      </div>

      <div className="flex-1 overflow-auto pr-4 custom-scrollbar">
        <div className="hidden lg:grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs font-bold uppercase tracking-widest text-slate-500 sticky top-0 bg-[#111114] z-10 pt-2">
          <div className="col-span-1">#</div>
          <div className="col-span-4">Question</div>
          <div className="col-span-4">Correct Answer</div>
          <div className="col-span-3">Decision Hack</div>
        </div>
        <div className="space-y-4 lg:space-y-0 text-sm">
          {allQuestions.map((q, idx) => {
            const isMultiSelect = q.correctAnswerIndices !== undefined;
            const correctText = isMultiSelect 
              ? q.correctAnswerIndices?.map(i => q.options[i]).join(" | ")
              : q.options[q.correctAnswerIndex!];

            return (
              <div key={idx} className="flex flex-col lg:grid lg:grid-cols-12 gap-4 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors p-4 lg:p-0 rounded-xl lg:rounded-none bg-[#16161A] lg:bg-transparent">
                <div className="col-span-1 font-mono text-amber-500 font-bold mb-2 lg:mb-0">
                  <span className="lg:hidden text-slate-500 uppercase text-xs mr-2 border border-white/10 px-2 py-0.5 rounded">Q{idx + 1}</span>
                  <span className="hidden lg:inline">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="col-span-4 text-slate-200 leading-relaxed mb-4 lg:mb-0 pr-4">
                  <span className="lg:hidden font-bold block mb-1 text-slate-400 uppercase text-[10px] tracking-wider">Question</span>
                  {q.text}
                </div>
                <div className="col-span-4 text-emerald-400 mb-4 lg:mb-0 pr-4">
                  <span className="lg:hidden font-bold block mb-1 text-slate-400 uppercase text-[10px] tracking-wider">Correct Answer</span>
                  {correctText}
                </div>
                <div className="col-span-3 flex flex-col justify-between">
                  <div>
                    <span className="lg:hidden font-bold block mb-1 text-slate-400 uppercase text-[10px] tracking-wider">Decision Hack</span>
                    {(q as any).decisionHack ? (
                      <div className="bg-blue-500/10 text-blue-300 p-3 rounded-lg border border-blue-500/20 text-[11px] shadow-sm">
                        <Brain className="w-3 h-3 inline mr-1 opacity-70" />
                        {(q as any).decisionHack}
                      </div>
                    ) : (
                      <span className="text-slate-600 italic text-xs">No hack available</span>
                    )}
                  </div>
                  {(q as any).docLink && (
                    <a href={(q as any).docLink} target="_blank" rel="noreferrer" className="text-amber-500 hover:text-amber-400 uppercase tracking-widest text-[9px] font-bold mt-3 inline-flex items-center gap-1 transition-colors">
                      AWS Docs <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component: QuizView
// -----------------------------------------------------------------------------
function QuizView({ certId, examId, resumeAttemptId, onNavigate }: { certId: string; examId: string; resumeAttemptId?: string; onNavigate: (view: ViewState) => void }) {
  const cert = certifications.find(c => c.id === certId);
  const exam = cert?.exams.find(e => e.id === examId);
  
  const attemptSavedData = (() => {
    if (resumeAttemptId) {
       try {
         const saved = localStorage.getItem(`attempts-${certId}`);
         const attempts = saved ? JSON.parse(saved) : [];
         return attempts.find((a: any) => a.id === resumeAttemptId) || null;
       } catch (e) {}
    }
    return null;
  })();

  const [currentIndex, setCurrentIndex] = useState(() => attemptSavedData?.savedCurrentIndex || 0);
  const [answers, setAnswers] = useState<Record<number, number[]>>(() => attemptSavedData?.savedAnswers || {});
  const [revealed, setRevealed] = useState<Record<number, boolean>>(() => attemptSavedData?.savedRevealed || {});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [domainScores, setDomainScores] = useState<Record<string, { correct: number; total: number }>>({});

  if (!exam) return null;

  const currentQuestion = exam.questions[currentIndex];
  const progress = ((currentIndex) / exam.questions.length) * 100;
  const isMultiSelect = currentQuestion.correctAnswerIndices !== undefined;

  const selectedOptions = answers[currentIndex] || [];
  const isAnswerRevealed = revealed[currentIndex] || false;

  const handleSelectOption = (idx: number) => {
    if (isAnswerRevealed) return;
    if (isMultiSelect) {
      setAnswers(prev => {
        const current = prev[currentIndex] || [];
        const next = {
          ...prev,
          [currentIndex]: current.includes(idx) ? current.filter(i => i !== idx) : [...current, idx]
        };
        setTimeout(() => saveProgress(next, revealed, currentIndex, false), 0);
        return next;
      });
    } else {
      setAnswers(prev => {
        const next = { ...prev, [currentIndex]: [idx] };
        setTimeout(() => saveProgress(next, revealed, currentIndex, false), 0);
        return next;
      });
    }
  };

  const isCorrectAnswer = () => {
    if (isMultiSelect && currentQuestion.correctAnswerIndices) {
      if (selectedOptions.length !== currentQuestion.correctAnswerIndices.length) return false;
      return currentQuestion.correctAnswerIndices.every(idx => selectedOptions.includes(idx));
    }
    return selectedOptions[0] === currentQuestion.correctAnswerIndex;
  };

  const attemptIdRef = useRef(resumeAttemptId || Date.now().toString());

  const saveProgress = (currentAnswers: Record<number, number[]>, currentRevealed: Record<number, boolean>, cIndex: number, finalFinished = false) => {
    let finalScore = 0;
    const finalDomains: Record<string, { correct: number, total: number }> = {};
    let correctCount = 0;
    let incorrectCount = 0;
    let answeredCount = 0;

    exam.questions.forEach((q, idx) => {
      const sel = currentAnswers[idx] || [];
      if (sel.length > 0) {
        answeredCount++; // Always count as answered if there is a selection
        
        // We only score it if it's explicitly revealed during the quiz, OR if the quiz is finished
        if (currentRevealed[idx] || finalFinished) {
          const multi = q.correctAnswerIndices !== undefined;
          let correct = false;
          if (multi && q.correctAnswerIndices) {
            correct = sel.length === q.correctAnswerIndices.length && q.correctAnswerIndices.every(i => sel.includes(i));
          } else {
            correct = sel[0] === q.correctAnswerIndex;
          }
          if (correct) {
            finalScore++;
            correctCount++;
          } else {
            incorrectCount++;
          }

          const ds = finalDomains[q.domain] || { correct: 0, total: 0 };
          finalDomains[q.domain] = {
            correct: ds.correct + (correct ? 1 : 0),
            total: ds.total + 1
          };
        }
      }
    });

    try {
      const saved = localStorage.getItem(`attempts-${certId}`);
      const attempts = saved ? JSON.parse(saved) : [];
      const attemptIdx = attempts.findIndex((a: any) => a.id === attemptIdRef.current);
      
      const newAttempt = {
        id: attemptIdRef.current,
        examId,
        date: new Date().toISOString(),
        score: finalScore,
        totalQuestions: exam.questions.length,
        domainScores: finalDomains,
        correctCount,
        incorrectCount,
        answeredCount,
        isFinished: finalFinished,
        savedAnswers: currentAnswers,
        savedRevealed: currentRevealed,
        savedCurrentIndex: cIndex
      };

      if (attemptIdx >= 0) {
        attempts[attemptIdx] = newAttempt;
      } else {
        attempts.push(newAttempt);
      }
      localStorage.setItem(`attempts-${certId}`, JSON.stringify(attempts));
    } catch (e) {
      console.error("Failed to save attempt", e);
    }

    return { finalScore, finalDomains };
  };

  const checkAnswer = (isShowOnly = false) => {
    if (!isShowOnly && selectedOptions.length === 0) return;
    setRevealed(prev => {
      const next = { ...prev, [currentIndex]: true };
      setTimeout(() => saveProgress(answers, next, currentIndex, false), 0);
      return next;
    });
  };

  const finishQuiz = () => {
    const { finalScore, finalDomains } = saveProgress(answers, revealed, currentIndex, true);
    setScore(finalScore);
    setDomainScores(finalDomains);
    setIsFinished(true);
  };

  const nextQuestion = () => {
    if (currentIndex < exam.questions.length - 1) {
      setCurrentIndex(i => {
        const nextIdx = i + 1;
        setTimeout(() => saveProgress(answers, revealed, nextIdx, false), 0);
        return nextIdx;
      });
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => {
        const prevIdx = i - 1;
        setTimeout(() => saveProgress(answers, revealed, prevIdx, false), 0);
        return prevIdx;
      });
    }
  };

  const resetQuiz = () => {
    attemptIdRef.current = Date.now().toString();
    setCurrentIndex(0);
    setAnswers({});
    setRevealed({});
    setScore(0);
    setIsFinished(false);
    setDomainScores({});
    setTimeout(() => saveProgress({}, {}, 0, false), 0);
  };

  if (isFinished) {
    const percentage = Math.round((score / exam.questions.length) * 100);
    const passed = percentage >= 70; // typical passing score
    
    return (
      <div className="max-w-2xl mx-auto py-12">
        <div className="bg-[#111114] rounded-3xl border border-white/5 p-10 text-center">
          <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 ${passed ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30' : 'bg-red-500/10 text-red-500 border border-red-500/30'}`}>
            <Award className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p className="text-lg text-slate-400 mb-6">You scored {score} out of {exam.questions.length}</p>
          
          <div className="text-5xl font-extrabold mb-8" style={{ color: passed ? '#f59e0b' : '#ef4444' }}>
            {percentage}%
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={resetQuiz}
              className="flex items-center justify-center gap-2 bg-[#16161A] hover:bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </button>
            <button 
              onClick={() => onNavigate({ type: 'progress', certId })}
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-black px-6 py-3 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors"
            >
              View Progress
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto h-full flex flex-col pt-4">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => onNavigate({ type: 'prep', certId })}
          className="flex items-center text-xs font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Exit Quiz
        </button>
        <div className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono bg-amber-500/10 px-3 py-1 rounded">
          Question {currentIndex + 1} / {exam.questions.length}
        </div>
      </div>

      <div className="w-full bg-white/5 h-1.5 rounded-full mb-10 overflow-hidden">
        <div 
          className="bg-amber-500 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="bg-[#111114] rounded-3xl border border-white/5 overflow-hidden flex-1">
        <div className="p-8 md:p-10">
          <div className="mb-4">
            <span className="text-[10px] uppercase font-bold px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/10">
              {currentQuestion.domain}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-snug">
            {currentQuestion.text}
          </h3>
          
          {isMultiSelect && (
            <p className="text-sm text-slate-400 mb-6 font-medium italic">
              Select {currentQuestion.correctAnswerIndices?.length} options.
            </p>
          )}

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOptions.includes(idx);
              const isCorrect = isMultiSelect 
                ? currentQuestion.correctAnswerIndices?.includes(idx) 
                : idx === currentQuestion.correctAnswerIndex;
              
              let optionClass = "border-white/5 bg-[#16161A] hover:border-amber-500/40 text-slate-300";
              
              if (isAnswerRevealed) {
                if (isCorrect) {
                  optionClass = "border-amber-500 bg-amber-500/10 text-white font-medium";
                } else if (isSelected) {
                  optionClass = "border-red-500/50 bg-red-500/10 text-red-200 opacity-75";
                } else {
                  optionClass = "border-white/5 opacity-40 bg-[#16161A] text-slate-500";
                }
              } else if (isSelected) {
                optionClass = "border-amber-500 bg-amber-500/10 text-white font-medium";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerRevealed}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${optionClass}`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isAnswerRevealed && isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-amber-500" />
                    ) : isSelected ? (
                      <CheckCircle className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500" />
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-stretch gap-6">
            <div className="flex-1">
              {isAnswerRevealed && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 space-y-4"
                >
                  {selectedOptions.length > 0 && (
                    <div className={`p-4 rounded-xl text-sm border ${
                      isCorrectAnswer() 
                        ? 'bg-amber-500/10 text-white border-amber-500/30' 
                        : 'bg-red-500/10 text-white border-red-500/30'
                    }`}>
                      <strong className="block mb-2 capitalize tracking-wider font-bold text-xs" style={{ color: isCorrectAnswer() ? '#f59e0b' : '#ef4444' }}>
                        {isCorrectAnswer() ? 'Correct!' : 'Incorrect'}
                      </strong>
                      <p className="text-slate-300 leading-relaxed font-mono text-[13px]">{currentQuestion.explanation}</p>
                    </div>
                  )}
                  
                  {(!selectedOptions.length || (currentQuestion as any).whyCorrect) && (
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                      <strong className="text-emerald-400 font-bold flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4" /> Why is this correct?
                      </strong>
                      <p className="text-slate-300 leading-relaxed font-mono text-[13px]">
                        {(currentQuestion as any).whyCorrect || currentQuestion.explanation}
                      </p>
                    </div>
                  )}

                  {(currentQuestion as any).whyIncorrect && (
                    <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
                      <strong className="text-red-400 font-bold flex items-center gap-2 mb-2">
                        <XCircle className="w-4 h-4" /> Why are the other options wrong?
                      </strong>
                      <p className="text-slate-300 leading-relaxed font-mono text-[13px] whitespace-pre-wrap">
                        {(currentQuestion as any).whyIncorrect}
                      </p>
                    </div>
                  )}

                  {(currentQuestion as any).decisionHack && (
                    <div className="mt-8 p-6 rounded-2xl border border-blue-500/30 bg-[#0c1322] relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 opacity-5">
                        <Brain className="w-32 h-32 text-blue-500" />
                      </div>
                      <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                        <Brain className="w-4 h-4" /> Decision Hack Mind Map
                      </h4>
                      <div className="flex flex-col md:flex-row items-center gap-4 relative z-10 w-full">
                         <div className="flex-1 w-full bg-white/5 p-4 rounded-xl text-center text-slate-300 text-sm border border-white/10 shadow-sm flex items-center justify-center">
                           Identify Keywords
                         </div>
                         <div className="hidden md:block h-0.5 w-12 bg-blue-500/50"></div>
                         <div className="md:hidden w-0.5 h-6 bg-blue-500/50"></div>
                         <div className="flex-[2] w-full bg-blue-500/20 p-5 rounded-xl text-center text-blue-200 font-bold text-[15px] border border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] leading-relaxed">
                            {(currentQuestion as any).decisionHack}
                         </div>
                      </div>
                    </div>
                  )}

                  {(currentQuestion as any).docLink && (
                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                      <a href={(currentQuestion as any).docLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-amber-500 hover:text-amber-400 uppercase tracking-widest text-xs font-bold transition-colors bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 rounded-lg border border-amber-500/20">
                        Read more in AWS Docs <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
            
            <div className="shrink-0 pt-4 border-t border-white/5">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
                <button
                  onClick={prevQuestion}
                  disabled={currentIndex === 0}
                  className="w-full sm:w-auto bg-transparent border border-white/10 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 px-6 py-4 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors flex items-center justify-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                </button>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-end">
                  {!isAnswerRevealed ? (
                    <>
                      <button
                        onClick={() => checkAnswer(true)}
                        className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/5 text-slate-300 px-8 py-4 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors"
                      >
                        Show Answer
                      </button>
                      <button
                        onClick={() => checkAnswer(false)}
                        disabled={selectedOptions.length === 0 || (isMultiSelect && selectedOptions.length !== currentQuestion.correctAnswerIndices?.length)}
                        className="w-full sm:w-auto bg-white hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-white disabled:cursor-not-allowed text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors"
                      >
                        Check Answer
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={nextQuestion}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.2)] px-8 py-4 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors"
                    >
                      {currentIndex < exam.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                  {currentIndex < exam.questions.length - 1 && !isAnswerRevealed && (
                    <button
                      onClick={nextQuestion}
                      className="w-full sm:w-auto bg-transparent border border-white/10 hover:bg-white/5 text-slate-400 px-6 py-4 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors flex items-center justify-center"
                    >
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component: ProgressView
// -----------------------------------------------------------------------------
function ProgressView({ certId, onNavigate }: { certId: string; onNavigate: (view: ViewState) => void }) {
  const cert = certifications.find(c => c.id === certId);
  
  const [attempts, setAttempts] = useState(() => {
    try {
      const saved = localStorage.getItem(`attempts-${certId}`);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return [];
  });

  const removeAttempt = (attemptId: string) => {
    const updatedAttempts = attempts.filter((a: any) => a.id !== attemptId);
    localStorage.setItem(`attempts-${certId}`, JSON.stringify(updatedAttempts));
    setAttempts(updatedAttempts);
  };

  if (!cert) return null;

  return (
    <div className="h-full bg-[#111114] rounded-3xl border border-white/5 p-6 md:p-10 max-w-4xl mx-auto space-y-6 overflow-y-auto">
      <button 
        onClick={() => onNavigate({ type: 'dashboard', certId })}
        className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest hover:text-amber-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Dashboard
      </button>

      <div>
        <h2 className="text-3xl font-bold text-white mb-2">My Progress</h2>
        <div className="h-1 w-20 bg-amber-500 rounded font-mono mt-4 mb-4"></div>
        <p className="text-slate-400">Track your exam performance over time.</p>
      </div>

      {attempts.length === 0 ? (
        <div className="p-10 text-center bg-[#16161A] border border-white/5 rounded-2xl">
          <p className="text-slate-400 mb-6">You haven't taken any practice exams yet.</p>
          <button 
            onClick={() => onNavigate({ type: 'prep', certId })}
            className="flex items-center justify-center mx-auto gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold uppercase tracking-wide text-xs transition-colors"
          >
            Start an Exam
          </button>
        </div>
      ) : (
        <div className="space-y-6 mt-8">
          {attempts.slice().reverse().map((attempt: any, i: number) => {
            const isFinished = attempt.isFinished ?? true;
            const correct = attempt.correctCount ?? attempt.score;
            const answered = attempt.answeredCount ?? attempt.totalQuestions;
            const incorrect = attempt.incorrectCount ?? (answered - correct);
            const total = attempt.totalQuestions;
            const percentage = isFinished ? Math.round((correct / total) * 100) : Math.round((correct / (answered || 1)) * 100);
            const passed = percentage >= 70;
            const date = new Date(attempt.date).toLocaleString(undefined, {
              dateStyle: 'medium',
              timeStyle: 'short'
            });

            return (
              <div key={i} className="p-6 md:p-8 rounded-2xl bg-[#16161A] border border-white/5">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6 pb-6 border-b border-white/5">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                      Attempt {attempts.length - i}
                      {isFinished ? (
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${passed ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30' : 'bg-red-500/10 text-red-500 border border-red-500/30'}`}>
                          {passed ? 'Passed' : 'Failed'}
                        </span>
                      ) : (
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
                          Incomplete
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{date}</p>
                  </div>
                  <div className="text-left md:text-right flex items-center justify-between md:justify-end md:flex-row md:items-start gap-4">
                    <div className="flex flex-col items-start md:items-end md:justify-end">
                      <p className={`text-3xl font-extrabold ${isFinished ? (passed ? 'text-amber-500' : 'text-red-500') : 'text-blue-400'}`}>
                        {percentage}% {(!isFinished && answered > 0) && <span className="text-sm font-normal text-slate-500">(Current)</span>}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 flex justify-end">{correct} out of {isFinished ? total : answered} correct</p>
                      {!isFinished && (
                        <button 
                          onClick={() => onNavigate({ type: 'quiz', certId, examId: attempt.examId, resumeAttemptId: attempt.id })}
                          className="mt-3 shrink-0 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-500/20"
                        >
                          Resume
                        </button>
                      )}
                    </div>
                    <button 
                      onClick={() => removeAttempt(attempt.id)}
                      className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors ml-4"
                      title="Remove attempt"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#111114] border border-white/5 p-4 rounded-xl text-center">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Answered</p>
                    <p className="text-xl font-mono text-white">{answered} <span className="text-xs text-slate-500">/ {total}</span></p>
                  </div>
                  <div className="bg-[#111114] border border-emerald-500/10 p-4 rounded-xl text-center">
                    <p className="text-[10px] text-emerald-500/70 uppercase tracking-widest font-bold mb-1">Correct</p>
                    <p className="text-xl font-mono text-emerald-400">{correct}</p>
                  </div>
                  <div className="bg-[#111114] border border-red-500/10 p-4 rounded-xl text-center">
                    <p className="text-[10px] text-red-500/70 uppercase tracking-widest font-bold mb-1">Incorrect</p>
                    <p className="text-xl font-mono text-red-400">{incorrect}</p>
                  </div>
                </div>

                {attempt.domainScores && Object.keys(attempt.domainScores).length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-white mb-4">Domain Performance</h4>
                    <div className="space-y-4">
                      {Object.entries(attempt.domainScores).map(([domain, stats]: [string, any]) => {
                        const score = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                        return (
                          <div key={domain}>
                            <div className="flex justify-between items-end mb-1">
                              <p className="text-xs text-slate-400 truncate max-w-[80%] pr-4">{domain}</p>
                              <p className="text-xs font-mono font-bold text-slate-300">{score}%</p>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                              <div 
                                className="bg-amber-500 h-full rounded-full"
                                style={{ width: `${score}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
