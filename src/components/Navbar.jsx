import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import myLogo from '../images/random/circular_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial theme check
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILL', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CERTIFICATE', href: '#certificates' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACTS', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-black/5 dark:border-white/5 shadow-2xl backdrop-blur-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 md:gap-4"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center neon-border-purple group overflow-hidden border border-black/5 dark:border-white/10">
            <img src={myLogo} alt="Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tighter text-purple-600 dark:text-purple-400 uppercase italic">DARDCOR</span>
        </motion.div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] font-black text-slate-600 dark:text-slate-300 hover:text-purple-500 transition-colors uppercase tracking-[0.2em] relative group px-2 py-1"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}

          <div className="flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-8">
            <button
              onClick={toggleTheme}
              className="p-2.5 glass rounded-xl border border-black/5 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-purple-500 hover:border-purple-500/50 transition-all"
              aria-label="Toggle Theme"
            >
              {!isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 glass rounded-lg border border-black/5 dark:border-white/10 text-slate-900 dark:text-white"
            aria-label="Toggle Theme"
          >
            {!isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button className="text-slate-900 dark:text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-b border-black/5 dark:border-white/5 overflow-hidden backdrop-blur-3xl"
          >
            <div className="px-6 py-10 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-black text-slate-600 dark:text-slate-300 hover:text-purple-500 transition-colors uppercase tracking-[0.3em] py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
