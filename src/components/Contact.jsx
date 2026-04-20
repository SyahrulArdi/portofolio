import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, Instagram } from 'lucide-react';
import socialLinks from '../link_media/link.json';

const Contact = () => {
    const contactInfo = [
        { icon: <Mail />, title: 'Email', value: socialLinks.mail, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-500/10' },
        { icon: <Phone />, title: 'Phone', value: '+62 812 3456 7890', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-500/10' },
        { icon: <MapPin />, title: 'Location', value: 'Sidoarjo, Jawa Timur, Indonesia', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-500/10' }
    ];

    const socialPlatforms = [
        { Icon: Github, link: socialLinks.github },
        { Icon: Linkedin, link: socialLinks.linkedin },
        { Icon: Instagram, link: socialLinks.instagram }
    ];
    return (
        <section id="contact" className="py-32 px-6 bg-transparent overflow-hidden relative transition-colors duration-300">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-black/5 dark:border-white/10 text-purple-600 dark:text-purple-400 font-black text-xs uppercase tracking-[0.3em] shadow-2xl"
                    >
                        <MessageSquare className="w-4 h-4" />
                        <span>Get In Touch</span>
                    </motion.div>

                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-tight"
                    >
                        Let's <span className="text-purple-500">Connect.</span>
                    </motion.h2>

                    <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto font-medium"
                    >
                        Siap mengubah ide brilian Anda menjadi kenyataan digital? Saya siap membantu.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">Contact Information</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                Jangan ragu untuk menghubungi saya melalui saluran berikut. Saya selalu terbuka untuk diskusi proyek baru atau sekadar menyapa.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-6 p-6 glass rounded-3xl border border-black/5 dark:border-white/5 group transition-all"
                                >
                                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform shadow-lg`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">{item.title}</h4>
                                        <p className="text-slate-900 dark:text-white text-lg font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="space-y-6 p-8 glass rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl">
                            <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-[0.3em]">Follow My Digital Journey</h4>
                            <div className="flex gap-4">
                                {socialPlatforms.map(({ Icon, link }, idx) => (
                                    <motion.a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={idx}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-4 glass rounded-2xl border border-black/5 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50 shadow-xl transition-all"
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 50 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form className="p-10 md:p-14 glass rounded-[3rem] border border-black/5 dark:border-white/5 shadow-2xl space-y-10 relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] ml-2 text-left block">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-8 py-5 rounded-[1.5rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all text-slate-900 dark:text-white outline-none font-bold placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] ml-2 text-left block">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-8 py-5 rounded-[1.5rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all text-slate-900 dark:text-white outline-none font-bold placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] ml-2 text-left block">Your Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-8 py-6 rounded-[1.5rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all text-slate-900 dark:text-white outline-none font-bold placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none shadow-inner"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-6 bg-purple-500 text-white dark:text-white font-black rounded-[1.5rem] text-xl uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(168,85,247,0.3)] hover:bg-purple-600 transition-all flex items-center justify-center gap-4 group"
                            >
                                Send Message <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

