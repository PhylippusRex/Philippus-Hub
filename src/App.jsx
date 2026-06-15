import React from 'react';
import myAvatar from './avatar.png';

function App() {
  const links = [
    { 
      name: "GitHub", 
      desc: "Check my repos and builds.",
      url: "https://github.com/PhylippusRex", 
      iconBg: "bg-zinc-950 border border-zinc-900 group-hover:border-[#0e850b]/60",
      icon: (
        <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    { 
      name: "Twitter", 
      desc: "Follow me on X.",
      url: "https://x.com/0x_Philippus", 
      iconBg: "bg-black border border-zinc-900 group-hover:border-[#0e850b]/40",
      icon: (
        <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.056-4.425 5.056H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
      )
    },
    { 
      name: "Telegram", 
      desc: "Send a direct message for updates.",
      url: "https://t.me/Ox_Philippus", 
      iconBg: "bg-[#24A1DE]/10 border border-[#24A1DE]/30 group-hover:border-[#0e850b]/60",
      icon: (
        <svg className="w-5 h-5 text-white mr-0.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 12 12 12 12-4.48 12-12S17.52 2 12 2zm4.64 8.62l-1.12 5.27c-.08.38-.31.47-.63.29l-1.72-1.27-1.13 1.09c-.12.12-.23.23-.47.23l.17-2.39 4.35-3.93c.19-.17-.04-.26-.29-.1l-5.38 3.39-2.32-.73c-.5-.16-.51-.5.1-.74l9.07-3.5c.42-.15.79.1.63.89z" />
        </svg>
      )
    },
    { 
      name: "Discord", 
      desc: "Connect with me directly on Discord.",
      url: "https://discord.com/users/1239587640240767087", 
      iconBg: "bg-[#5865F2]/10 border border-[#5865F2]/30 group-hover:border-[#0e850b]/60",
      icon: (
        <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
        </svg>
      )
    },
    { 
      name: "Email", 
      desc: "Drop me a message for collaborations or inquiries.",
      url: "mailto:philipikpenyic@gmail.com", 
      iconBg: "bg-[#0e850b]/10 border border-[#0e850b]/30 group-hover:border-[#0e850b]/80",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#010201] text-[#ffffff] flex flex-col items-center p-6 font-sans overflow-y-auto selection:bg-[#0e850b]/30">
      
      {/* Immersive Background Ambient Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#0e850b] opacity-[0.12] blur-[160px] rounded-full pointer-events-none"></div>

      {/* Profile Card Section — Pure Jet Black Layer without any Glass-Sheen overrides */}
      <div className="w-full max-w-md bg-[#010201] border border-zinc-900/60 rounded-[32px] p-8 mt-8 text-center shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
        
        {/* Subtle Top Border Pin-Light */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0e850b]/30 to-transparent"></div>

        {/* Profile Avatar Frame */}
        <div className="relative w-28 h-28 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-[#0e850b] opacity-20 blur-[6px] animate-pulse duration-[4000ms]"></div>
          <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-b from-[#0e850b]/80 via-zinc-950 to-[#0e850b]/40 shadow-[0_0_25px_rgba(14,133,11,0.25)] relative z-10 flex items-center justify-center overflow-hidden">
            <img 
              src={myAvatar} 
              alt="PHiLiPPUS Profile" 
              className="w-full h-full rounded-full object-cover relative z-10"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<div class="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-xl font-bold tracking-widest text-[#0e850b]">PR</div>';
              }}
            />
          </div>
        </div>
        
        {/* Profile Name — Styled with custom sharp lowercase breaks and Oswald family properties */}
        <h1 className="font-oswald text-3xl font-black tracking-wide mb-3 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">
          PHiLiPPUS
        </h1>
        
        <p className="text-[10px] font-extrabold tracking-[0.25em] text-[#0e850b] uppercase mb-1 bg-[#0e850b]/5 border border-[#0e850b]/20 px-3 py-1 rounded-full inline-block backdrop-blur-md">
          Trader | Writer | Builder
        </p>
      </div>

      {/* Interactive Links Container with both Glass-Sheen AND Matrix-Borders */}
      <div className="w-full max-w-md flex flex-col gap-3.5 mt-6 mb-12">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full p-4 flex items-center justify-between rounded-2xl backdrop-blur-md transition-all duration-300 ease-out transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.5)] matrix-border glass-sheen"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 ${link.iconBg}`}>
                {link.icon}
              </div>
              
              <div className="flex flex-col text-left">
                <span className="font-bold text-[15px] tracking-wide text-zinc-200 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-200">
                  {link.name}
                </span>
                <span className="text-xs text-zinc-500 font-medium line-clamp-1 mt-0.5 group-hover:text-zinc-400 transition-colors duration-200">
                  {link.desc}
                </span>
              </div>
            </div>

            {/* Neon Accent Corner Arrow */}
            <div className="text-zinc-600 group-hover:text-[#0e850b] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 p-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Alignment */}
      <div className="w-full text-center text-xs font-semibold text-zinc-700 tracking-wider mt-auto pb-4">
        &copy; 2026 Philippus
      </div>

    </div>
  );
}

export default App;