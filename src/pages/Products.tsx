
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t, language } = useLanguage();

  const categories = [
    { id: 'all', name: t('products.allProducts') },
    { id: 'aata', name: t('products.aata') },
    { id: 'besan', name: t('products.besan') },
    { id: 'multigrain', name: t('products.multigrain') },
    { id: 'specialty', name: t('products.specialty') }
  ];

  const products = [
    {
      id: 1,
      title: t('product.wheatAata'),
      description: t('product.wheatAataDesc'),
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: [t('feature.natural'), t('feature.stoneGround'), t('feature.richFiber'), t('feature.noPreservatives')],
      category: 'aata',
      nutritionalInfo: {
        protein: "12g",
        carbs: "71g",
        fiber: "12g",
        calories: "340"
      },
      packagingOptions: ["1kg", "5kg", "10kg", "25kg"],
      usageTips: language === 'hi' ? "रोटी, पराठे और ब्रेड के लिए बिल्कुल सही। ठंडी, सूखी जगह पर स्टोर करें।" : "Perfect for rotis, parathas, and bread. Store in cool, dry place."
    },
    {
      id: 2,
      title: t('product.pureBesan'),
      description: t('product.pureBesanDesc'),
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      features: [t('feature.proteinRich'), t('feature.glutenFree'), t('feature.freshGround'), t('feature.traditionalProcess')],
      category: 'besan',
      nutritionalInfo: {
        protein: "22g",
        carbs: "57g",
        fiber: "11g",
        calories: "387"
      },
      packagingOptions: ["500g", "1kg", "5kg"],
      usageTips: language === 'hi' ? "पकौड़े, लड्डू और ढोकला के लिए आदर्श। प्रोटीन से भरपूर और प्राकृतिक रूप से ग्लूटेन मुक्त।" : "Ideal for pakoras, laddoos, and dhokla. Rich in protein and naturally gluten-free."
    },
    {
      id: 3,
      title: t('product.multigrainFlour'),
      description: t('product.multigrainFlourDesc'),
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      features: [t('feature.multiNutrient'), t('feature.balancedBlend'), t('feature.healthFocused'), t('feature.energyBoosting')],
      category: 'multigrain',
      nutritionalInfo: {
        protein: "14g",
        carbs: "68g",
        fiber: "15g",
        calories: "350"
      },
      packagingOptions: ["1kg", "5kg"],
      usageTips: language === 'hi' ? "स्वास्थ्य-सचेत परिवारों के लिए बिल्कुल सही। रोटी और बेकिंग के लिए बेहतरीन।" : "Perfect for health-conscious families. Great for rotis and baking."
    },
    {
      id: 4,
      title: t('product.organicWheat'),
      description: t('product.organicWheatDesc'),
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: [t('feature.certifiedOrganic'), t('feature.chemicalFree'), t('feature.premiumQuality'), t('feature.stoneGround')],
      category: 'specialty',
      nutritionalInfo: {
        protein: "13g",
        carbs: "70g",
        fiber: "13g",
        calories: "345"
      },
      packagingOptions: ["1kg", "5kg"],
      usageTips: language === 'hi' ? "स्वास्थ्य-सचेत परिवारों के लिए प्रीमियम जैविक विकल्प।" : "Premium organic option for health-conscious families."
    },
    {
      id: 5,
      title: t('product.ragiFlour'),
      description: t('product.ragiFlourDesc'),
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      features: [t('feature.highCalcium'), t('feature.ironRich'), t('feature.glutenFree'), t('feature.traditionalGrain')],
      category: 'specialty',
      nutritionalInfo: {
        protein: "7g",
        carbs: "72g",
        fiber: "4g",
        calories: "336"
      },
      packagingOptions: ["500g", "1kg"],
      usageTips: language === 'hi' ? "बच्चों और स्वास्थ्य-सचेत व्यक्तियों के लिए उत्कृष्ट। रोटी के लिए गेहूं के आटे के साथ मिलाएं।" : "Excellent for babies and health-conscious individuals. Mix with wheat flour for rotis."
    },
    {
      id: 6,
      title: t('product.bajraFlour'),
      description: t('product.bajraFlourDesc'),
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      features: [t('feature.highEnergy'), t('feature.glutenFree'), t('feature.richMinerals'), t('feature.traditional')],
      category: 'specialty',
      nutritionalInfo: {
        protein: "11g",
        carbs: "67g",
        fiber: "2g",
        calories: "361"
      },
      packagingOptions: ["500g", "1kg"],
      usageTips: language === 'hi' ? "सर्दियों में सेवन करना सबसे अच्छा। बेहतर बनावट के लिए गेहूं के आटे के साथ मिलाएं।" : "Best consumed in winter. Mix with wheat flour for better texture."
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brand-sand">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-brand-saffron to-brand-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-6xl font-playfair font-bold mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('products.title')}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto opacity-90 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${language === 'hi' ? 'hindi' : ''} ${
                  selectedCategory === category.id
                    ? 'bg-brand-saffron text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-brand-wheat'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 traditional-border overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute top-4 right-4 bg-brand-saffron text-white px-3 py-1 rounded-full text-sm font-semibold ${language === 'hi' ? 'hindi' : ''}`}>
                      {t('common.premium')}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-playfair font-semibold text-brand-charcoal mb-3 ${language === 'hi' ? 'hindi' : ''}`}>
                      {product.title}
                    </h3>
                    <p className={`text-gray-600 mb-4 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-center text-sm text-gray-700 ${language === 'hi' ? 'hindi' : ''}`}>
                          <div className="w-2 h-2 bg-brand-saffron rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Nutritional Info */}
                    <div className="mb-4 p-3 bg-brand-sand rounded-lg">
                      <h4 className={`font-semibold text-sm text-brand-charcoal mb-2 ${language === 'hi' ? 'hindi' : ''}`}>{t('products.nutritionalInfo')}</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>{language === 'hi' ? 'प्रोटीन' : 'Protein'}: {product.nutritionalInfo.protein}</div>
                        <div>{language === 'hi' ? 'कार्बोहाइड्रेट' : 'Carbs'}: {product.nutritionalInfo.carbs}</div>
                        <div>{language === 'hi' ? 'फाइबर' : 'Fiber'}: {product.nutritionalInfo.fiber}</div>
                        <div>{language === 'hi' ? 'कैलोरी' : 'Calories'}: {product.nutritionalInfo.calories}</div>
                      </div>
                    </div>

                    {/* Packaging Options */}
                    <div className="mb-4">
                      <h4 className={`font-semibold text-sm text-brand-charcoal mb-2 ${language === 'hi' ? 'hindi' : ''}`}>{t('products.availableSizes')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.packagingOptions.map((size, sizeIndex) => (
                          <span key={sizeIndex} className="px-2 py-1 bg-brand-wheat text-brand-charcoal rounded text-xs">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Usage Tips */}
                    <div className="mb-6">
                      <h4 className={`font-semibold text-sm text-brand-charcoal mb-2 ${language === 'hi' ? 'hindi' : ''}`}>{t('products.usageTips')}</h4>
                      <p className={`text-xs text-gray-600 ${language === 'hi' ? 'hindi' : ''}`}>{product.usageTips}</p>
                    </div>
                    
                    <button className={`w-full bg-brand-wheat hover:bg-brand-saffron text-brand-charcoal hover:text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${language === 'hi' ? 'hindi' : ''}`}>
                      {t('common.learnMore')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-brand-saffron to-brand-maroon text-white">
        <div className="container mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-playfair font-bold mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('products.ctaTitle')}
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto opacity-90 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('products.ctaDescription')}
          </p>
          <button className={`bg-white text-brand-saffron hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('products.contactExperts')}
          </button>
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

export default Products;
