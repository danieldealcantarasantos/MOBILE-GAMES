
import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link 
      to={`/jogo/${game.id}`}
      className="group relative block bg-[#141418] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all hover:-translate-y-2 duration-500 shadow-xl hover:shadow-indigo-500/20"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
        
        {/* Floating Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          {game.popular && (
            <span className="bg-pink-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded shadow-lg backdrop-blur-sm">Popular</span>
          )}
          {game.featured && (
            <span className="bg-indigo-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded shadow-lg backdrop-blur-sm">Destaque</span>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            {game.category}
          </span>
        </div>
        
        <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors drop-shadow-lg">
          {game.title}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center bg-black/40 px-2 py-1 rounded-lg backdrop-blur-md border border-white/5">
            <svg className="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1.5 text-xs font-black text-white">{game.rating}</span>
          </div>
          <div className="flex gap-1.5">
            {game.platforms.includes('Android') && (
              <div title="Disponível para Android" className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
            )}
            {game.platforms.includes('iOS') && (
              <div title="Disponível para iOS" className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
