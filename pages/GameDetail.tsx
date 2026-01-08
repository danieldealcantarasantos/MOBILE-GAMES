
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GAMES } from '../data';
import GameCard from '../components/GameCard';

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const game = GAMES.find(g => g.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!game) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-in fade-in duration-500">
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">Ops! Jogo Perdido.</h1>
        <p className="text-gray-400 mb-8 max-w-md">O jogo que você está procurando não foi encontrado em nosso banco de dados 2.0.</p>
        <button onClick={() => navigate('/explorar')} className="game-gradient px-8 py-4 rounded-xl font-black uppercase tracking-widest shadow-lg shadow-indigo-500/40 hover:scale-105 transition-transform">
          VOLTAR PARA A BIBLIOTECA
        </button>
      </div>
    );
  }

  const relatedGames = GAMES.filter(g => g.category === game.category && g.id !== game.id).slice(0, 4);

  return (
    <div className="pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Banner with Scrim for Readability */}
      <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={game.bannerUrl} 
            alt={`${game.title} Banner`} 
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-black/30" />
        </div>
        
        {/* Contextual Back Button */}
        <div className="absolute top-8 left-4 md:left-8 z-20">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-black/50 hover:bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 transition-all group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            <span className="font-bold text-xs uppercase tracking-widest">Voltar</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              <div className="w-full md:w-64 shrink-0 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-[#141418] relative group">
                <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>
              <div className="flex-1 pt-4 md:pt-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">{game.category}</span>
                  <div className="h-4 w-px bg-white/10 mx-1" />
                  <div className="flex items-center text-yellow-500 gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-xs font-black text-white">{game.rating}</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
                  {game.title}
                </h1>
                
                {/* Platform CTAs - Better UX */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                  {game.platforms.includes('Android') && (
                    <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-green-600/20 border border-white/10 hover:border-green-500/50 px-6 py-4 rounded-2xl transition-all group overflow-hidden relative">
                      <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-black">A</div>
                      <div className="text-left">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">Disponível no</p>
                        <p className="text-sm font-black text-white">Google Play</p>
                      </div>
                    </button>
                  )}
                  {game.platforms.includes('iOS') && (
                    <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/50 px-6 py-4 rounded-2xl transition-all group overflow-hidden relative">
                      <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black">i</div>
                      <div className="text-left">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">Disponível na</p>
                        <p className="text-sm font-black text-white">App Store</p>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-8 md:p-12 mb-12 border border-white/5 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tight">Experiência de Jogo</h2>
                <div className="h-0.5 flex-1 bg-white/5" />
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-10 whitespace-pre-line">
                {game.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/5">
                {[
                  { label: 'Plataformas', value: game.platforms.join(', ') },
                  { label: 'Categoria', value: game.category },
                  { label: 'Rating', value: `${game.rating} / 5.0` },
                  { label: 'Status', value: 'Verificado' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar with dynamic related titles */}
          <aside className="w-full lg:w-80">
            <div className="sticky top-28">
              <h3 className="text-lg font-black uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Relacionados
              </h3>
              <div className="flex flex-col gap-4">
                {relatedGames.map(g => (
                  <Link to={`/jogo/${g.id}`} key={g.id} className="group flex gap-4 p-3 glass rounded-2xl hover:bg-indigo-600/10 border border-white/5 hover:border-indigo-500/30 transition-all">
                    <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden shadow-lg border border-white/5">
                      <img src={g.imageUrl} alt={g.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-white text-sm font-black group-hover:text-indigo-400 transition-colors line-clamp-1">{g.title}</h4>
                      <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mt-1">{g.category}</span>
                      <div className="flex items-center text-yellow-500 text-[10px] mt-1 font-black">
                        {g.rating} ★
                      </div>
                    </div>
                  </Link>
                ))}
                {relatedGames.length === 0 && (
                  <div className="text-center p-8 glass rounded-2xl border border-dashed border-white/10">
                    <p className="text-gray-500 text-xs italic">Expandindo catálogo...</p>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
