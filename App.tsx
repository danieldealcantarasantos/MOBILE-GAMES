
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import GameDetail from './pages/GameDetail';
import About from './pages/About';
import Contact from './pages/Contact';

// Helper component to handle scroll position and document title
const PageScroller: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic Title Management
    const baseTitle = 'MOBILE GAMES';
    let pageTitle = '';

    if (pathname === '/') pageTitle = 'Portal Supremo de Jogos Mobile';
    else if (pathname.startsWith('/explorar')) pageTitle = 'Explorar Biblioteca de Jogos';
    else if (pathname.startsWith('/jogo/')) pageTitle = 'Detalhes do Jogo';
    else if (pathname === '/sobre') pageTitle = 'Nossa História e Missão';
    else if (pathname === '/contato') pageTitle = 'Fale Conosco';

    document.title = pageTitle ? `${baseTitle} | ${pageTitle}` : baseTitle;
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <PageScroller />
      <div className="flex flex-col min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorar" element={<Explore />} />
            <Route path="/jogo/:id" element={<GameDetail />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
