import { motion } from 'framer-motion';

const About = () => {

    return (
        <section id="about" className="py-32 px-6 bg-transparent overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Image Section */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 blur-3xl opacity-50" />
                        <div className="relative z-10 p-2 glass rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden group transition-all">
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                                alt="Front-End Development"
                                className="w-full aspect-[4/5] object-cover rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 dark:from-[#0f0117] via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-10 left-10">
                                <span className="px-4 py-1.5 glass rounded-full text-purple-600 dark:text-purple-400 text-sm font-bold tracking-widest uppercase border border-purple-500/30">Front-End Developer</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 50 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <h2 className="text-sm font-bold text-purple-600 dark:text-purple-500 uppercase tracking-[0.3em] mb-4">About Me</h2>


                        <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                            <p>
                                Sebagai <span className="text-slate-900 dark:text-white font-semibold">Front-End Developer</span>, saya adalah arsitek di balik bagian visual dan interaktif dari sebuah aplikasi web. Fokus utama saya adalah menjembatani kesenjangan antara desain grafis dan implementasi teknis.
                            </p>
                            <p>
                                Saya bertanggung jawab untuk memastikan bahwa setiap interaksi pengguna terasa mulus, cepat, dan intuitif. Dengan menguasai teknologi modern seperti <span className="text-slate-900 dark:text-white font-medium">React, Next.js, dan Tailwind CSS</span>, saya membangun antarmuka yang tidak hanya indah dipandang tetapi juga optimal secara performa.
                            </p>
                            <p>
                                Keahlian saya mencakup penulisan kode yang bersih, implementasi desain responsif yang konsisten di semua perangkat, serta optimasi aksesibilitas sehingga website dapat dinikmati oleh siapa saja.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default About;
