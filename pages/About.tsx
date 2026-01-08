
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-12 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <span className="text-indigo-500 font-black uppercase tracking-[0.3em] text-sm mb-4 inline-block">Nossa História</span>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
          REDEFININDO O <br />
          <span className="game-gradient text-transparent bg-clip-text">MOBILE GAMING</span>
        </h1>
      </header>

      <div className="space-y-12 text-lg text-gray-300 leading-relaxed">
        <section className="glass rounded-3xl p-10">
          <h2 className="text-2xl font-black text-white uppercase mb-6">O Começo</h2>
          <p className="mb-6">
            O **MOBILE GAMES** começou como um projeto experimental simples. Na época, a plataforma original servia apenas como um repositório básico de links. Percebemos, no entanto, que a comunidade de jogadores mobile merecia algo mais: uma experiência visual imersiva, segura e profissional.
          </p>
          <p>
            Em 2025, decidimos dar o passo definitivo. Evoluímos de uma simples página para um portal tecnológico de última geração, focado em performance e curadoria real.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-3xl p-8 border-l-4 border-indigo-500">
            <h3 className="text-white font-black uppercase mb-4">Nossa Missão</h3>
            <p>Fornecer o catálogo mais confiável e esteticamente superior para quem leva o jogo no celular a sério.</p>
          </div>
          <div className="glass rounded-3xl p-8 border-l-4 border-pink-500">
            <h3 className="text-white font-black uppercase mb-4">Nossa Visão</h3>
            <p>Ser o ponto de referência nº 1 no Brasil para lançamentos, reviews e downloads seguros de jogos mobile.</p>
          </div>
        </div>

        <section className="text-center py-10">
          <h2 className="text-2xl font-black text-white uppercase mb-8">Por que confiar no MOBILE GAMES?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto flex items-center justify-center text-3xl">🛡️</div>
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">100% Seguro</h4>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto flex items-center justify-center text-3xl">🎮</div>
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">Curadoria Especial</h4>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto flex items-center justify-center text-3xl">🚀</div>
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">Foco em Performance</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
