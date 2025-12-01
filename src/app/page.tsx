import Head from 'next/head';
import { Russo_One, Inter } from 'next/font/google';
import { Mail, Phone, Code, Database, Terminal, Download, Gamepad2, Plane, Monitor, Cpu, ExternalLink, Github, CheckCircle } from 'lucide-react';

// Chargement des polices
import BlogCarousel from '@/components/BlogCarousel';
import ProjectCarousel from '@/components/ProjectCarousel';

const russo = Russo_One({ weight: '400', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white ${inter.className}`}>
      <Head>
        {/* Optimisation SEO demandée par le cours [cite: 46] */}
        <title>Nathan Dufils | Développeur Web Fullstack & Logiciel</title>
        <meta name="description" content="Portfolio de Nathan Dufils. Projets React, Next.js, Vue.js. Recherche d'alternance pour Septembre 2025." />
        <meta name="keywords" content="Développeur, Portfolio, Alternance, React, NextJS, Java, Belfort" />
      </Head>

      {/* --- NAVIGATION --- 
          Critère cours: "Navigation fluide", liens clairs [cite: 266] */}
      <nav className="fixed w-full bg-[#050505]/90 backdrop-blur-md border-b border-white/10 z-50 py-4 transition-all">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className={`${russo.className} text-xl tracking-wider text-white select-none`}>
            NATHAN<span className="text-purple-500">.</span>
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide items-center">
            <a href="#about" className="relative py-1 hover:text-purple-400 transition-colors focus:outline-none after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full">À PROPOS</a>
            <a href="#skills" className="relative py-1 hover:text-purple-400 transition-colors focus:outline-none after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full">SKILLS</a>
            <a href="#projects" className="relative py-1 hover:text-purple-400 transition-colors focus:outline-none after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full">PROJETS</a>
            <a href="#contact" className="px-5 py-2 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left z-10">
              <h1 className={`${russo.className} text-6xl md:text-8xl leading-tight mb-2`}>
                NATHAN <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px #a855f7' }}>
                  DUFILS
                </span>
              </h1>
              {/* Le titre doit être explicite pour le recruteur [cite: 53] */}
              <h2 className="text-xl md:text-2xl text-gray-400 tracking-[0.2em] uppercase mb-8">
                Développeur Full Stack Junior
              </h2>

              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a href="#projects" className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition shadow-[0_0_15px_rgba(168,85,247,0.5)] transform hover:-translate-y-1">
                  VOIR MES RÉALISATIONS
                </a>
                {/* CV Téléchargeable obligatoire [cite: 216] */}
                <a href="/CV_Nathan_Dufils.pdf" download target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white/20 hover:border-white text-gray-300 hover:text-white font-bold rounded-lg transition flex items-center gap-2 justify-center">
                  <Download size={20} /> MODIFIER CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- RUBRIQUE À PROPOS --- 
          Critère cours: "Storytelling", expliquer le choix du domaine [cite: 39] */}
      <section id="about" className="px-6 -mt-10 mb-20 relative z-10 scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0a0a0a] border border-purple-500/50 rounded-[2rem] p-8 md:p-12 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 space-y-4 text-gray-300 text-lg leading-relaxed">
                <h3 className={`${russo.className} text-2xl text-white mb-2`}>Pourquoi le code ?</h3>
                <p>
                  Tout a commencé à l'âge de 3 ans, lorsque mon père m'a mis une manette de Playstation 1 entre les mains. Depuis, je n'ai jamais cessé de jouer. C'est dans le code que je retrouve aujourd'hui cette même alliance de <span className="text-purple-400 font-bold">logique</span> et de <span className="text-purple-400 font-bold">créativité</span> qui me fascine dans les jeux vidéo.
                </p>
                <p>
                  Pour autant, je ne souhaite pas faire carrière dans le développement de jeux vidéo. J'estime que ce secteur est aujourd'hui trop souvent corrompu par une logique de profit immédiat, au détriment de la <span className="text-purple-400 font-bold">vision artistique</span> et du bien-être des créateurs.
                </p>
              </div>

              {/* Soft Skills [cite: 184] */}
              <div className="flex flex-col gap-4 border-l border-white/10 md:pl-8 min-w-[250px]">
                <h4 className="text-purple-400 font-bold uppercase text-sm tracking-widest">Soft Skills</h4>
                <ul className="space-y-3">
                  {['Autonomie', 'Persévérance', 'Curiosité', 'Travail d\'équipe'].map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-white">
                      <CheckCircle size={16} className="text-purple-500" /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS & FORMATION --- */}
      <section id="skills" className="py-20 px-6 bg-black/50 scroll-mt-32">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
          <div>
            <h3 className={`${russo.className} text-3xl mb-10 text-purple-100 uppercase`}>Hard Skills</h3>
            <p className="text-gray-400 text-sm mb-6 italic">Les technologies que je pratique au quotidien.</p>
            <div className="space-y-6">
              {/* Ordre logique demandé par le cours [cite: 61] */}
              <SkillBar name="React / Next.js" level="w-4/5" />
              <SkillBar name="Vue.js / Node.js" level="w-3/4" />
              <SkillBar name="Java / Python" level="w-4/5" />
              <SkillBar name="Base de données" level="w-3/4" />
              <SkillBar name="HTML / CSS / SASS" level="w-8/9" />
              <SkillBar name="C / C++" level="w-1/3" />
            </div>
          </div>

          <div>
            <h3 className={`${russo.className} text-3xl mb-10 text-purple-100 uppercase`}>Parcours - Expériences</h3>
            <div className="space-y-8 border-l border-purple-500/30 pl-8 ml-4">
              <TimelineItem
                date="Sept 2025 - Août 2026"
                title="Développeur Fullstack"
                place="Sefas Innovation"
                desc="Alternance. Développement en C, C++ et Python."
              />
              <TimelineItem
                date="2022 - 2026"
                title="BUT Informatique"
                place="IUT Nord Franche-Comté"
                desc="Apprentissage approfondi du développement logiciel, web et de la gestion de projet."
              />
              <TimelineItem
                date="2022"
                title="Baccalauréat Général"
                place="Lycée Edouard Belin"
                desc="Spécialités : Mathématiques et NSI (Numérique et Sciences Informatiques)."
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJETS (CRUCIAL : Context, Challenge, Solution) --- */}
      <section id="projects" className="py-24 px-6 relative scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h3 className={`${russo.className} text-4xl mb-4 text-center text-white uppercase`}>
            Mes <span className="text-purple-500">Réalisations</span>
          </h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Sélection de projets développés en stage et en formation. Chaque projet répond à une problématique précise.
          </p>

          <ProjectCarousel />
        </div>
      </section>

      {/* --- VEILLE INFORMATIQUE --- */}
      <section className="px-6 mb-20 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1"></div>
            <h3 className={`${russo.className} text-2xl text-white uppercase tracking-wider`}>
              Articles <span className="text-purple-500">Intéressants</span>
            </h3>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <BlogCarousel />
        </div>
      </section>

      {/* --- CONTACT (Avec RGPD) --- */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-t from-purple-900/20 to-black scroll-mt-32">
        <div className="container mx-auto max-w-xl bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl">
          <h2 className={`${russo.className} text-3xl font-bold mb-8 text-center text-white`}>CONTACT</h2>

          <div className="flex flex-col gap-4 mb-8 items-center">
            <a href="mailto:dufilsnathan@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition">
              <Mail size={20} /> dufilsnathan@gmail.com
            </a>
            <span className="flex items-center gap-3 text-gray-300">
              <Phone size={20} /> 07 68 47 35 51
            </span>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" aria-label="Nom" placeholder="Nom" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none transition" required />
              <input type="text" aria-label="Prénom" placeholder="Prénom" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none transition" required />
            </div>
            <input type="email" aria-label="Email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none transition" required />
            <textarea rows={4} aria-label="Message" placeholder="Votre message..." className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none transition" required></textarea>

            {/* Mention RGPD Obligatoire  */}
            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" id="rgpd" className="mt-1 accent-purple-500" required />
              <label htmlFor="rgpd" className="text-xs text-gray-500 leading-tight">
                En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter.
                Aucun autre traitement ne sera effectué.
              </label>
            </div>

            <button type="submit" className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition shadow-[0_0_15px_rgba(168,85,247,0.4)] mt-4">
              ENVOYER
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center border-t border-white/5 bg-black text-gray-600 text-sm">
        <p>© 2025 Nathan Dufils. Développé avec Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

// --- COMPOSANTS INTERNES ---

function SkillBar({ name, level }: { name: string, level: string }) {
  return (
    <div className="flex flex-col mb-1 group">
      <div className="flex justify-between mb-1">
        <span className="font-bold text-gray-300 group-hover:text-purple-300 transition text-sm">{name}</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-[0_0_8px_#a855f7] ${level}`}></div>
      </div>
    </div>
  );
}

function TimelineItem({ date, title, place, desc }: any) {
  return (
    <div className="relative group">
      <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-[#050505] border-2 border-purple-500 group-hover:bg-purple-500 transition duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <span className="text-xs border border-purple-500/30 text-purple-300 rounded-full px-3 py-1 w-fit">{date}</span>
      </div>
      <p className="text-purple-400 text-sm mb-2">{place}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

