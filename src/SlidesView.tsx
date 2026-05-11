import React from 'react';
import { ArrowLeft, MonitorPlay } from 'lucide-react';
import { slideDecks } from './SlideData';

type ViewState = any;

export function SlidesViewAppWrapper({ certId, slideId, onNavigate }: { certId: string; slideId: string; onNavigate: (view: ViewState) => void }) {
  const currentDeck = slideDecks.find(d => d.id === slideId);

  if (!currentDeck) {
    return (
      <div className="flex-1 bg-[#111114] rounded-3xl border border-white/5 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-white mb-4">Slides not found</h2>
        <button 
          onClick={() => onNavigate({ type: 'resources', certId })}
          className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg text-white font-semibold transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

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
            <currentDeck.icon className="w-6 h-6 text-amber-500" />
            {currentDeck.title} (Original PDF)
          </h2>
        </div>
      </div>

      <div className="flex-1 bg-white/5 relative p-4 flex flex-col items-center justify-center">
        <div className="bg-[#16161A] border border-white/10 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <currentDeck.icon className="w-16 h-16 text-amber-500 mx-auto mb-6 opacity-80" />
          <h3 className="text-xl font-bold text-white mb-2">{currentDeck.title}</h3>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            The browser's built-in PDF viewer may be blocked inside the editor's preview panel due to security sandboxing.
          </p>
          <a 
            href={`/${currentDeck.file}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-amber-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            Open '{currentDeck.file}' in New Tab
          </a>
        </div>
      </div>
    </div>
  );
}
