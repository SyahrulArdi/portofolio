import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronRight, ChevronLeft, ShieldCheck, Maximize2, Layers } from 'lucide-react';
import certData from '../images/certificate/certificate.json';

const getCertImage = (fileName) => {
    return new URL(`../images/certificate/${fileName}`, import.meta.url).href;
};

const Certificates = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const certificateGroups = Object.entries(certData).map(([key, fileName], index) => ({
        id: index + 1,
        title: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        issuer: index === 0 ? 'PT Garuda Telekomunikasi Indonesia' : 'Professional Certification',
        year: '2023',
        count: 1,
        coverImage: getCertImage(fileName),
        description: `Official digital credential for ${key.replace(/_/g, ' ')}. This certificate verifies the completion of specialized professional training.`,
        images: [
            {
                src: getCertImage(fileName),
                title: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                subtitle: 'Verified Achievement'
            }
        ]
    }));

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
        <section id="certificates" className="py-32 px-6 bg-transparent overflow-hidden relative transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-black/5 dark:border-white/10 text-purple-600 dark:text-purple-400 font-black text-xs uppercase tracking-[0.4em] shadow-2xl"
                    >
                        <ShieldCheck className="w-5 h-5" />
                        <span>Certification</span>
                    </motion.div>

                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter"
                    >
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-500">Certificate.</span>
                    </motion.h2>

                    <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-xl font-medium px-4"
                    >
                        Bukti kompetensi dan pengalaman profesional yang telah diverifikasi oleh instansi ternama.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto px-2 md:px-0">
                    {certificateGroups.map((group, index) => (
                        <motion.div
                            key={group.id}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onClick={() => openModal(group)}
                            className="group relative w-full cursor-pointer"
                        >
                            {/* Stacking Effect Simulation */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[2rem] md:rounded-[2.5rem] blur opacity-0 group-hover:opacity-30 transition duration-700" />

                            {/* Visual Stack Decoration - Adjusted for mobile */}
                            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-full h-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[1.5rem] md:rounded-[2rem] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-full h-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[1.5rem] md:rounded-[2rem] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

                            <div className="relative glass rounded-[2rem] md:rounded-[2.5rem] border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl transition-all">
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <img
                                        src={group.coverImage}
                                        alt={group.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-200/90 dark:from-[#0f0117] dark:via-[#0f0117]/40 via-slate-100/20 to-transparent" />

                                    <div className="absolute top-4 right-4 md:top-8 md:right-8 flex gap-2">
                                        <div className="px-3 py-1.5 md:px-4 md:py-2 glass rounded-full border border-black/5 dark:border-white/10 flex items-center gap-2">
                                            <Layers className="w-3 h-3 md:w-4 md:h-4 text-purple-600 dark:text-purple-400" />
                                            <span className="text-[10px] md:text-xs font-black text-slate-900 dark:text-white">{group.count} Items</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">
                                        <div className="space-y-1 md:space-y-2 text-left">
                                            <p className="text-purple-600 dark:text-purple-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{group.issuer}</p>
                                            <h3 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {group.title}
                                            </h3>
                                        </div>
                                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform">
                                            <Maximize2 className="w-5 h-5 md:w-7 md:h-7 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 bg-black/5 dark:bg-white/5 border-t border-black/5 dark:border-white/5">
                                    <div className="flex items-center justify-between text-[10px] md:text-sm">
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold">
                                            <Award className="w-3 h-3 md:w-4 md:h-4 text-purple-600 dark:text-purple-400" />
                                            {group.year} Digital Credential
                                        </div>
                                        <span className="text-purple-600 dark:text-purple-400 font-black uppercase tracking-widest text-[9px] md:text-[10px]">Detail</span>
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
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-100/95 dark:bg-[#0f0117]/98 backdrop-blur-2xl overflow-y-auto"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            onClick={() => setSelectedGroup(null)}
                            className="fixed top-6 right-6 md:top-10 md:right-10 p-3 md:p-5 glass rounded-2xl border border-black/5 dark:border-white/10 text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500 transition-all z-[110]"
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </motion.button>

                        <div className="relative w-full max-w-5xl flex flex-col items-center gap-8 py-20">
                            <motion.div
                                key={currentImgIndex}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                                className="w-full relative shadow-[0_0_100px_rgba(168,85,247,0.15)] rounded-3xl md:rounded-[2.5rem] overflow-hidden glass border border-black/5 dark:border-white/10 group/modal"
                            >
                                <div className="flex items-center justify-center bg-black/5 dark:bg-black/20 overflow-hidden relative p-2 md:p-4">
                                    <img
                                        src={selectedGroup.images[currentImgIndex].src}
                                        alt={selectedGroup.images[currentImgIndex].title}
                                        className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain rounded-2xl md:rounded-[2rem] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
