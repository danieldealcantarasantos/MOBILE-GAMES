
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-12 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
          FALE COM <span className="text-indigo-500">A GENTE</span>
        </h1>
        <p className="text-gray-400">Dúvidas, sugestões de jogos ou parcerias? Nossa equipe está pronta para responder.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Informações</h3>
            <div className="space-y-6">
              <div>
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-1">E-mail Comercial</span>
                <p className="text-white font-bold">contato@mobilegames.com.br</p>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-1">Suporte</span>
                <p className="text-white font-bold">help@mobilegames.com.br</p>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-1">Horário</span>
                <p className="text-white font-bold">Seg - Sex, 09h às 18h</p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-3xl p-8 bg-indigo-600/10 border-indigo-500/30">
            <h3 className="text-indigo-400 font-bold uppercase text-xs tracking-widest mb-4">Comunidade</h3>
            <p className="text-gray-300 text-sm mb-4">Junte-se ao nosso servidor oficial para feedback em tempo real.</p>
            <button className="w-full bg-[#5865F2] py-3 rounded-xl font-bold uppercase tracking-widest text-xs">Entrar no Discord</button>
          </div>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="glass rounded-3xl p-12 text-center animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full mx-auto flex items-center justify-center text-4xl mb-6">✓</div>
              <h2 className="text-2xl font-black uppercase mb-4">Mensagem Enviada!</h2>
              <p className="text-gray-400 mb-8">Obrigado pelo seu contato. Nossa equipe analisará sua mensagem e responderá em até 48 horas.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-indigo-400 font-bold uppercase text-sm border-b border-indigo-500"
              >
                ENVIAR NOVA MENSAGEM
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-2">Seu Nome</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-2">Seu E-mail</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500" />
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-2">Assunto</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500">
                  <option className="bg-[#0a0a0c]">Suporte Técnico</option>
                  <option className="bg-[#0a0a0c]">Parcerias</option>
                  <option className="bg-[#0a0a0c]">Sugestão de Jogo</option>
                  <option className="bg-[#0a0a0c]">Outros</option>
                </select>
              </div>
              <div>
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest block mb-2">Mensagem</label>
                <textarea required rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-5 game-gradient rounded-2xl font-black text-white uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all transform hover:scale-[1.02]">
                ENVIAR AGORA
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
