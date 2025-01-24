"use client";
import { useTranslations } from 'next-intl';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession, signOut } from 'next-auth/react';
import { toast } from 'sonner';
import Navbar from '../ui/navbar/index';

// Types
interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const Header = () => {
  const t = useTranslations('Navigation');
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Multi-touch logo interaction state
  const [logoTouchCount, setLogoTouchCount] = useState(0);
  const [lastLogoTouchTime, setLastLogoTouchTime] = useState(0);

  // Multi-touch logo interaction handler
  const handleLogoTouch = useCallback(() => {
    const currentTime = Date.now();
    console.log('Click registrato! Count:', logoTouchCount + 1);

    if (currentTime - lastLogoTouchTime > 1500) {
      console.log('Reset per timeout');
      setLogoTouchCount(1);
    } else {
      const newCount = logoTouchCount + 1;
      console.log('Incremento count a:', newCount);
      setLogoTouchCount(newCount);
      
      if (newCount === 3) {
        console.log('Redirezione al login!');
        router.push(`/${locale}/login`);
        toast.success("Redirecting to login page...");
        setLogoTouchCount(0);
        return;
      }
    }

    setLastLogoTouchTime(currentTime);
  }, [logoTouchCount, lastLogoTouchTime, router, locale]);

  // Reset touch count after inactivity
  useEffect(() => {
    if (logoTouchCount > 0) {
      const resetTimer = setTimeout(() => {
        setLogoTouchCount(0);
        console.log('Reset timer scaduto, count azzerato');
      }, 1500);

      return () => clearTimeout(resetTimer);
    }
  }, [logoTouchCount]);

  // Helper function to get path in new locale
  const getPathInNewLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.split('/').slice(2).join('/');
    return `/${newLocale}/${pathWithoutLocale}`;
  };

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.lang-menu') && !target.closest('.mobile-menu')) {
        setIsLangMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSignOut = () => signOut({ callbackUrl: `/${locale}` });

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'} min-h-24`}> 
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="relative group"
          onClick={(e) => {
            e.preventDefault();
            handleLogoTouch();
          }}
        >
          {/* **LOGO COMPLETO (Desktop/Tablet - Schermi >= sm)** */}
          <motion.div
            className="hidden sm:flex text-2xl font-bold items-center" // <-- `hidden sm:flex`: NASCOSTO su mobile, FLEX su schermi small e superiori
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background effect (per il logo completo) */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

            {/* Logo text with gradient (per il logo completo) */}
            <div className="relative flex items-center gap-2">
              {/* Logo icon/symbol (per il logo completo) */}
              <div className="w-8 h-8 relative">
                <motion.div
                  className="absolute inset-0 border-2 border-gold/30 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.1, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gold font-serif text-xl">D</span>
                </div>
              </div>

              {/* Logo text (per il logo completo) */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-gold via-gold/80 to-gold bg-clip-text text-transparent">
                  The Duke's
                </span>
                <span className="text-lg text-gold/80 -mt-1">
                  Chrono
                </span>
              </div>
            </div>

            {/* Subtle glow on hover (per il logo completo) */}
            <motion.div
              className="absolute inset-0 bg-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* **LOGO SEMPLIFICATO ("TDC") (Mobile - Schermi < sm)** */}
          <motion.div
            className="sm:hidden text-xl font-bold flex items-center" // <-- `sm:hidden flex`: MOSTRATO su mobile, NASCOSTO su schermi small e superiori
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background effect (per il logo TDC) - Opzionale, se vuoi un effetto anche per TDC*/}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

            {/* Logo text simplified (per il logo TDC) */}
            <div className="relative flex items-center gap-2">
              {/* Logo icon/symbol (per il logo TDC) - possiamo riusare lo stesso */}
              <div className="w-6 h-6 md:w-8 md:h-8 relative"> {/* Leggermente più piccolo su mobile */}
                <motion.div
                  className="absolute inset-0 border-2 border-gold/30 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.1, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gold font-serif text-xl">D</span>
                </div>
              </div>

              {/* Logo text "TDC" (per il logo TDC) */}
              <span className="text-xl font-bold bg-gradient-to-r from-gold via-gold/80 to-gold bg-clip-text text-transparent">
                TDC {/* <--- LOGO TDC */}
              </span>
            </div>

            {/* Subtle glow on hover (per il logo TDC) - Opzionale */}
            <motion.div
              className="absolute inset-0 bg-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
{<Navbar/>}

        {/* Language Switcher and Other Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="relative lang-menu">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
              className="text-gold/60 hover:text-gold text-sm font-medium flex items-center space-x-1"
              aria-expanded={isLangMenuOpen}
              aria-label="Language selector"
            >
              <span>{locale.toUpperCase()}</span>
              <motion.svg
                animate={{ rotate: isLangMenuOpen ? 180 : 0 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>

            {/* Language Dropdown */}
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 py-2 w-24 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl"
                >
                  {['it', 'en'].map((lang) => (
                    <Link
                      key={lang}
                      href={getPathInNewLocale(lang)}
                      className={`block px-4 py-2 text-sm ${
                        locale === lang
                          ? 'text-gold'
                          : 'text-gold/60 hover:text-gold'
                      }`}
                      onClick={() => setIsLangMenuOpen(false)}
                    >
                      {lang.toUpperCase()}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;