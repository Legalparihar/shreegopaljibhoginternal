import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Play } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Media' },
    { id: 'production', name: 'Production Process' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'events', name: 'Events & Exhibitions' },
    { id: 'videos', name: 'Videos' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: "Traditional Stone Grinding",
      description: "Our traditional stone grinding process ensures the natural nutrients are preserved",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      category: 'production'
    },
    {
      id: 2,
      type: 'image',
      title: "Quality Grain Selection",
      description: "Hand-picked grains from trusted farmers across India",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      category: 'production'
    },
    {
      id: 3,
      type: 'image',
      title: "Premium Packaging",
      description: "Eco-friendly packaging that preserves freshness and quality",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      category: 'packaging'
    },
    {
      id: 4,
      type: 'video',
      title: "Production Process Tour",
      description: "Take a virtual tour of our production facility and see how we make our products",
      thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      category: 'videos'
    },
    {
      id: 5,
      type: 'image',
      title: "Food Exhibition 2024",
      description: "Our participation in the National Food Exhibition",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      category: 'events'
    },
    {
      id: 6,
      type: 'image',
      title: "Final Product Range",
      description: "Our complete range of premium flour products",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      category: 'packaging'
    },
    {
      id: 7,
      type: 'video',
      title: "Customer Testimonials",
      description: "Hear what our customers have to say about our products",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      category: 'videos'
    },
    {
      id: 8,
      type: 'image',
      title: "Farmer Partnership Program",
      description: "Direct partnerships with local farmers for quality assurance",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      category: 'events'
    },
    {
      id: 9,
      type: 'image',
      title: "Quality Testing Lab",
      description: "Our state-of-the-art quality testing facility",
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
      <section className="pt-20 pb-12 bg-gradient-to-r from-brand-saffron to-brand-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore our journey through images and videos showcasing our commitment to quality
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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
                    
                    <div className="absolute top-4 left-4 bg-brand-saffron text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {item.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-brand-charcoal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
                <h3 className="text-2xl font-playfair font-bold text-brand-charcoal mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedImage.description}
                </p>
                
                {selectedImage.type === 'video' && (
                  <button className="mt-4 bg-brand-saffron text-white px-6 py-3 rounded-lg hover:bg-brand-maroon transition-colors">
                    Watch Video
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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
            Featured Videos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Watch our production process and hear from satisfied customers
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
                <h3 className="text-white text-xl font-playfair font-semibold">
                  From Grain to Flour: Our Process
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
                <h3 className="text-white text-xl font-playfair font-semibold">
                  Customer Stories & Reviews
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
              <h3 className="text-xl font-playfair font-bold text-brand-saffron mb-4">
                Shree Gopal Ji Bhog
              </h3>
              <p className="text-gray-300 mb-4">
                Bringing you the finest traditional flour products with modern quality standards.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-brand-saffron transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-brand-saffron transition-colors">About Us</a></li>
                <li><a href="/products" className="hover:text-brand-saffron transition-colors">Products</a></li>
                <li><a href="/recipes" className="hover:text-brand-saffron transition-colors">Recipes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-brand-saffron transition-colors">Wheat Aata</a></li>
                <li><a href="#" className="hover:text-brand-saffron transition-colors">Besan</a></li>
                <li><a href="#" className="hover:text-brand-saffron transition-colors">Multigrain Flour</a></li>
                <li><a href="#" className="hover:text-brand-saffron transition-colors">Specialty Flours</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +91 12345 67890</p>
                <p>✉️ info@shreegopalji.com</p>
                <p>📍 Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shree Gopal Ji Bhog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
