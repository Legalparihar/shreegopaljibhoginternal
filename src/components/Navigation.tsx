
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.recipes'), href: '/recipes' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/headerhindi.png" 
                alt="Shree Gopal Ji Bhog" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-yellow-400 hover:text-yellow-300 px-4 py-3 text-base font-medium transition-colors duration-300 relative group ${language === 'hi' ? 'hindi' : ''}`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 text-base font-medium transition-colors duration-300 relative group ${language === 'hi' ? 'hindi' : ''} ${
                      isActive(item.href) 
                        ? 'text-yellow-400' 
                        : 'text-yellow-400 hover:text-yellow-300'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-green transition-all duration-300 ${
                      isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )
              ))}
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="language-toggle flex items-center space-x-2"
              >
                <Globe size={16} />
                <span>{language === 'en' ? 'हिं' : 'EN'}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="language-toggle"
            >
              <Globe size={16} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-charcoal hover:text-brand-green p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-brand-charcoal hover:text-brand-green block px-3 py-2 text-base font-medium transition-colors duration-300 ${language === 'hi' ? 'hindi' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${language === 'hi' ? 'hindi' : ''} ${
                      isActive(item.href) 
                        ? 'text-brand-green bg-brand-cream' 
                        : 'text-brand-charcoal hover:text-brand-green'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
