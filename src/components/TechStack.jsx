import { motion } from 'framer-motion';

const TechStack = () => {
    const skills = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JAVASCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TAILWIND', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'REACT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TYPESCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'NODE.JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'NEXT.JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'SUPABASE', icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' }
    ];

    const row1 = [...skills, ...skills];
    const row2 = [...skills, ...skills].reverse();

    return (
        <section id="skills" className="py-32 bg-transparent overflow-hidden relative transition-colors duration-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    Stack Capabilities
                </motion.div>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter"
                >
                    Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-500">Toolkit.</span>
                </motion.h2>
                <motion.p
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 dark:text-slate-400 text-xl font-medium max-w-2xl mx-auto"
                >
                    Teknologi pilihan yang saya andalkan untuk membangun solusi digital berperforma tinggi.
                </motion.p>
            </div>

            <div className="flex flex-col gap-12 relative z-10">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-8 whitespace-nowrap px-4"
                    >
                        {row1.map((skill, i) => (
                            <div
                                key={i}
                                className="px-10 py-6 glass rounded-[2.5rem] border border-black/5 dark:border-white/5 flex items-center gap-5 group hover:border-purple-500/30 transition-all hover:scale-105 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-500" />
                                <span className="text-2xl font-black text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors uppercase tracking-widest italic">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: [-1000, 0] }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-8 whitespace-nowrap px-4"
                    >
                        {row2.map((skill, i) => (
                            <div
                                key={i}
                                className="px-10 py-6 glass rounded-[2.5rem] border border-black/5 dark:border-white/5 flex items-center gap-5 group hover:border-indigo-500/30 transition-all hover:scale-105 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain group-hover:-rotate-12 transition-transform duration-500" />
                                <span className="text-2xl font-black text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-widest italic">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Premium Masking */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white dark:from-[#0f0117] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white dark:from-[#0f0117] to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default TechStack;


