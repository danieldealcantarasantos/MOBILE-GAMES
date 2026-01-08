
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GAMES, CATEGORIES } from '../data';
import GameCard from '../components/GameCard';
import { Category } from '../types';

const Explore: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('categoria') as Category | null;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>(initialCategory || 'Todos');
  const [filteredGames, setFilteredGames] = useState(GAMES);

  useEffect(() => {
    let result = GAMES;

    if (searchTerm) {
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'Todos') {
      result = result.filter(game => game.category === selectedCategory);
    }

    setFilteredGames(result);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen pt-12 pb-20 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 relative">
          <div className="absolute -left-4 top-0 w-1 h-12 game-gradient rounded-full blur-[2px]" />
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Explorar <span className="game-gradient text-transparent bg-clip-text">Biblioteca</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Sua busca pelo jogo perfeito termina aqui. Filtre por gênero, pesquise por títulos ou explore os mais baixados da semana.
          </p>
        </header>

        {/* Dynamic Filter Bar (Better UX than standard sidebar on Mobile) */}
        <div className="flex flex-col gap-8 mb-12">
          {/* Search Box */}
          <div className="relative group max-w-xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Pesquisar títulos, categorias ou desenvolvedores..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('Todos')}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                selectedCategory === 'Todos' 
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30' 
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Todos os Gêneros
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                  selectedCategory === cat 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30' 
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
            {filteredGames.length} Jogos encontrados
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Grid System */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="bg-white/5 border border-dashed border-white/10 rounded-[3rem] p-24 text-center animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 mx-auto mb-8 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
              <span className="text-5xl opacity-40">🎮</span>
            </div>
            <h3 className="text-2xl font-black uppercase mb-3">Nenhum Level Encontrado</h3>
            <p className="text-gray-400 max-w-sm mx-auto mb-10 leading-relaxed">
              Não encontramos jogos com esses critérios. Tente uma categoria diferente ou use termos mais genéricos.
            </p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('Todos');}}
              className="px-10 py-4 bg-white text-black font-black rounded-xl uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all shadow-xl"
            >
              RESETAR FILTROS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
