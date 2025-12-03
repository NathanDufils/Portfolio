'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, Loader2, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import { Russo_One } from 'next/font/google';

const russo = Russo_One({ weight: '400', subsets: ['latin'] });

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation(); // Ajout de sécurité
        setLoading(true);
        setStatus('idle');

        // Récupération des variables d'environnement
        const SERVICE_ID = 'service_yk9d3tj';
        const TEMPLATE_ID = 'template_c8397fd';
        const PUBLIC_KEY = 'z2YZRBCI86YvRUf7w';

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setLoading(false);
                    setStatus('success');
                    if (form.current) form.current.reset();

                    // Force le scroll à rester sur le formulaire (ou remonte légèrement pour voir le message)
                    // On utilise un petit timeout pour laisser le temps au DOM de se mettre à jour
                    setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }, 100);

                }, (error) => {
                    console.log(error.text);
                    setLoading(false);
                    setStatus('error');
                });
        }
    };

    return (
        <div className="container mx-auto max-w-xl bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl">
            <h2 className={`${russo.className} text-3xl font-bold mb-8 text-center text-white`}>CONTACT</h2>

            <div className="flex flex-col gap-4 mb-8 items-center">
                <a href="mailto:dufilsnathan@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition">
                    <Mail size={20} /> dufilsnathan@gmail.com
                </a>
                <span className="flex items-center gap-3 text-gray-300">
                    <Phone size={20} /> 07 68 47 35 51
                </span>
                <div className="flex gap-6 mt-2">
                    <a href="https://github.com/NathanDufils" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition transform hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/dufils-nathan-00921a271/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition transform hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="user_name"
                        aria-label="Nom"
                        placeholder="Nom"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none transition"
                        required
                    />
                    <input
                        type="text"
                        name="user_firstname" // Optionnel, dépend de votre template EmailJS
                        aria-label="Prénom"
                        placeholder="Prénom"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none transition"
                        required
                    />
                </div>
                <input
                    type="email"
                    name="user_email"
                    aria-label="Email"
                    placeholder="Email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none transition"
                    required
                />
                <textarea
                    name="message"
                    rows={4}
                    aria-label="Message"
                    placeholder="Votre message..."
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none transition"
                    required
                ></textarea>

                <div className="flex items-start gap-3 mt-4">
                    <input type="checkbox" id="rgpd" className="mt-1 accent-purple-500" required />
                    <label htmlFor="rgpd" className="text-xs text-gray-500 leading-tight">
                        En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter.
                        Aucun autre traitement ne sera effectué.
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition shadow-[0_0_15px_rgba(168,85,247,0.4)] mt-4 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} /> Envoi en cours...
                        </>
                    ) : (
                        <>
                            ENVOYER
                        </>
                    )}
                </button>

                {status === 'success' && (
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm flex items-center gap-2">
                        <CheckCircle size={16} /> Message envoyé avec succès ! Je vous répondrai rapidement.
                    </div>
                )}

                {status === 'error' && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle size={16} /> Une erreur est survenue. Veuillez réessayer ou m'envoyer un email directement.
                    </div>
                )}
            </form>
        </div>
    );
}
