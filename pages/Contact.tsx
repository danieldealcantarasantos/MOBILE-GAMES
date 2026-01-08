
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-700">
      <header className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 blur-[100px] -z-10 rounded-full" />
        <span className="text-indigo-500 font-black uppercase tracking-[0.5em] text-xs mb-6 inline-block animate-pulse">Network & Support</span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
          FALE COM A <br />
          <span className="text-indigo-500">NOSSA EQUIPE</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg font-medium">
          Dúvidas técnicas, sugestões de novos títulos ou propostas de parcerias? Estamos prontos para ouvir você.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Info Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          <div className="glass rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px] group-hover:bg-indigo-500/10 transition-colors" />
            <h3 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Diretório Oficial
            </h3>
            <div className="space-y-10">
              <div>
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-2">Comercial & Ads</span>
                <p className="text-white font-black text-lg hover:text-indigo-400 transition-colors cursor-pointer">ads@mobilegames.com.br</p>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-2">Suporte ao Player</span>
                <p className="text-white font-black text-lg hover:text-indigo-400 transition-colors cursor-pointer">help@mobilegames.com.br</p>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-2">Sede Digital</span>
                <p className="text-white font-bold leading-relaxed text-sm">
                  Avenida Paulista, 1000<br />
                  São Paulo, SP - Brasil
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-[2.5rem] p-10 bg-indigo-600/5 border-indigo-500/20 relative group overflow-hidden">
            <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity" />
            <h3 className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.3em] mb-6">Social Hub</h3>
            <p className="text-gray-300 text-sm mb-10 font-medium leading-relaxed">
              Junte-se a mais de 500 mil jogadores em nosso servidor do Discord para feedback em tempo real e betas exclusivos.
            </p>
            <a href="#" className="w-full bg-[#5865F2] hover:bg-[#4752C4] py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95">
              <span>Entrar no Discord</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.052-.102.001-.226-.106-.267a12.254 12.254 0 0 1-1.873-.892.077.077 0 0 1-.008-.128c.125-.094.252-.192.37-.29a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.37.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.892.077.077 0 0 0-.103.267c.36.698.772 1.362 1.225 1.993.051.103.001.228-.109.228a19.86 19.86 0 0 0 6.002-3.03.077.077 0 0 0 .031-.056c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
            </a>
          </div>
        </div>

        {/* Form Main Area */}
        <div className="lg:col-span-8">
          {submitted ? (
            <div className="glass rounded-[3rem] p-16 md:p-24 text-center animate-in zoom-in duration-500 border-green-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/5 blur-[60px] rounded-full" />
              <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full mx-auto flex items-center justify-center text-5xl mb-10 shadow-lg shadow-green-500/10">✓</div>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tighter">Missão Recebida!</h2>
              <p className="text-gray-400 mb-12 text-lg max-w-md mx-auto font-medium">Sua mensagem foi criptografada e enviada com sucesso. Nossa equipe de suporte responderá em seu radar em até 48 horas úteis.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-indigo-400 font-black uppercase text-sm tracking-widest border-b-2 border-indigo-500 pb-1 hover:text-white transition-colors"
              >
                ENVIAR NOVA TRANSMISSÃO
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-[3rem] p-10 md:p-16 space-y-8 border-white/5 shadow-2xl relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] block mb-3">Identificação / Nome</label>
                  <input required type="text" placeholder="Como devemos chamar você?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all font-bold placeholder:text-gray-700" />
                </div>
                <div>
                  <label className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] block mb-3">Canal de Contato / E-mail</label>
                  <input required type="email" placeholder="radar@exemplo.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all font-bold placeholder:text-gray-700" />
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] block mb-3">Frequência / Assunto</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all font-black appearance-none cursor-pointer">
                  <option className="bg-[#0a0a0c]">Suporte Técnico Portal</option>
                  <option className="bg-[#0a0a0c]">Propostas de Parceria</option>
                  <option className="bg-[#0a0a0c]">Sugestão de Curadoria</option>
                  <option className="bg-[#0a0a0c]">Reportar Bug / Erro</option>
                  <option className="bg-[#0a0a0c]">Outros Assuntos</option>
                </select>
              </div>
              <div>
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] block mb-3">Corpo da Mensagem</label>
                <textarea required rows={6} placeholder="Descreva detalhadamente sua solicitação..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all resize-none font-medium placeholder:text-gray-700"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-6 game-gradient rounded-2xl font-black text-white uppercase tracking-[0.3em] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-4 group"
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>ESTABELECER CONEXÃO</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </>
                )}
              </button>
              <p className="text-center text-gray-600 text-[9px] font-black uppercase tracking-widest mt-6">
                Ao enviar, você concorda com nossos termos de privacidade e processamento de dados.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
