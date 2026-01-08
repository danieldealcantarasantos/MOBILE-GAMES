
import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { GAMES, CATEGORIES } from '../data';
import GameCard from '../components/GameCard';
import { Category } from '../types';

const Explore: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') as Category | null;
  const initialFilter = searchParams.get('filtro');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>(initialCategory || 'Todos');
  const [filteredGames, setFilteredGames] = useState(GAMES);

  useEffect(() => {
    let result = GAMES;

    // Search filter
    if (searchTerm) {
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'Todos') {
      result = result.filter(game => game.category === selectedCategory);
    }

    // Special filters from URL (e.g., popular)
    if (initialFilter === 'popular') {
      result = result.filter(game => game.popular);
    }

    setFilteredGames(result);
  }, [searchTerm, selectedCategory, initialFilter]);

  const handleCategoryChange = (cat: Category | 'Todos') => {
    setSelectedCategory(cat);
    if (cat === 'Todos') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen pt-12 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 relative">
          <div className="absolute -left-4 top-0 w-1.5 h-16 game-gradient rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            EXPLORAR <br />
            <span className="game-gradient text-transparent bg-clip-text">BIBLIOTECA</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
            Descubra novos mundos. Filtre por gênero, pesquise títulos específicos ou explore as recomendações da nossa comunidade técnica.
          </p>
        </header>

        {/* Search and Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16 items-start lg:items-center justify-between">
          {/* Search Input */}
          <div className="relative group w-full lg:max-w-md">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Pesquisar títulos ou categorias..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all shadow-xl font-bold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryChange('Todos')}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                selectedCategory === 'Todos' 
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30' 
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
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

        {/* Results Metadata */}
        <div className="flex items-center gap-6 mb-12">
          <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
            {filteredGames.length} RESULTADOS
          </span>
          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        {/* Grid Layout */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="bg-white/5 border border-dashed border-white/10 rounded-[3rem] py-32 text-center animate-in zoom-in-95 duration-500">
            <div className="w-28 h-28 mx-auto mb-10 bg-white/5 rounded-full flex items-center justify-center border border-white/5 relative">
              <span className="text-6xl animate-pulse">🎮</span>
              <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-2xl" />
            </div>
            <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Nenhum Level Encontrado</h3>
            <p className="text-gray-400 max-w-sm mx-auto mb-12 text-lg">
              Sua busca não retornou resultados. Tente simplificar os termos ou resetar os filtros.
            </p>
            <button 
              onClick={() => {setSearchTerm(''); handleCategoryChange('Todos'); searchParams.delete('filtro'); setSearchParams(searchParams);}}
              className="px-12 py-5 bg-white text-black font-black rounded-2xl uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95"
            >
              LIMPAR BUSCA
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
