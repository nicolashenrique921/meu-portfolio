import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header / Nav */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800 sticky top-0 bg-gray-900/90 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold text-blue-400">Nicolas Henrique</h1>
        <div className="space-x-6">
          <a href="#sobre" className="hover:text-blue-400 transition">Sobre</a>
          <a href="#projetos" className="hover:text-blue-400 transition">Projetos</a>
          {/* Link para o seu LinkedIn no Header */}
          <a 
            href="https://www.linkedin.com/in/nicolas-henrique-o-6ab219199" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-300 hover:text-[#0077b5] transition"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="sobre" className="py-20 px-10 text-center">
        <img 
          src="https://github.com/nicolashenrique921.png" 
          alt="Nicolas Henrique" 
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 mb-6 shadow-lg shadow-blue-500/20"
        />
        <h2 className="text-4xl font-extrabold mb-4 text-white">Olá, eu sou o Nicolas! 👋</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Estudante de Análise e Desenvolvimento de Sistemas na <span className="text-blue-400 font-semibold">FACENS</span> em Sorocaba/SP. 
          Focado em criar soluções Full Stack sólidas com **React** e **Spring Boot**.
        </p>
      </header>

      {/* Skills */}
      <section className="bg-gray-800/50 py-12 px-6">
        <h3 className="text-center text-2xl font-semibold mb-8 text-gray-200 font-mono tracking-widest uppercase text-sm">Stack Tecnológica</h3>
        <div className="flex justify-center gap-4 flex-wrap max-w-3xl mx-auto">
          {['Java', 'Spring Boot', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'SQL'].map(skill => (
            <span key={skill} className="bg-gray-700/50 px-5 py-2 rounded-lg text-sm font-medium border border-gray-600 hover:border-blue-400 transition-all duration-300">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section id="projetos" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Projetos em Destaque 🚀</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 - O seu CRUD Principal */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Full Stack</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Sistema CRUD Completo</h4>
              <p className="text-gray-400 text-sm mb-6">
                Gerenciamento robusto com React no frontend e Spring Boot no backend. Persistência de dados e API RESTful.
              </p>
            </div>
            <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="text-blue-400 font-medium hover:underline text-sm">Ver no GitHub →</a>
          </div>

          {/* Card 2 - Novo Projeto 1 (Edite as informações abaixo) */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">Backend</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">API de Gestão Java</h4>
              <p className="text-gray-400 text-sm mb-6">
                Desenvolvimento de uma API escalável utilizando Spring Boot para controle de fluxos de dados internos.
              </p>
            </div>
            <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="text-green-400 font-medium hover:underline text-sm">Ver no GitHub →</a>
          </div>

          {/* Card 3 - Novo Projeto 2 (Edite as informações abaixo) */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">Frontend</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Interface de Dashboard</h4>
              <p className="text-gray-400 text-sm mb-6">
                Projeto focado em UI/UX e consumo de APIs externas utilizando React e estilização moderna.
              </p>
            </div>
            <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="text-purple-400 font-medium hover:underline text-sm">Ver no GitHub →</a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-gray-800 bg-gray-950">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/nicolas-henrique-o-6ab219199" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition font-bold">LinkedIn</a>
        </div>
        <p className="text-gray-600 text-sm">Nicolas Henrique de Oliveira • 2026</p>
        <p className="mt-2 text-xs text-gray-700">FACENS - Sorocaba, SP</p>
      </footer>
    </div>
  );
}

export default App;