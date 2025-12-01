import { PROJECTS } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, Code, ExternalLink } from 'lucide-react';

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Retour aux projets
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-6">
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.techs.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">{project.type}</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                {project.title}
                            </h1>
                        </div>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <div className="bg-[#0f0f0f] p-8 rounded-xl border border-white/5">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                                    À propos du projet
                                </h3>
                                <div className="space-y-8 text-gray-300 leading-relaxed">
                                    {project.details.map((section, index) => (
                                        <div key={index}>
                                            {section.title && (
                                                <h4 className="text-lg font-semibold text-white mb-3 mt-6 first:mt-0">
                                                    {section.title}
                                                </h4>
                                            )}

                                            {section.type === 'text' && (
                                                <p className="mb-4 last:mb-0">
                                                    {section.content as string}
                                                </p>
                                            )}

                                            {section.type === 'list' && (
                                                <ul className="list-disc list-inside space-y-2 ml-2 marker:text-purple-500">
                                                    {(section.content as string[]).map((item, i) => (
                                                        <li key={i} className="pl-2">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex gap-4">
                            {project.hasRepo ? (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
                                >
                                    <Github size={20} />
                                    Voir le code
                                </a>
                            ) : (
                                <button
                                    disabled
                                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 text-gray-500 font-semibold rounded-xl cursor-not-allowed border border-white/5"
                                >
                                    <Code size={20} />
                                    Code privé
                                </button>
                            )}

                            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition shadow-lg shadow-purple-900/30">
                                <ExternalLink size={20} />
                                Voir le projet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
