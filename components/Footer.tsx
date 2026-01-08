
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0c] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-8 group">
              <div className="w-12 h-12 game-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl">M</span>
              </div>
              <span className="font-gamer font-black text-2xl tracking-tighter text-white">
                MOBILE<span className="text-indigo-500">GAMES</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              Sua fonte definitiva para o universo gamer mobile. Curadoria técnica, downloads seguros e as últimas tendências do Android e iOS em um só lugar.
            </p>
            <div className="flex space-x-4">
              {['Discord', 'Twitter', 'YouTube', 'Instagram'].map(social => (
                <a 
                  key={social} 
                  href="#" 
                  aria-label={social}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Navegação
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Início', path: '/' },
                { name: 'Explorar Jogos', path: '/explorar' },
                { name: 'Sobre o Portal', path: '/sobre' },
                { name: 'Fale Conosco', path: '/contato' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-500 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                    <span className="w-0 h-px bg-indigo-500 group-hover:w-3 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
              Categorias
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {['Ação', 'RPG', 'Battle Royale', 'MOBA', 'Esportes'].map(item => (
                <li key={item}>
                  <Link to={`/explorar?categoria=${item}`} className="text-gray-500 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                    <span className="w-0 h-px bg-pink-500 group-hover:w-3 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Portal 2.0
            </h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                Inscreva-se para receber avisos de novos lançamentos e reviews técnicos.
              </p>
              <form className="space-y-3" onSubmit={e => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition-all"
                />
                <button className="w-full py-3 game-gradient rounded-xl text-[10px] font-black uppercase tracking-widest text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
          <p className="mb-4 md:mb-0">© 2025 MOBILE GAMES. Todos os direitos reservados.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
