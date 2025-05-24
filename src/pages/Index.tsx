
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t, language } = useLanguage();

  const products = [
    {
      title: t('product.wheatAata'),
      description: t('product.wheatAataDesc'),
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: [t('feature.natural'), t('feature.stoneGround'), t('feature.richFiber'), t('feature.noPreservatives')]
    },
    {
      title: t('product.pureBesan'),
      description: t('product.pureBesanDesc'),
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      features: [t('feature.proteinRich'), t('feature.glutenFree'), t('feature.freshGround'), t('feature.traditionalProcess')]
    },
    {
      title: t('product.multigrainFlour'),
      description: t('product.multigrainFlourDesc'),
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      features: [t('feature.multiNutrient'), t('feature.balancedBlend'), t('feature.healthFocused'), t('feature.energyBoosting')]
    }
  ];

  const testimonials = [
    {
      name: "प्रिया शर्मा",
      location: "मुंबई, महाराष्ट्र",
      rating: 5,
      review: language === 'hi' ? "श्री गोपाल जी भोग आटे की गुणवत्ता असाधारण है। मेरी रोटियां पहले से कहीं अधिक मुलायम और पौष्टिक हैं!" : "The quality of Shree Gopal Ji Bhog aata is exceptional. My rotis are softer and more nutritious than ever before!"
    },
    {
      name: "राजेश कुमार",
      location: "दिल्ली, एनसीआर",
      rating: 5,
      review: language === 'hi' ? "पकौड़े बनाने के लिए मैंने इस्तेमाल किया है यह सबसे अच्छा बेसन है। प्रामाणिक भारतीय खाना पकाने के लिए स्वाद और बनावट बिल्कुल सही है।" : "Best besan I've used for making pakoras. The taste and texture are perfect for authentic Indian cooking."
    },
    {
      name: "मीरा पटेल",
      location: "अहमदाबाद, गुजरात",
      rating: 5,
      review: language === 'hi' ? "आधुनिक पैकेजिंग के साथ पारंपरिक गुणवत्ता। मेरे परिवार को इन उत्पादों की शुद्धता और ताजगी पसंद है।" : "Traditional quality with modern packaging. My family loves the purity and freshness of these products."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-sand">
      <Navigation />
      
      <HeroSection />

      {/* Brand Promise Section */}
      <section className="section-padding bg-white grain-overlay">
        <div className="container mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('home.promiseTitle')}
          </h2>
          <p className={`text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('home.promiseDescription')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-brand-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌾</span>
              </div>
              <h3 className={`text-xl font-playfair font-semibold mb-2 ${language === 'hi' ? 'hindi' : ''}`}>{t('home.pureIngredients')}</h3>
              <p className={`text-gray-600 ${language === 'hi' ? 'hindi' : ''}`}>{t('home.pureIngredientsDesc')}</p>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-200">
              <div className="w-16 h-16 bg-brand-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className={`text-xl font-playfair font-semibold mb-2 ${language === 'hi' ? 'hindi' : ''}`}>{t('home.traditionalProcess')}</h3>
              <p className={`text-gray-600 ${language === 'hi' ? 'hindi' : ''}`}>{t('home.traditionalProcessDesc')}</p>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-400">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💚</span>
              </div>
              <h3 className={`text-xl font-playfair font-semibold mb-2 ${language === 'hi' ? 'hindi' : ''}`}>{t('home.healthFirst')}</h3>
              <p className={`text-gray-600 ${language === 'hi' ? 'hindi' : ''}`}>{t('home.healthFirstDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-brand-sand">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('home.productsTitle')}
            </h2>
            <p className={`text-lg text-gray-700 max-w-2xl mx-auto ${language === 'hi' ? 'hindi' : ''}`}>
              {t('home.productsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Teaser */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
                {t('home.recipeTitle')}
              </h2>
              <p className={`text-lg text-gray-700 mb-6 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                {t('home.recipeDescription')}
              </p>
              <button className={`btn-primary mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
                {t('home.exploreRecipes')}
              </button>
              <div className={`text-sm text-gray-600 ${language === 'hi' ? 'hindi' : ''}`}>
                {language === 'hi' ? '✨ 50+ से अधिक पारंपरिक व्यंजन उपलब्ध' : '✨ Over 50+ traditional recipes available'}
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-300">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop"
                alt="Traditional cooking"
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-brand-sand">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('home.testimonialsTitle')}
            </h2>
            <p className={`text-lg text-gray-700 max-w-2xl mx-auto ${language === 'hi' ? 'hindi' : ''}`}>
              {t('home.testimonialsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNDEsMTk2LDE1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className={`text-3xl md:text-4xl font-playfair font-bold mb-6 text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('home.ctaTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto text-amber-800 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
            {t('home.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('common.findDistributor')}
            </button>
            <button className={`border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-3 rounded-full shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-0.5 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('common.contactUs')}
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-2xl -mb-32 -ml-32"></div>
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

export default Index;
