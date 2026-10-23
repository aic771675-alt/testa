import { useEffect, useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['КОЛЛЕКЦИИ', 'НОВОЕ', 'КАТЕГОРИИ', 'КОНТАКТЫ'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white/90 hover:text-white transition-colors md:hidden"
              aria-label="Открыть меню"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
            <a
              href="#"
              className={`font-serif-lux text-white tracking-[0.3em] text-xl md:text-2xl font-light select-none ${
                scrolled ? 'opacity-100' : 'opacity-100'
              }`}
            >
              EXCELLENT
              <span className="block text-[0.6em] tracking-[0.5em] text-white/60 mt-0.5">
                JEWELLERY
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans-lux text-white/80 hover:text-white text-[11px] tracking-[0.25em] font-light transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5 md:gap-7">
            <button className="text-white/80 hover:text-white transition-colors" aria-label="Поиск">
              <Search size={19} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[#0a0a0a] transition-transform duration-700 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-7">
          <span className="font-serif-lux text-white tracking-[0.3em] text-xl">
            EXCELLENT
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/80 hover:text-white"
            aria-label="Закрыть меню"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 mt-24">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-serif-lux text-white text-4xl tracking-[0.2em] hover:text-white/70 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
