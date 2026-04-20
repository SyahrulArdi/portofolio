import { motion } from 'framer-motion';
import { FolderCode } from 'lucide-react';
import dardcorImg from '../images/project/dardcor-ai.png';
import starzImg from '../images/project/starz-shop.png';

const Projects = () => {
    const projects = [
        {
            title: 'Dardcor AI',
            link: 'https://dardcor-ai.vercel.app',
            image: dardcorImg,
        },
        {
            title: 'Starz-shop',
            link: 'https://louncher.github.io/',
            image: starzImg,
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 bg-white dark:bg-dark-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="max-w-2xl space-y-6">
                        <div className="flex items-center gap-3 text-cyan-500 dark:text-cyan-400 font-bold uppercase tracking-[0.3em] text-sm">
                            <FolderCode className="w-5 h-5" />
                            <span>Selected Projects</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                            Digital <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400">Creations.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    {projects.map((p, i) => (
                        <motion.a
                            key={p.title}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="group relative flex flex-col glass rounded-[2.5rem] border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden p-3 pb-0">
                                <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative">
                                    <img 
                                        src={p.image} 
                                        alt={p.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-200 dark:from-dark-950 via-transparent to-transparent opacity-60 transition-opacity duration-500" />
                                </div>
                            </div>

                            <div className="p-8 md:p-10 text-center">
                                <h3 className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 uppercase tracking-tighter italic">
                                    {p.title}
                                </h3>
                            </div>
                            
                            {/* Hover Overlay Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="w-20 h-20 bg-cyan-500/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-cyan-400/50 shadow-2xl">
                                    <div className="text-white dark:text-white font-black text-sm uppercase tracking-widest">Visit</div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;


