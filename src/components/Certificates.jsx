import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronRight, ChevronLeft, ShieldCheck, Maximize2, Layers } from 'lucide-react';
import certImg1 from '../images/certificate/sertifikat_magang.png';
import certImg2 from '../images/certificate/magang.jpeg';

const Certificates = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const certificateGroups = [
        {
            id: 1,
            title: 'Sertifikat Magang Industri',
            issuer: 'PT Garuda Telekomunikasi Indonesia',
            year: '2023',
            count: 2,
            coverImage: certImg1,
            description: 'Kumpulan sertifikat penyelesaian program magang industri dan workshop kompetensi di bidang teknologi telekomunikasi dan pengembangan web.',
            images: [
                { src: certImg1, title: 'Sertifikat Magang 1', subtitle: 'Penyelesaian Program Utama' },
                { src: certImg2, title: 'Sertifikat Magang 2', subtitle: 'Dokumentasi Tim & Workshop' },
            ]
        },
        // Tambahkan grup lain di sini jika ada di masa depan
    ];

    const openModal = (group) => {
        setSelectedGroup(group);
        setCurrentImgIndex(0);
    };

    const nextImg = () => {
        if (!selectedGroup) return;
        setCurrentImgIndex((prev) => (prev + 1) % selectedGroup.images.length);
    };

    const prevImg = () => {
        if (!selectedGroup) return;
        setCurrentImgIndex((prev) => (prev - 1 + selectedGroup.images.length) % selectedGroup.images.length);
    };

    return (
        <section id="certificates" className="py-32 px-6 bg-slate-50 dark:bg-dark-900 overflow-hidden relative transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-black/5 dark:border-white/10 text-cyan-600 dark:text-cyan-400 font-black text-xs uppercase tracking-[0.4em] shadow-2xl"
                    >
                        <ShieldCheck className="w-5 h-5" />
                        <span>Professional Validation</span>
                    </motion.div>
                    
                    <motion.h2 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter"
                    >
                        Official <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Credentials.</span>
                    </motion.h2>
                    
                    <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium"
                    >
                        Bukti kompetensi dan pengalaman profesional yang telah diverifikasi oleh instansi ternama.
                    </motion.p>
                </div>

                <div className="flex justify-center">
                    {certificateGroups.map((group, index) => (
                        <motion.div
                            key={group.id}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onClick={() => openModal(group)}
                            className="group relative w-full max-w-2xl cursor-pointer"
                        >
                            {/* Stacking Effect Simulation */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2.5rem] blur opacity-0 group-hover:opacity-30 transition duration-700" />
                            
                            {/* Visual Stack Decoration */}
                            <div className="absolute -top-4 -right-4 w-full h-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2rem] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                            <div className="absolute -top-2 -right-2 w-full h-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2rem] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

                            <div className="relative glass rounded-[2.5rem] border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl overflow-hidden transition-all">
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <img 
                                        src={group.coverImage} 
                                        alt={group.title} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-200/80 dark:from-dark-900 dark:via-dark-900/40 via-slate-100/20 to-transparent" />
                                    
                                    <div className="absolute top-8 right-8 flex gap-2">
                                        <div className="px-4 py-2 glass rounded-full border border-black/5 dark:border-white/10 flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                            <span className="text-xs font-black text-slate-900 dark:text-white">{group.count} Items</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                        <div className="space-y-2 text-left">
                                            <p className="text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-[0.2em]">{group.issuer}</p>
                                            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                                {group.title}
                                            </h3>
                                        </div>
                                        <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform">
                                            <Maximize2 className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-8 bg-black/5 dark:bg-white/5 border-t border-black/5 dark:border-white/5">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold">
                                            <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                            {group.year} Digital Credential
                                        </div>
                                        <span className="text-cyan-600 dark:text-cyan-400 font-black uppercase tracking-widest text-[10px]">Klik Untuk Detail</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Modal Backdrop */}
            <AnimatePresence>
                {selectedGroup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-100/95 dark:bg-dark-950/98 backdrop-blur-2xl"
                    >
                        <motion.button 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            onClick={() => setSelectedGroup(null)}
                            className="absolute top-6 right-6 md:top-10 md:right-10 p-5 glass rounded-2xl border border-black/5 dark:border-white/10 text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 hover:rotate-90 transition-all z-[110]"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <div className="relative w-full max-w-6xl flex flex-col items-center gap-8 text-left">
                            {/* Custom Navigation */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between w-[108%] -left-[4%] pointer-events-none hidden lg:flex">
                                <button 
                                    onClick={prevImg} 
                                    className="p-6 glass rounded-full border border-black/5 dark:border-white/10 text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-all pointer-events-auto shadow-2xl"
                                >
                                    <ChevronLeft className="w-10 h-10" />
                                </button>
                                <button 
                                    onClick={nextImg} 
                                    className="p-6 glass rounded-full border border-black/5 dark:border-white/10 text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-all pointer-events-auto shadow-2xl"
                                >
                                    <ChevronRight className="w-10 h-10" />
                                </button>
                            </div>

                            <motion.div
                                key={currentImgIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                className="w-full relative shadow-[0_0_80px_rgba(6,182,212,0.1)] rounded-[3rem] overflow-hidden glass border border-black/5 dark:border-white/10 group/modal"
                            >
                                <div className="flex flex-col lg:flex-row h-full">
                                    <div className="w-full lg:w-[65%] h-full flex items-center justify-center bg-black/5 dark:bg-black/40 overflow-hidden relative">
                                        <img 
                                            src={selectedGroup.images[currentImgIndex].src} 
                                            alt={selectedGroup.images[currentImgIndex].title}
                                            className="w-full h-auto max-h-[60vh] lg:max-h-[75vh] object-contain p-4 transition-transform duration-700 hover:scale-105"
                                        />
                                        
                                        {/* Mobile Tap Areas */}
                                        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-auto lg:hidden" onClick={prevImg} />
                                        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-auto lg:hidden" onClick={nextImg} />
                                    </div>
                                    
                                    <div className="w-full lg:w-[35%] p-10 md:p-14 flex flex-col justify-center gap-8 relative overflow-hidden bg-black/5 dark:bg-white/5 lg:border-l border-black/5 dark:border-white/5">
                                        <div className="space-y-6 relative z-10 w-full text-left">
                                            <div className="inline-flex gap-2 items-center px-4 py-2 glass rounded-full border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                                                <Award className="w-4 h-4" />
                                                Verified Item {currentImgIndex + 1} / {selectedGroup.images.length}
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] uppercase tracking-tighter">
                                                    {selectedGroup.images[currentImgIndex].title}
                                                </h3>
                                                <p className="text-cyan-600 dark:text-cyan-400 font-bold text-lg uppercase tracking-tight">
                                                    {selectedGroup.images[currentImgIndex].subtitle}
                                                </p>
                                            </div>
                                            
                                            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
                                            
                                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                                {selectedGroup.description}
                                            </p>
                                        </div>

                                        <div className="flex gap-4 mt-4 relative z-10">
                                            <button 
                                                onClick={() => window.open(selectedGroup.images[currentImgIndex].src, '_blank')}
                                                className="flex-1 py-4 bg-cyan-500 text-white font-black rounded-2xl text-sm uppercase tracking-widest hover:bg-cyan-600 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                                            >
                                                Lihat Full Gambar
                                            </button>
                                        </div>

                                        {/* Pagination Indicator */}
                                        <div className="flex gap-2 mt-auto">
                                            {selectedGroup.images.map((_, i) => (
                                                <div 
                                                    key={i} 
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImgIndex ? 'w-12 bg-cyan-600 dark:bg-cyan-400' : 'w-4 bg-black/10 dark:bg-white/10'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mobile Controls */}
                            <div className="flex gap-6 lg:hidden">
                                <button onClick={prevImg} className="p-5 glass rounded-2xl border border-black/5 dark:border-white/10 text-slate-900 dark:text-white active:scale-95 transition-all">
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button onClick={nextImg} className="p-5 glass rounded-2xl border border-black/5 dark:border-white/10 text-slate-900 dark:text-white active:scale-95 transition-all">
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
