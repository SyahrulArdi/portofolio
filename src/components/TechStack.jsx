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
        { name: 'SUPABASE', icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' },
        { name: 'WIRESHARK', icon: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg' },
        { name: 'LINUX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
    ];

    const row1 = [...skills, ...skills, ...skills];
    const row2 = [...skills, ...skills, ...skills].reverse();

    return (
        <section id="skills" className="py-32 bg-white dark:bg-dark-900 overflow-hidden relative transition-colors duration-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4"
                >
                    Technical <span className="text-cyan-500">Toolkit</span>
                </motion.h2>
                <motion.p 
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 dark:text-slate-400 text-lg font-medium"
                >
                    Teknologi yang saya gunakan untuk mewujudkan ide-ide menjadi nyata.
                </motion.p>
            </div>

            <div className="flex flex-col gap-10 relative z-10">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden">
                    <motion.div 
                        animate={{ x: [0, -1500] }}
                        transition={{ 
                            duration: 40, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="flex gap-6 whitespace-nowrap"
                    >
                        {row1.map((skill, i) => (
                            <div 
                                key={i}
                                className="px-10 py-5 glass rounded-[2rem] border border-black/5 dark:border-white/5 flex items-center gap-4 group hover:border-cyan-500/50 transition-all hover:scale-105 shadow-2xl"
                            >
                                <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-xl font-black text-slate-600 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden">
                    <motion.div 
                        animate={{ x: [-1500, 0] }}
                        transition={{ 
                            duration: 45, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="flex gap-6 whitespace-nowrap"
                    >
                        {row2.map((skill, i) => (
                            <div 
                                key={i}
                                className="px-10 py-5 glass rounded-[2rem] border border-black/5 dark:border-white/5 flex items-center gap-4 group hover:border-emerald-500/50 transition-all hover:scale-105 shadow-2xl"
                            >
                                <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-xl font-black text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-[0.2em]">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Gradient Mask for edges */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-dark-900 dark:via-dark-900/80 dark:to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-dark-900 dark:via-dark-900/80 dark:to-transparent z-20" />
        </section>
    );
};

export default TechStack;


