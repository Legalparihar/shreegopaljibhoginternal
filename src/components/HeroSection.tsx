
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language, t } = useLanguage();

  const slides = [
    {
      title: t('hero.subtitle1'),
      subtitle: t('hero.subtitle2'),
      image: "/hero1.png"
    },
    {
      title: t('hero.subtitle3'),
      subtitle: t('hero.subtitle4'),
      image: "/hero2.png"
    },
    {
      title: t('hero.subtitle1'),
      subtitle: t('hero.subtitle2'),
      image: "/hero3.png"
    },
    {
      title: t('hero.subtitle3'),
      subtitle: t('hero.subtitle4'),
      image: "/hero4.png"
    },
    {
      title: t('hero.subtitle1'),
      subtitle: t('hero.subtitle4'),
      image: "/hero5.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Hero Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full pt-16 pb-24">
        <div className="text-center text-white animate-fade-in">
          <div className="mb-4 md:mb-6 flex justify-center">
            <img 
              src="/hindilogo.png" 
              alt="Shree Gopal Ji Bhog" 
              className="h-48 md:h-72 lg:h-[28rem] w-auto object-contain transition-all duration-300 hover:scale-105"
            />
          </div>
          
          <div className="transition-all duration-500 ease-in-out">
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-light mb-4 ${language === 'hi' ? 'hindi' : ''}`}>
              {slides[currentSlide].title}
            </h2>
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 ${language === 'hi' ? 'hindi' : ''}`}>
              {slides[currentSlide].subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`btn-primary ${language === 'hi' ? 'hindi' : ''}`}>
              {t('hero.exploreProducts')}
            </button>
            <button className={`btn-secondary ${language === 'hi' ? 'hindi' : ''}`}>
              {t('hero.ourStory')}
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-brand-yellow/20 rounded-full animate-float hidden lg:block" />
          <div className="absolute bottom-32 right-16 w-12 h-12 bg-brand-green/30 rounded-full animate-float animation-delay-1000 hidden lg:block" />
          <div className="absolute top-1/2 right-8 w-8 h-8 bg-brand-lightGreen/25 rounded-full animate-float animation-delay-2000 hidden lg:block" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-brand-yellow scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 text-white/70 hidden lg:block">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-white/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
