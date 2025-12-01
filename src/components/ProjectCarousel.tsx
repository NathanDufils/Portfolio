"use client";

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, Code } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/projects';

export default function ProjectCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            checkScroll();
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
            containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group/carousel">
            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-black/80 border border-purple-500/50 p-3 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-purple-600 hover:scale-110 hidden md:block"
                    aria-label="Scroll Left"
                >
                    <ChevronLeft size={24} />
                </button>
            )}

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
                className="flex items-stretch overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
            >
                {PROJECTS.map(project => (
                    <div key={project.id} className="w-[350px] md:w-[450px] flex-none snap-center flex flex-col">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-col h-full group relative">
            <Link href={`/projects/${project.id}`} className="flex-1 flex flex-col">
                <div className="mb-4">
                    <span className="text-xs font-mono text-purple-400 mb-2 block border-b border-white/5 pb-2">{project.type}</span>
                    <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition">{project.title}</h4>
                </div>

                <div className="space-y-4 flex-1 mb-6 text-sm text-gray-300">
                    <div>
                        <strong className="text-gray-500 uppercase text-xs">Contexte :</strong>
                        <p className="mt-1 line-clamp-2">{project.context}</p>
                    </div>
                    <div>
                        <strong className="text-gray-500 uppercase text-xs">Défi :</strong>
                        <p className="mt-1 line-clamp-2">{project.challenge}</p>
                    </div>
                    <div>
                        <strong className="text-green-500/80 uppercase text-xs">Solution :</strong>
                        <p className="mt-1 line-clamp-2">{project.solution}</p>
                    </div>
                </div>
            </Link>

            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((t: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-xs text-gray-400">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 relative z-10">
                    {project.hasRepo ? (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={16} /> Code
                        </a>
                    ) : (
                        <span className="flex-1 flex items-center justify-center gap-2 py-2 border border-white/5 rounded-lg text-sm text-gray-600 cursor-not-allowed" title="Code privé">
                            <Code size={16} /> Privé
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
