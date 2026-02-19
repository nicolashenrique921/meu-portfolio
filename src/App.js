import React from 'react';
import { Github, Linkedin, ExternalLink, Code2, Terminal, Cpu, Mail } from 'lucide-react';

function App() {
  // Configuração das Skills com cores e nomes para os ícones
  const skills = [
    { name: 'Java', color: 'text-[#007396]' },
    { name: 'Spring Boot', color: 'text-[#6DB33F]' },
    { name: 'React', color: 'text-[#61DAFB]' },
    { name: 'Angular', color: 'text-[#DD0031]' },
    { name: 'Node.js', color: 'text-[#339933]' },
    { name: 'TypeScript', color: 'text-[#3178C6]' },
    { name: 'Python', color: 'text-[#3776AB]' },
    { name: 'MongoDB Atlas', color: 'text-[#47A248]' },
    { name: 'PostgreSQL', color: 'text-[#4169E1]' },
    { name: 'Git', color: 'text-[#F05032]' },
  ];

  // Função para pegar ícones reais das tecnologias
  const getIconUrl = (name) => {
    const map = {
      'Java': 'java-coffee-cup-logo',
      'React': 'react',
      'Angular': 'angularjs',
      'Node.js': 'nodejs',
      'Python': 'python',
      'TypeScript': 'typescript',
      'Spring Boot': 'spring-logo',
      'MongoDB Atlas': 'mongodb',
      'PostgreSQL': 'postgreesql',
      'Git': 'git'
    };
    const icon = map[name] || name.toLowerCase();
    return `https://img.icons8.com/color/48/${icon}.png`;
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* NAVEGAÇÃO */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800 sticky top-0 bg-gray-900/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <Code2 className="text-blue-400 w-6 h-6" />
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Nicolas Henrique
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#sobre" className="hover:text-blue-400 transition text-sm font-medium hidden md:block">Sobre</a>
          <a href="#projetos" className="hover:text-blue-400 transition text-sm font-medium hidden md:block">Projetos</a>
          <div className="flex items-center gap-4 border-l border-gray-700 pl-4">
            <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 hover:text-white text-gray-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/nicolas-henrique-o-6ab219199" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-400 text-gray-400 transition" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="sobre" className="py-24 px-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <img 
          src="https://github.com/nicolashenrique921.png" 
          alt="Nicolas Henrique" 
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-800 shadow-2xl mb-8 relative z-10 hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Desenvolvedor <span className="text-blue-500">Full Stack</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
          Estudante de ADS na <span className="text-white font-semibold underline decoration-blue-500 decoration-2">FACENS</span>. 
          Atuando no Laboratório de TI e desenvolvendo soluções reais com ecossistemas Java, Python e JavaScript.
        </p>
        <div className="flex justify-center gap-4">
           <a href="mailto:nicolashenrique921@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition flex items-center gap-2">
             <Mail size={18} /> Entrar em contato
           </a>
        </div>
      </header>

      {/* TECH STACK */}
      <section className="py-20 px-6 bg-gray-800/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Terminal className="text-blue-400 w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Minha Stack</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map(skill => (
              <div key={skill.name} className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 hover:bg-gray-800 transition-all group">
                <img src={getIconUrl(skill.name)} alt={skill.name} className="w-10 h-10 group-hover:bounce transition-transform" />
                <span className={`font-bold text-[10px] uppercase tracking-widest ${skill.color}`}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-16">
          <Cpu className="text-blue-400 w-6 h-6" />
          <h3 className="text-4xl font-black tracking-tight">Projetos</h3>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* Card 1 - Controle de Descarte */}
          <div className="group bg-gray-800/40 rounded-3xl border border-gray-700 overflow-hidden hover:border-yellow-500/50 transition-all flex flex-col">
            <div className="p-8 flex-1">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">Laboratório TI</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition">Controle Descarte Lab</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Ferramenta interna para gestão de descarte de hardware telecom (ONTs, Switches). 
                Interface em Streamlit com relatórios técnicos em PDF e automação de banco de dados PostgreSQL.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-gray-400">
                <span>#Python</span> <span>#PostgreSQL</span> <span>#DataViz</span>
              </div>
            </div>
            <div className="px-8 pb-8">
              <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                Ver Repositório <ExternalLink size={16} className="text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Card 2 - WorkLog */}
          <div className="group bg-gray-800/40 rounded-3xl border border-gray-700 overflow-hidden hover:border-red-500/50 transition-all flex flex-col">
            <div className="p-8 flex-1">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">Produtividade</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition">WorkLog - Atividades</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Sistema de registro de logs com paginação dinâmica e busca inteligente. 
                Backend em Node/Express (TypeScript) e persistência escalável no MongoDB Atlas.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-gray-400">
                <span>#Angular</span> <span>#NodeJS</span> <span>#MongoDB</span>
              </div>
            </div>
            <div className="px-8 pb-8">
              <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                Ver Repositório <ExternalLink size={16} className="text-red-500" />
              </a>
            </div>
          </div>

          {/* Card 3 - CRUD Spring Boot */}
          <div className="group bg-gray-800/40 rounded-3xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all flex flex-col">
            <div className="p-8 flex-1">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Full Stack Java</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition">Gestão Full Stack</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                CRUD completo integrando Spring Boot 3 e React. Foco em APIs RESTful seguras, 
                mapeamento objeto-relacional com JPA e interface responsiva.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-gray-400">
                <span>#Java</span> <span>#Spring</span> <span>#React</span>
              </div>
            </div>
            <div className="px-8 pb-8">
              <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                Ver Repositório <ExternalLink size={16} className="text-blue-500" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-gray-800 bg-gray-950/50 text-center">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Desenvolvido com React & Tailwind</p>
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://github.com/nicolashenrique921" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-henrique-o-6ab219199" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-gray-400 font-medium">Nicolas Henrique de Oliveira</p>
        <p className="text-gray-600 text-sm mt-1 italic">FACENS - Sorocaba/SP</p>
      </footer>
    </div>
  );
}

export default App;