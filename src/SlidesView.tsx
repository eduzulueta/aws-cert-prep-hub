import React from 'react';
import { ArrowLeft, MonitorPlay } from 'lucide-react';

type ViewState = any;

export function SlidesViewAppWrapper({ certId, onNavigate }: { certId: string; onNavigate: (view: ViewState) => void }) {
  return (
    <div className="flex-1 bg-[#111114] rounded-3xl border border-white/5 flex flex-col overflow-hidden">
      <div className="shrink-0 p-6 md:p-8 flex items-center justify-between border-b border-white/5 bg-[#16161A]">
        <div>
          <button 
            onClick={() => onNavigate({ type: 'resources', certId })}
            className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest hover:text-amber-400 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Resources
          </button>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <MonitorPlay className="w-6 h-6 text-amber-500" />
            Storage Section (Original PDF)
          </h2>
        </div>
      </div>

      <div className="flex-1 bg-white/5 relative p-4 flex flex-col items-center justify-center">
        <div className="bg-[#16161A] border border-white/10 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <MonitorPlay className="w-16 h-16 text-amber-500 mx-auto mb-6 opacity-80" />
          <h3 className="text-xl font-bold text-white mb-2">Original Course Slides</h3>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            The browser's built-in PDF viewer may be blocked inside the editor's preview panel due to security sandboxing.
          </p>
          <a 
            href="/storage.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-amber-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            Open PDF in New Tab
          </a>
        </div>
      </div>
    </div>
  );
}
