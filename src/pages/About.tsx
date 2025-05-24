
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-sand">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-brand-saffron to-brand-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-6xl font-playfair font-bold mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('about.title')}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto opacity-90 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.ourStory')}
              </h2>
              <p className={`text-lg text-gray-700 mb-6 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.storyPara1')}
              </p>
              <p className={`text-lg text-gray-700 mb-6 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.storyPara2')}
              </p>
              <p className={`text-lg text-gray-700 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.storyPara3')}
              </p>
            </div>
            <div className="animate-slide-up animation-delay-300">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                alt="Our heritage"
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-sand">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('about.mission')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg traditional-border animate-slide-up">
              <div className="w-16 h-16 bg-brand-saffron rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className={`text-2xl font-playfair font-semibold text-brand-charcoal mb-4 text-center ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.missionTitle')}
              </h3>
              <p className={`text-gray-700 leading-relaxed text-center ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.missionText')}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg traditional-border animate-slide-up animation-delay-200">
              <div className="w-16 h-16 bg-brand-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className={`text-2xl font-playfair font-semibold text-brand-charcoal mb-4 text-center ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.visionTitle')}
              </h3>
              <p className={`text-gray-700 leading-relaxed text-center ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('about.quality')}
            </h2>
            <p className={`text-lg text-gray-700 max-w-3xl mx-auto ${language === 'hi' ? 'hindi' : ''}`}>
              {t('about.qualityDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-brand-wheat rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-brand-maroon text-3xl">🌾</span>
              </div>
              <h3 className={`text-xl font-playfair font-semibold mb-4 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.sourcingTitle')}</h3>
              <p className={`text-gray-600 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.sourcingText')}
              </p>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-200">
              <div className="w-20 h-20 bg-brand-wheat rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-brand-maroon text-3xl">⚙️</span>
              </div>
              <h3 className={`text-xl font-playfair font-semibold mb-4 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.processingTitle')}</h3>
              <p className={`text-gray-600 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.processingText')}
              </p>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-400">
              <div className="w-20 h-20 bg-brand-wheat rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-brand-maroon text-3xl">🔬</span>
              </div>
              <h3 className={`text-xl font-playfair font-semibold mb-4 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.testingTitle')}</h3>
              <p className={`text-gray-600 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.testingText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="section-padding bg-brand-sand">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up animation-delay-300">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop"
                alt="Community engagement"
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.community')}
              </h2>
              <p className={`text-lg text-gray-700 mb-6 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                {t('about.communityDescription')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-saffron rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-brand-charcoal mb-1 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.farmerSupport')}</h4>
                    <p className={`text-gray-600 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.farmerSupportText')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-saffron rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-brand-charcoal mb-1 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.nutritionalEducation')}</h4>
                    <p className={`text-gray-600 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.nutritionalEducationText')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-saffron rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-brand-charcoal mb-1 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.environmentalInitiatives')}</h4>
                    <p className={`text-gray-600 ${language === 'hi' ? 'hindi' : ''}`}>{t('about.environmentalInitiativesText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className={`text-xl font-playfair font-bold text-brand-saffron mb-4 ${language === 'hi' ? 'hindi' : ''}`}>
                {language === 'hi' ? 'श्री गोपाल जी भोग' : 'Shree Gopal Ji Bhog'}
              </h3>
              <p className={`text-gray-300 mb-4 ${language === 'hi' ? 'hindi' : ''}`}>
                {language === 'hi' ? 'आधुनिक गुणवत्ता मानकों के साथ बेहतरीन पारंपरिक आटा उत्पाद लाना।' : 'Bringing you the finest traditional flour products with modern quality standards.'}
              </p>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 ${language === 'hi' ? 'hindi' : ''}`}>{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className={`hover:text-brand-saffron transition-colors ${language === 'hi' ? 'hindi' : ''}`}>{t('nav.home')}</a></li>
                <li><a href="/about" className={`hover:text-brand-saffron transition-colors ${language === 'hi' ? 'hindi' : ''}`}>{t('nav.about')}</a></li>
                <li><a href="/products" className={`hover:text-brand-saffron transition-colors ${language === 'hi' ? 'hindi' : ''}`}>{t('nav.products')}</a></li>
                <li><a href="/recipes" className={`hover:text-brand-saffron transition-colors ${language === 'hi' ? 'hindi' : ''}`}>{t('nav.recipes')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 ${language === 'hi' ? 'hindi' : ''}`}>{t('footer.products')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className={`hover:text-brand-saffron transition-colors ${language === 'hi' ? 'hindi' : ''}`}>{t('products.aata')}</a></li>
                <li><a href="#" className={`hover:text-brand-saffron transition-colors ${language === 'hi' ? 'hindi' : ''}`}>{t('products.besan')}</a></li>
                <li><a href="#" className={`hover:text-brand-saffron transition-colors ${language === 'hi' ? 'hindi' : ''}`}>{t('products.multigrain')}</a></li>
                <li><a href="#" className={`hover:text-brand-saffron transition-colors ${language === 'hi' ? 'hindi' : ''}`}>{t('products.specialty')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 ${language === 'hi' ? 'hindi' : ''}`}>{t('footer.contactInfo')}</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +91 12345 67890</p>
                <p>✉️ info@shreegopalji.com</p>
                <p>📍 {language === 'hi' ? 'मुंबई, महाराष्ट्र' : 'Mumbai, Maharashtra'}</p>
              </div>
            </div>
          </div>
          
          <div className={`border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 ${language === 'hi' ? 'hindi' : ''}`}>
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
