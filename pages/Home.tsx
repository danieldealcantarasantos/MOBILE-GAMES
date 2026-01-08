
import React from 'react';
import { Link } from 'react-router-dom';
import { GAMES, CATEGORIES } from '../data';
import GameCard from '../components/GameCard';

const Home: React.FC = () => {
  const featuredGames = GAMES.filter(g => g.featured);
  const popularGames = GAMES.filter(g => g.popular).slice(0, 4);

  return (
    <div className="space-y-24 md:space-y-32 pb-20 animate-in fade-in duration-700">
      {/* Enhanced Hero Section - Fixed spacing bugs */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Gaming" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
          />
          {/* Enhanced Scrim for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/30 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="h-px w-6 md:w-8 bg-indigo-500" />
              <span className="text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Portal 2.0 Oficial</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter uppercase">
              REDEFINA <br />
              <span className="game-gradient text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">O SEU JOGO</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-xl border-l-2 border-white/10 pl-4 md:pl-6">
              A maior curadoria de jogos mobile do Brasil. Performance, segurança e reviews técnicos para quem leva o entretenimento a sério.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <Link 
                to="/explorar" 
                className="group relative px-8 md:px-10 py-4 md:py-5 game-gradient rounded-2xl font-black text-center text-white uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
              >
                <span className="relative z-10">Explorar Agora</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link 
                to="/explorar?filtro=popular" 
                className="px-8 md:px-10 py-4 md:py-5 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl font-black text-center text-white uppercase tracking-widest backdrop-blur-md transition-all hover:bg-white/10"
              >
                Top 10 Semanal
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Adjusted Positioning */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-40 hidden sm:block">
          <div className="w-0.5 h-10 md:h-12 rounded-full bg-gradient-to-t from-indigo-500 to-transparent" />
        </div>
      </section>

      {/* Featured Section with New UI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Seleção Especial</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
              Jogos em <span className="text-indigo-500">Destaque</span>
            </h2>
          </div>
          <Link to="/explorar" className="flex items-center gap-2 text-indigo-400 font-black uppercase text-[10px] md:text-xs tracking-widest group">
            Ver Biblioteca Completa
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Categories - Visual Refresh */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white/5 -skew-y-3 transform scale-110" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Categorias <span className="text-indigo-500">Principais</span></h2>
            <div className="h-1 w-20 md:w-24 game-gradient mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">Filtragem inteligente baseada em engine e jogabilidade.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {CATEGORIES.map((category, i) => (
              <Link 
                key={category}
                to={`/explorar?categoria=${category}`}
                className="group p-6 md:p-8 glass rounded-[2rem] text-center hover:bg-indigo-600 transition-all duration-500 transform hover:-translate-y-2 border border-white/5 hover:border-white/20"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-6 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:rotate-12 transition-all shadow-inner">
                  <span className="text-indigo-500 group-hover:text-indigo-600 font-black text-lg md:text-xl">{category[0]}</span>
                </div>
                <span className="font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/70 group-hover:text-white">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-2">
            Hits <span className="text-pink-500">Globais</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em]">Os mais instalados da última semana</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {popularGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* History Section - Enhanced Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-indigo-600/5 blur-[150px] rounded-full group-hover:bg-indigo-600/10 transition-colors duration-1000" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6 md:mb-8">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-indigo-400">Upgrade Tecnológico</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black uppercase mb-6 md:mb-8 leading-[1] md:leading-[0.9] tracking-tighter">
                O Legado se <br />
                <span className="text-indigo-400">Torna Digital</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-medium">
                O MOBILE GAMES 2.0 não é apenas um site, é um ecossistema. Deixamos para trás a simplicidade para abraçar a robustez tecnológica. Aqui, cada pixel foi pensado para o jogador que não aceita nada menos que a perfeição.
              </p>
              <div className="flex flex-wrap gap-8 md:gap-12">
                {[
                  { n: '500k+', l: 'Players' },
                  { n: '200+', l: 'Títulos' },
                  { n: '100%', l: 'Mobile' }
                ].map((stat, i) => (
                  <div key={i} className="relative">
                    <div className="text-3xl md:text-4xl font-black text-white mb-1 md:mb-2">{stat.n}</div>
                    <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-black tracking-[0.3em]">{stat.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10 md:mt-12">
                <Link to="/sobre" className="inline-flex items-center gap-4 text-white font-black uppercase text-xs md:text-sm tracking-[0.2em] group">
                  <span className="border-b-2 border-indigo-500 pb-1">Nossa Odisséia</span>
                  <span className="w-8 h-8 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all text-base md:text-lg">→</span>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mobile Lifestyle" 
                  className="rounded-[2rem] md:rounded-[3rem] shadow-2xl relative z-10 transform lg:-rotate-2 group-hover:rotate-0 transition-transform duration-1000" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
