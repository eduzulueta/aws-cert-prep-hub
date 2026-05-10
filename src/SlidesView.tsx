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

      <div className="flex-1 bg-white/5 relative p-4 flex flex-col">
          <div className="flex-1 rounded-xl overflow-hidden bg-black/20 border border-white/10 shadow-2xl relative">
            <iframe 
              src="/storage.pdf" 
              className="w-full h-full border-0 absolute inset-0" 
              title="AWS Storage Section PDF"
            />
          </div>
      </div>
    </div>
  );
}
