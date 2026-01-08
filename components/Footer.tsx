
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0c] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 game-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">M</span>
              </div>
              <span className="font-gamer font-black text-2xl tracking-tighter text-white">
                MOBILE<span className="text-indigo-500">GAMES</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              O Portal 2.0 dedicado aos entusiastas de jogos mobile. Nossa missão é elevar o patamar da informação gamer, trazendo curadoria de qualidade e as últimas novidades do universo Android e iOS.
            </p>
            <div className="flex space-x-4">
              {['Discord', 'Twitter', 'YouTube', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Explorar Jogos', 'Sobre Nós', 'Contato'].map(item => (
                <li key={item}>
                  <Link to={item === 'Início' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Categorias</h4>
            <ul className="space-y-4">
              {['Ação', 'RPG', 'Battle Royale', 'Estratégia'].map(item => (
                <li key={item}>
                  <Link to={`/explorar?categoria=${item}`} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 MOBILE GAMES. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
