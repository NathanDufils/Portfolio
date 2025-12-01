"use client";

import { useRef, useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    link: string;
}

const BLOG_POSTS: BlogPost[] = [
    {
        id: 2,
        title: "Développement web 2025 : tendances",
        date: "10 Jan 2025",
        summary: "IA générative en production, blockchain backend et cyber-résilience : les ruptures majeures à anticiper.",
        tags: ["IA", "Blockchain", "Sécurité"],
        link: "https://www.les-vikings.fr/article/developpement-web-2025-tendances-ia-blockchain-et-cybersecurite"
    },
    {
        id: 5,
        title: "État de l'Écosystème Développeurs 2024",
        date: "2025",
        summary: "Les grandes tendances, les langages et les outils qui prédominent dans le secteur du développement logiciel selon JetBrains.",
        tags: ["Tendances", "Statistiques", "Dev"],
        link: "https://www.jetbrains.com/fr-fr/lp/devecosystem-2024/"
    },
    {
        id: 4,
        title: "Vibe Coding : coder par intention",
        date: "2024",
        summary: "Découvrez le vibe coding, une nouvelle manière de programmer par intention : quand le code devient conversation entre humain et IA.",
        tags: ["IA", "Coding", "Futur"],
        link: "https://blog.stephane-robert.info/docs/developper/vibe-coding"
    },
    {
        id: 3,
        title: "Pensée informatique et jeux vidéo",
        date: "2024",
        summary: "Comment la conception de jeux vidéo éducatifs permet de développer la pensée informatique chez les apprenants.",
        tags: ["Pédagogie", "Game Design", "Recherche"],
        link: "https://journals.openedition.org/dms/10769"
    },
    {
        id: 1,
        title: "L'IA dans l'industrie du jeu vidéo",
        date: "21 Nov 2023",
        summary: "Exploration de l'impact de l'IA sur le jeu vidéo, des premiers pixels aux mondes hyperréalistes d'aujourd'hui.",
        tags: ["IA", "Jeu Vidéo", "Tech"],
        link: "https://numalis.com/fr/lia-dans-lindustrie-du-jeu-video-evolution-mise-en-oeuvre-et-impact"
    }
];

export default function BlogCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // -10 for tolerance
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            // Check initial state
            checkScroll();
            // Check on resize
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group/carousel">
            {/* Bouton Gauche */}
            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-black/80 border border-purple-500/50 p-3 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-purple-600 hover:scale-110 hidden md:block"
                    aria-label="Scroll Left"
                >
                    <ChevronLeft size={24} />
                </button>
            )}

            {/* Bouton Droit */}
            {canScrollRight && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-black/80 border border-purple-500/50 p-3 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-purple-600 hover:scale-110 hidden md:block"
                    aria-label="Scroll Right"
                >
                    <ChevronRight size={24} />
                </button>
            )}

            <div
                ref={containerRef}
                className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
            >
                {BLOG_POSTS.map(post => (
                    <div key={post.id} className="min-w-[300px] md:min-w-[350px] snap-center">
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <a href={post.link} className="block bg-[#0f0f0f] border border-white/5 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] group h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-purple-400 bg-purple-900/20 px-2 py-1 rounded-full border border-purple-500/20">
                            {tag}
                        </span>
                    ))}
                </div>
                <span className="text-xs text-gray-500 font-mono">{post.date}</span>
            </div>

            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition">{post.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {post.summary}
            </p>

            <div className="flex items-center gap-2 text-purple-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
                Lire l'article <ExternalLink size={14} />
            </div>
        </a>
    );
}
