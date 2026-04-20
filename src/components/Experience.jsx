import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Frontend Engineer',
            company: 'Tech Innovations Corp.',
            location: 'Jakarta, Indonesia',
            date: 'Jan 2023 - Sekarang',
            desc: 'Memimpin tim pengembangan frontend untuk membangun platfom SaaS berbasis AI dengan performa tinggi dan skalabilitas global.',
            type: 'work',
            tasks: ['Lider tim dari 5+ orang developer', 'Implementasi sistem desain modular', 'Optimasi performa aplikasi web']
        },
        {
            title: 'UI/UX Designer & Web Developer',
            company: 'Creative Studio X',
            location: 'Yogyakarta, Indonesia',
            date: 'Jun 2021 - Des 2022',
            desc: 'Mendesain antarmuka pengguna yang intuitif dan mengelola seluruh siklus hidup pengembangan web untuk klien e-commerce.',
            type: 'work',
            tasks: ['Mendesain flow aplikasi logistik', 'Menulis kode frontend yang responsif', 'Integrasi API pihak ketiga']
        },
        {
            title: 'Sarjana Teknik Informatika',
            company: 'Universitas Indonesia',
            location: 'Depok, Indonesia',
            date: '2017 - 2021',
            desc: 'Lulus dengan pujian (Cum Laude). Fokus pada rekayasa perangkat lunak dan sistem basis data terdistribusi.',
            type: 'edu',
            tasks: ['IPK: 3.9/4.0', 'Ketua Himpunan Mahasiswa IT', 'Finalis Kompetisi Coding Nasional']
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12 scroll-mt-20 bg-white dark:bg-dark-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tight">
                        Riwayat <span className="text-cyan-600 dark:text-cyan-400">Kerja & Pendidikan</span>
                    </h2>
                    <p className="max-w-2xl text-slate-600 dark:text-slate-400">
                        Perjalanan profesional saya dalam membangun karier di bidang teknologi dan inovasi digital.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto space-y-12 after:absolute after:inset-y-0 after:left-7 md:after:left-1/2 after:w-0.5 after:bg-slate-200 dark:after:bg-slate-800 after:hidden md:after:block">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.title + idx}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative flex items-center justify-between md:flex-row flex-col gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border-2 border-slate-200 dark:border-slate-700 items-center justify-center z-20 group hover:border-cyan-500 shadow-xl transition-all">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 group-hover:scale-150 transition-transform" />
                            </div>

                            <div className="w-full md:w-[45%] group">
                                <div className="relative p-8 rounded-3xl glass border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all hover:translate-y-[-5px]">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                                        {exp.type === 'work' ? <Briefcase className="w-20 h-20 text-cyan-600 dark:text-cyan-400" /> : <GraduationCap className="w-20 h-20 text-purple-600 dark:text-purple-400" />}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-2 px-3 py-1 glass rounded-lg border border-black/5 dark:border-white/10 w-fit">
                                            <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">{exp.date}</span>
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                                            <p className="text-sm font-bold text-slate-500 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase tracking-tight">{exp.company}</p>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {exp.location}
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p>

                                        <ul className="space-y-2">
                                            {exp.tasks.map((task) => (
                                                <li key={task} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300 transition-colors">
                                                    <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-500 mt-0.5 shrink-0" />
                                                    <span className="leading-tight">{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block w-full md:w-[45%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
