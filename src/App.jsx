import React from 'react';

function App() {
  const links = [
    { 
      name: 'GitHub', 
      desc: 'Check my repos and builds.',
      url: 'https://github.com', 
      iconBg: 'bg-zinc-900',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      desc: 'Follow me on X.',
      url: 'https://twitter.com', 
      iconBg: 'bg-zinc-900',
      icon: (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.056-4.425 5.056H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
      )
    },
    { 
      name: 'Telegram', 
      desc: 'Send a direct message for updates.',
      url: 'https://t.me/yourusername', 
      iconBg: 'bg-zinc-900',
      // RESTORED: Paper Plane Telegram SVG
      icon: (
        <svg className="w-4 h-4 text-white mr-0.5 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.91 2.212a.6.6 0 0 0-.531-.075L.435 9.44a.602.602 0 0 0-.03 1.108l5.58 2.51 2.05 6.425a.6.6 0 0 0 .964.288l3.65-3.03 4.83 3.58a.6.6 0 0 0 .945-.373l5.8-21.8a.6.6 0 0 0-.314-.636zm-8.815 12.39l-1.3 4.23-1.07-3.34 7.62-7.85-5.25 6.96z" />
        </svg>
      )
    },
    { 
      name: 'Discord', 
      desc: 'Connect with me directly on Discord.',
      url: 'https://discord.com', 
      iconBg: 'bg-zinc-900',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 127.14 96.36">
          <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.18,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.73-10.93,68.42,68.42,0,0,1-10.64-5.12c.91-.66,1.8-1.34,2.65-2a75.58,75.58,0,0,0,72.76,0c.85.69,1.74,1.37,2.65,2a68.45,68.45,0,0,1-10.64,5.12,74.74,74.74,0,0,0,6.73,10.93,105.54,105.54,0,0,0,31.05-18.83C129.74,50.18,123.83,27.32,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.93,46,53.8,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.17,46,96,53,91,65.69,84.24,65.69Z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      desc: 'Drop me a message for collaboration...',
      url: 'mailto:your@email.com', 
      iconBg: 'bg-zinc-900',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative h-screen bg-[#010201] text-[#ffffff] flex flex-col items-center justify-between p-4 pb-4 font-sans overflow-hidden select-none">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#0e850b] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Profile Card */}
      <div className="w-full max-w-sm bg-gradient-to-b from-zinc-950/50 to-zinc-950/10 border border-zinc-900/60 rounded-[24px] p-4 mt-1 text-center backdrop-blur-md shadow-2xl relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0e850b]/20 to-transparent"></div>

        {/* Profile Image Wrap */}
        <div className="relative w-20 h-20 mx-auto mb-2">
          <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-b from-[#0e850b] to-zinc-800 shadow-[0_0_20px_rgba(14,133,11,0.2)]">
            <img 
              src="/avatar.png" 
              alt="Philippus Profile" 
              className="w-full h-full rounded-full object-cover bg-zinc-900"
            />
          </div>
        </div>
        
        {/* RESTORED: Custom Name with explicit Oswald Font Style */}
        <h1 
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className="text-3xl font-bold tracking-[0.05em] mb-1 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent"
        >
          PHiLiPPUS
        </h1>
        
        <div className="inline-block border border-[#0e850b]/30 bg-[#0e850b]/5 px-3 py-0.5 rounded-full">
          <p className="text-[9px] font-bold tracking-[0.2em] text-[#0e850b] uppercase">
            TRADER | WRITER | BUILDER
          </p>
        </div>
      </div>

      {/* Links List Section */}
      <div className="w-full max-w-sm flex flex-col gap-2 my-auto px-1 z-10">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-2 px-4 flex items-center justify-between border border-zinc-900/80 rounded-xl bg-zinc-950/40 backdrop-blur-sm hover:border-[#0e850b]/50 hover:bg-zinc-900/40 transition-all duration-300 ease-out shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border border-zinc-800/60 shadow-inner group-hover:scale-105 transition-transform duration-300 ${link.iconBg}`}>
                {link.icon}
              </div>
              
              <div className="flex flex-col text-left">
                <span className="font-bold text-[13px] tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-200">
                  {link.name}
                </span>
                <span className="text-[10px] text-zinc-500 line-clamp-1 group-hover:text-zinc-400 transition-colors duration-200">
                  {link.desc}
                </span>
              </div>
            </div>

            <div className="text-zinc-600 group-hover:text-[#0e850b] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 p-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* COMPACTED FOOTER: Lowered layout margins and extra space removed */}
      <div className="w-full text-center text-[10px] text-zinc-600 tracking-wider pt-1">
        &copy; 2026 Philippus
      </div>

    </div>
  );
}

export default App;
