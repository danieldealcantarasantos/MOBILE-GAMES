
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GAMES, CATEGORIES } from '../data';
import GameCard from '../components/GameCard';

const Home: React.FC = () => {
  const featuredGames = GAMES.filter(g => g.featured);
  const popularGames = GAMES.filter(g => g.popular).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-24 md:space-y-32 pb-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden py-24 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Gaming Experience" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/40 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              <span className="text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] animate-pulse">Lançamento Portal 2.0</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">
              REDEFINA <br />
              <span className="game-gradient text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">O SEU JOGO</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mb-14 leading-relaxed max-w-2xl border-l-4 border-indigo-500/50 pl-8 font-medium">
              O maior portal de curadoria técnica para jogos mobile no Brasil. Performance, segurança e paixão pelo universo gamer em cada pixel.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/explorar" 
                className="group relative px-12 py-6 game-gradient rounded-[2rem] font-black text-center text-white uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explorar Agora
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link 
                to="/explorar?filtro=popular" 
                className="px-12 py-6 bg-white/5 border border-white/10 hover:border-white/30 rounded-[2rem] font-black text-center text-white uppercase tracking-widest backdrop-blur-xl transition-all hover:bg-white/10 shadow-2xl"
              >
                Top 10 Global
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50 hidden sm:flex">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">Scroll</span>
          <div className="w-0.5 h-16 rounded-full bg-gradient-to-b from-indigo-500 to-transparent relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="relative">
            <div className="absolute -left-10 top-0 w-1 h-full bg-indigo-600 blur-[2px]" />
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Editor's Choice</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Destaques <span className="text-indigo-500">Premium</span>
            </h2>
          </div>
          <Link to="/explorar" className="flex items-center gap-3 text-indigo-400 font-black uppercase text-xs tracking-[0.3em] group bg-indigo-500/5 px-6 py-3 rounded-full border border-indigo-500/10 hover:bg-indigo-500/10 transition-all">
            Ver Todos os Títulos
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Categories Visual Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] -skew-y-3 transform scale-110 border-y border-white/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Explore por <span className="text-indigo-500">Gênero</span></h2>
            <div className="h-1.5 w-32 game-gradient mx-auto rounded-full mb-8 shadow-lg shadow-indigo-500/20" />
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto font-medium">Nossa curadoria categorizada para facilitar sua busca pelo próximo level.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {CATEGORIES.map((category) => (
              <Link 
                key={category}
                to={`/explorar?categoria=${category}`}
                className="group p-8 md:p-10 glass rounded-[2.5rem] text-center hover:bg-indigo-600 transition-all duration-500 transform hover:-translate-y-3 border border-white/5 hover:border-indigo-500/30 shadow-2xl"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 bg-black/40 rounded-[2rem] flex items-center justify-center group-hover:bg-white group-hover:rotate-6 transition-all shadow-inner border border-white/5">
                  <span className="text-indigo-500 group-hover:text-indigo-600 font-black text-2xl md:text-3xl">{category[0]}</span>
                </div>
                <span className="font-black text-xs md:text-sm uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Mais <span className="text-pink-500">Instalados</span>
          </h2>
          <div className="flex items-center gap-3">
             <div className="w-8 h-px bg-pink-500" />
             <p className="text-gray-500 font-black uppercase text-[10px] md:text-xs tracking-[0.4em]">Atualizado em tempo real</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {popularGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Final Portal CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass rounded-[4rem] p-10 md:p-24 overflow-hidden relative group border border-white/5">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-indigo-600/[0.03] blur-[150px] rounded-full group-hover:bg-indigo-600/[0.08] transition-colors duration-1000 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-10">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-indigo-400">Infraestrutura 2.0</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase mb-10 leading-[0.9] tracking-tighter">
                O Legado se <br />
                <span className="game-gradient text-transparent bg-clip-text">Torna Digital</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                Deixamos para trás as limitações visuais para abraçar uma nova era de performance. No MOBILE GAMES 2.0, cada download é verificado e cada review é escrito por especialistas que vivem o jogo.
              </p>
              <div className="flex flex-wrap gap-12 mb-14">
                {[
                  { n: '500k+', l: 'Comunidade' },
                  { n: '12+', l: 'Títulos Reais' },
                  { n: '100%', l: 'Verificado' }
                ].map((stat, i) => (
                  <div key={i} className="relative group/stat">
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover/stat:text-indigo-400 transition-colors">{stat.n}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-[0.4em]">{stat.l}</div>
                  </div>
                ))}
              </div>
              <Link to="/sobre" className="inline-flex items-center gap-6 text-white font-black uppercase text-xs md:text-sm tracking-[0.3em] group">
                <span className="border-b-4 border-indigo-500 pb-2 hover:text-indigo-400 transition-colors">Nossa Odisséia</span>
                <span className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:rotate-12 transition-all text-xl shadow-xl">→</span>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-6 bg-indigo-500/10 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img 
                  src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Gaming Lifestyle" 
                  className="rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative z-10 transform lg:-rotate-3 group-hover:rotate-0 transition-transform duration-1000 border border-white/10" 
                />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 p-6 rounded-3xl z-20 shadow-2xl animate-bounce-slow">
                   <div className="text-white font-black text-2xl">4.9/5</div>
                   <div className="text-indigo-200 text-[10px] font-black uppercase tracking-widest">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
