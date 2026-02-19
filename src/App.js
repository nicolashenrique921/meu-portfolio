import React from 'react';
import { Linkedin, ExternalLink, Code2, Terminal, Cpu, Mail, Briefcase, GraduationCap } from 'lucide-react';

function App() {
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

  const getIconUrl = (name) => {
    const map = {
      'Java': 'java-coffee-cup-logo',
      'React': 'react-native',
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
          <h1 className="text-xl font-bold tracking-tight">Nicolas Henrique</h1>
        </div>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <a href="#sobre" className="hover:text-blue-400 transition hidden md:block">Sobre</a>
          <a href="#experiencia" className="hover:text-blue-400 transition hidden md:block">Experiência</a>
          <a href="#projetos" className="hover:text-blue-400 transition hidden md:block">Projetos</a>
          <a href="https://www.linkedin.com/in/nicolas-henrique-o-6ab219199" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition" />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="sobre" className="py-20 px-10 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <img 
          src="https://github.com/nicolashenrique921.png" 
          alt="Nicolas Henrique" 
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-800 shadow-2xl mb-8 relative z-10"
        />
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Desenvolvedor <span className="text-blue-500">Full Stack</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Há mais de 2 anos estudando e evoluindo no universo da programação. Atualmente focado em aprimorar minhas technical e soft skills através de projetos reais e formação contínua no <a href="https://facens.br/" target="_blank" rel="noreferrer" className="text-white font-semibold underline decoration-blue-500 hover:text-blue-400 transition">Centro Universitário Facens</a>.
        </p>
      </header>

      {/* EXPERIÊNCIA & FORMAÇÃO */}
      <section id="experiencia" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-400" />
              <h3 className="text-2xl font-bold">Experiência Atual</h3>
            </div>
            <div className="border-l-2 border-blue-500 pl-6 space-y-4">
              <div>
                <h4 className="text-xl font-bold">Laboratório de TI - 4inet</h4>
                <p className="text-blue-400 text-sm mb-4 font-mono">Manutenção e Suporte Especializado</p>
                <ul className="text-gray-400 text-sm space-y-2 list-disc ml-4">
                  <li>Manutenção, configuração e autenticação de hardware/software: Roteadores, Switches, ONTs e ONUs.</li>
                  <li>Controle de sistemas críticos para auxílio de técnicos externos em campo.</li>
                  <li>Desenvolvimento de ferramentas internas para otimização de processos.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" />
              <h3 className="text-2xl font-bold">Desenvolvimento & Facens</h3>
            </div>
            <div className="border-l-2 border-gray-700 pl-6 space-y-4 text-sm text-gray-400">
              <p>Participação ativa em projetos acadêmicos e laboratoriais:</p>
              <ul className="space-y-2 list-disc ml-4">
                <li>Criação de interfaces responsivas e amigáveis (UI/UX).</li>
                <li>Manutenção de bancos de dados para garantir integridade e disponibilidade.</li>
                <li>Desenvolvimento de dashboards e ferramentas de visualização de dados.</li>
                <li>Implementação de novas features em aplicativos web durante graduação.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-6 bg-gray-800/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Terminal className="text-blue-400 w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Minha Stack</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map(skill => (
              <div key={skill.name} className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 transition-all group">
                <img src={getIconUrl(skill.name)} alt={skill.name} className="w-10 h-10 group-hover:scale-110 transition-transform" />
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
          
          <div className="bg-gray-800/40 p-8 rounded-3xl border border-gray-700 hover:border-yellow-500/30 transition-all">
            <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">Python</span>
            <h4 className="text-xl font-bold mt-2">Controle Descarte Lab</h4>
            <p className="text-gray-400 text-sm mt-4 mb-6">Solução especializada para gestão de hardware telecom com relatórios técnicos em PDF.</p>
            <a href="https://github.com/nicolashenrique921/ControleDescarteLaboratorio" target="_blank" rel="noreferrer" className="text-white text-sm font-bold flex items-center gap-2 hover:text-yellow-500 transition">GitHub <ExternalLink size={14}/></a>
          </div>

          <div className="bg-gray-800/40 p-8 rounded-3xl border border-gray-700 hover:border-red-500/30 transition-all">
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">Angular / Node</span>
            <h4 className="text-xl font-bold mt-2">WorkLog System</h4>
            <p className="text-gray-400 text-sm mt-4 mb-6">Sistema Full Stack para registro de atividades com MongoDB Atlas e paginação.</p>
            <a href="https://github.com/nicolashenrique921/Registro-Atividades-Frontend" target="_blank" rel="noreferrer" className="text-white text-sm font-bold flex items-center gap-2 hover:text-red-500 transition">GitHub <ExternalLink size={14}/></a>
          </div>

          <div className="bg-gray-800/40 p-8 rounded-3xl border border-gray-700 hover:border-blue-400/30 transition-all">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Spring Boot / React</span>
            <h4 className="text-xl font-bold mt-2">Gestão Full Stack</h4>
            <p className="text-gray-400 text-sm mt-4 mb-6">CRUD completo com APIs REST seguras e persistência de dados em banco relacional.</p>
            <a href="https://github.com/nicolashenrique921/ProjetoCRUD-WebApp" target="_blank" rel="noreferrer" className="text-white text-sm font-bold flex items-center gap-2 hover:text-blue-400 transition">GitHub <ExternalLink size={14}/></a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-gray-800 text-center bg-gray-950/20">
        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:nicolashenrique921@gmail.com" className="text-gray-400 hover:text-white transition"><Mail size={24}/></a>
          <a href="https://www.linkedin.com/in/nicolas-henrique-o-6ab219199" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition"><Linkedin size={24}/></a>
        </div>
        <p className="text-gray-400 font-medium">Nicolas Henrique de Oliveira</p>
        <div className="text-gray-600 text-xs mt-4 flex flex-col gap-1">
            <p>Sôr-15 99158-2545 | 15 99604-7825</p>
            <p className="italic">FACENS Sorocaba • © 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;