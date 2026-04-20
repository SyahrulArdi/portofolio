import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import logo from '../images/random/logo.png';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-32 px-6 bg-white dark:bg-dark-900 transition-colors duration-300">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] rounded-full animate-pulse" />
                <div className="cyber-grid absolute inset-0 opacity-20 dark:opacity-10" />
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-5xl w-full text-center">
                {/* Hero Logo/Avatar */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', damping: 15 }}
                    className="relative mb-10"
                >
                    <div className="absolute inset-0 bg-cyan-500/20 dark:bg-cyan-500/10 blur-3xl rounded-full" />
                    <div className="w-44 h-44 md:w-52 md:h-52 rounded-full p-1.5 bg-gradient-to-tr from-cyan-500 via-purple-500 to-emerald-500 relative">
                        <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center overflow-hidden border-4 border-white dark:border-dark-900 shadow-2xl">
                            <img 
                                src={logo} 
                                alt="Syahrul Ardi" 
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-dashed border-cyan-500/30 rounded-full"
                    />
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-2 px-5 py-2 glass rounded-full border border-black/5 dark:border-white/5 shadow-xl"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                    </span>
                    <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 dark:text-cyan-400 uppercase">Available for Work</span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 space-y-4"
                >
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500">Syahrul Ardi</span>
                    </h1>
                    
                    <div className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
                        <TypeAnimation
                            sequence={[
                                'I build Modern Websites', 2000,
                                'I design UI/UX Interfaces', 2000,
                                'I craft Digital Experiences', 2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-700 dark:from-cyan-300 dark:to-cyan-500"
                        />
                    </div>
                </motion.div>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-2xl text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-12 px-4"
                >
                    A passionate Front-End Developer dedicated to building high-performance, 
                    visually stunning, and user-centric web applications.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-5 mb-14 w-full justify-center"
                >
                    <a href="#projects" className="group relative px-10 py-4 bg-cyan-500 text-white dark:text-dark-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            View My Work <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>

                    <button className="px-10 py-4 glass border border-black/5 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95">
                        <Download className="w-5 h-5" /> Download CV
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex gap-8 items-center"
                >
                    {[
                        { icon: <Github className="w-7 h-7" />, link: "#" },
                        { icon: <Linkedin className="w-7 h-7" />, link: "#" },
                        { icon: <Instagram className="w-7 h-7" />, link: "#" },
                        { icon: <Mail className="w-7 h-7" />, link: "#" }
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.link}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="text-slate-400 dark:text-slate-500 hover:text-cyan-500 transition-all drop-shadow-lg"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
            >
                <div className="w-7 h-12 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1.5 shadow-2xl">
                    <motion.div
                        animate={{ y: [0, 18, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

