import React from 'react';
import { Github, Linkedin, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';

function App() {
  const skills = [
    { name: 'Java', color: 'text-[#007396]' },
    { name: 'Spring Boot', color: 'text-[#6DB33F]' },
    { name: 'React', color: 'text-[#61DAFB]' },
    { name: 'Angular', color: 'text-[#DD0031]' },
    { name: 'Node.js', color: 'text-[#339933]' },
    { name: 'TypeScript', color: 'text-[#3178C6]' },
    { name: 'JavaScript', color: 'text-[#F7DF1E]' },
    { name: 'Python', color: 'text-[#3776AB]' },
    { name: 'SQL', color: 'text-[#4479A1]' },
    { name: 'Git', color: 'text-[#F05032]' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Nav */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800 sticky top-0 bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <Code2 className="text-blue-400" />
          <h1 className="text-xl font-bold tracking-tight">Nicolas Henrique</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#sobre" className="hover:text-blue-400 transition text-sm font-medium">Sobre</a>
          <a href="#projetos" className="hover:text-blue-400 transition text-sm font-medium">Projetos</a>
          <a href="https://www.linkedin.com/in/nicolas-henrique-o-6ab219199" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="sobre" className="py-24 px-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        <img 
          src="https://github.com/nicolashenrique921.png" 
          alt="Nicolas" 
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-800 shadow-2xl mb-8 relative z-10"
        />
        <h2 className="text-5xl font-black mb-4 tracking-tight">Olá, eu sou o <span className="text-blue-400">Nicolas</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Estudante de ADS na <span className="text-white font-semibold underline decoration-blue-500">FACENS</span>. 
          Desenvolvedor focado em ecossistemas modernos, transitando entre **Java/Spring** e **Node/TypeScript**.
        </p>
      </header>

      {/* Skills */}
      <section className="py-16 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-10">
            <Terminal className="text-blue-400 w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Stack Tecnológica</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map(skill => (
              <div key={skill.name} className="bg-gray-800 border border-gray-700 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-blue-500/50 transition-all group">
                <span className={`font-bold text-sm ${skill.color} group-hover:scale-110 transition-transform`}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Cpu className="text-blue-400 w-6 h-6" />
          <h3 className="text-3xl font-bold">Projetos em Destaque</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
            <div className="p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Full Stack</span>
              <h4 className="text-xl font-bold mt-4 mb-2 group-hover:text-blue-400 transition">Sistema CRUD Completo</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Integração robusta de Spring Boot com React. Arquitetura limpa e API RESTful.</p>
              <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all">
                GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Card 2 - Novo com Angular/Node */}
          <div className="group bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all">
            <div className="p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-500/10 px-2 py-1 rounded">Frontend</span>
              <h4 className="text-xl font-bold mt-4 mb-2 group-hover:text-red-400 transition">Portal de Dados Angular</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Dashboard complexo construído com Angular e TypeScript para visualização de métricas.</p>
              <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all">
                GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Card 3 - Novo com Node/Python */}
          <div className="group bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-green-500/10 transition-all">
            <div className="p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 bg-green-500/10 px-2 py-1 rounded">Backend / Automation</span>
              <h4 className="text-xl font-bold mt-4 mb-2 group-hover:text-green-400 transition">Task Automator</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Scripts em Python integrados a uma API Node.js para automação de processos internos.</p>
              <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all">
                GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition"><Github /></a>
          <a href="https://www.linkedin.com/in/nicolas-henrique-o-6ab219199" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0077b5] transition"><Linkedin /></a>
        </div>
        <p className="text-gray-600 text-xs tracking-widest uppercase">© 2026 Nicolas Henrique • FACENS Sorocaba</p>
      </footer>
    </div>
  );
}

export default App;