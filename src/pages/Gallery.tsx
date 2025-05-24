
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const { t, language } = useLanguage();

  const categories = [
    { id: 'all', name: t('gallery.allMedia') },
    { id: 'production', name: t('gallery.production') },
    { id: 'packaging', name: t('gallery.packaging') },
    { id: 'events', name: t('gallery.events') },
    { id: 'videos', name: t('gallery.videos') }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: language === 'hi' ? "पारंपरिक पत्थर की पिसाई" : "Traditional Stone Grinding",
      description: language === 'hi' ? "हमारी पारंपरिक पत्थर की पिसाई प्रक्रिया सुनिश्चित करती है कि प्राकृतिक पोषक तत्व संरक्षित रहें" : "Our traditional stone grinding process ensures the natural nutrients are preserved",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      category: 'production'
    },
    {
      id: 2,
      type: 'image',
      title: language === 'hi' ? "गुणवत्तापूर्ण अनाज चयन" : "Quality Grain Selection",
      description: language === 'hi' ? "भारत भर के विश्वसनीय किसानों से हाथ से चुने गए अनाज" : "Hand-picked grains from trusted farmers across India",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      category: 'production'
    },
    {
      id: 3,
      type: 'image',
      title: language === 'hi' ? "प्रीमियम पैकेजिंग" : "Premium Packaging",
      description: language === 'hi' ? "पर्यावरण-अनुकूल पैकेजिंग जो ताजगी और गुणवत्ता को संरक्षित करती है" : "Eco-friendly packaging that preserves freshness and quality",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      category: 'packaging'
    },
    {
      id: 4,
      type: 'video',
      title: language === 'hi' ? "उत्पादन प्रक्रिया टूर" : "Production Process Tour",
      description: language === 'hi' ? "हमारी उत्पादन सुविधा का वर्चुअल टूर लें और देखें कि हम अपने उत्पाद कैसे बनाते हैं" : "Take a virtual tour of our production facility and see how we make our products",
      thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      category: 'videos'
    },
    {
      id: 5,
      type: 'image',
      title: language === 'hi' ? "खाद्य प्रदर्शनी 2024" : "Food Exhibition 2024",
      description: language === 'hi' ? "राष्ट्रीय खाद्य प्रदर्शनी में हमारी भागीदारी" : "Our participation in the National Food Exhibition",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      category: 'events'
    },
    {
      id: 6,
      type: 'image',
      title: language === 'hi' ? "अंतिम उत्पाद श्रृंखला" : "Final Product Range",
      description: language === 'hi' ? "हमारे प्रीमियम आटा उत्पादों की पूरी श्रृंखला" : "Our complete range of premium flour products",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      category: 'packaging'
    },
    {
      id: 7,
      type: 'video',
      title: language === 'hi' ? "ग्राहक प्रशंसापत्र" : "Customer Testimonials",
      description: language === 'hi' ? "हमारे ग्राहक हमारे उत्पादों के बारे में क्या कहते हैं, सुनें" : "Hear what our customers have to say about our products",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      category: 'videos'
    },
    {
      id: 8,
      type: 'image',
      title: language === 'hi' ? "किसान साझेदारी कार्यक्रम" : "Farmer Partnership Program",
      description: language === 'hi' ? "गुणवत्ता आश्वासन के लिए स्थानीय किसानों के साथ प्रत्यक्ष साझेदारी" : "Direct partnerships with local farmers for quality assurance",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      category: 'events'
    },
    {
      id: 9,
      type: 'image',
      title: language === 'hi' ? "गुणवत्ता परीक्षण प्रयोगशाला" : "Quality Testing Lab",
      description: language === 'hi' ? "हमारी अत्याधुनिक गुणवत्ता परीक्षण सुविधा" : "Our state-of-the-art quality testing facility",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      category: 'production'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brand-sand">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNDEsMTk2LDE1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('gallery.title')}
            </h1>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className={`text-lg md:text-xl text-amber-800/90 max-w-2xl mx-auto leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
              {t('gallery.subtitle')}
            </p>
          </div>
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

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 traditional-border overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.type === 'video' ? item.thumbnail : item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-brand-saffron group-hover:text-white transition-all duration-300">
                          <Play className="w-8 h-8" />
                        </div>
                      </div>
                    )}
                    
                    <div className={`absolute top-4 left-4 bg-brand-saffron text-white px-3 py-1 rounded-full text-sm font-semibold capitalize ${language === 'hi' ? 'hindi' : ''}`}>
                      {item.type === 'video' ? (language === 'hi' ? 'वीडियो' : 'Video') : (language === 'hi' ? 'तस्वीर' : 'Image')}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-playfair font-semibold text-brand-charcoal mb-3 ${language === 'hi' ? 'hindi' : ''}`}>
                      {item.title}
                    </h3>
                    <p className={`text-gray-600 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
            >
              ✕
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.type === 'video' ? selectedImage.thumbnail : selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-6">
                <h3 className={`text-2xl font-playfair font-bold text-brand-charcoal mb-3 ${language === 'hi' ? 'hindi' : ''}`}>
                  {selectedImage.title}
                </h3>
                <p className={`text-gray-700 leading-relaxed ${language === 'hi' ? 'hindi' : ''}`}>
                  {selectedImage.description}
                </p>
                
                {selectedImage.type === 'video' && (
                  <button className={`mt-4 bg-brand-saffron text-white px-6 py-3 rounded-lg hover:bg-brand-maroon transition-colors ${language === 'hi' ? 'hindi' : ''}`}>
                    {language === 'hi' ? 'वीडियो देखें' : 'Watch Video'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Showcase */}
      <section className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('gallery.featuredVideos')}
          </h2>
          <p className={`text-lg text-gray-700 max-w-2xl mx-auto mb-12 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('gallery.featuredDescription')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=300&fit=crop"
                alt="Production process video"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-6 group-hover:bg-brand-saffron group-hover:text-white transition-all duration-300">
                  <Play className="w-12 h-12" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className={`text-white text-xl font-playfair font-semibold ${language === 'hi' ? 'hindi' : ''}`}>
                  {t('gallery.productionVideo')}
                </h3>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=300&fit=crop"
                alt="Customer testimonials video"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-6 group-hover:bg-brand-saffron group-hover:text-white transition-all duration-300">
                  <Play className="w-12 h-12" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className={`text-white text-xl font-playfair font-semibold ${language === 'hi' ? 'hindi' : ''}`}>
                  {t('gallery.testimonialsVideo')}
                </h3>
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

export default Gallery;
