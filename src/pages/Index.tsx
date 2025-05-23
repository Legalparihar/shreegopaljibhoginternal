
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const products = [
    {
      title: "Premium Wheat Aata",
      description: "Stone-ground whole wheat flour made from carefully selected grains, perfect for making soft rotis and nutritious bread.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["100% Natural", "Stone Ground", "Rich in Fiber", "No Preservatives"]
    },
    {
      title: "Pure Besan",
      description: "Premium gram flour made from high-quality chickpeas, ideal for traditional Indian sweets and savory dishes.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      features: ["Protein Rich", "Gluten Free", "Fresh Ground", "Traditional Process"]
    },
    {
      title: "Multigrain Flour",
      description: "Nutritious blend of wheat, millet, and other grains for healthier meals and enhanced nutritional value.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      features: ["Multi-Nutrient", "Balanced Blend", "Health Focused", "Energy Boosting"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      review: "The quality of Shree Gopal Ji Bhog aata is exceptional. My rotis are softer and more nutritious than ever before!"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      review: "Best besan I've used for making pakoras. The taste and texture are perfect for authentic Indian cooking."
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      review: "Traditional quality with modern packaging. My family loves the purity and freshness of these products."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-sand">
      <Navigation />
      
      <HeroSection />

      {/* Brand Promise Section */}
      <section className="section-padding bg-white grain-overlay">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
            Our Promise of Purity
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            At Shree Gopal Ji Bhog, we believe in preserving the traditional methods of flour making while ensuring the highest quality standards. Every grain is hand-picked, and every batch is made with care and devotion.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-brand-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Pure Ingredients</h3>
              <p className="text-gray-600">Hand-selected grains from trusted farmers</p>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-200">
              <div className="w-16 h-16 bg-brand-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Traditional Process</h3>
              <p className="text-gray-600">Stone-ground using time-tested methods</p>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-400">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Health First</h3>
              <p className="text-gray-600">No chemicals, no preservatives, just pure nutrition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-brand-sand">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
              Our Premium Products
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our range of carefully crafted flour products, made with traditional methods and modern quality standards.
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
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
                Traditional Recipes, Modern Kitchen
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Discover authentic Indian recipes that bring out the best flavors using our premium flour products. From soft rotis to crispy pakoras, create memorable meals for your family.
              </p>
              <button className="btn-primary mb-6">
                Explore Recipes
              </button>
              <div className="text-sm text-gray-600">
                ✨ Over 50+ traditional recipes available
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
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Shree Gopal Ji Bhog for their daily flour needs.
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
      <section className="section-padding bg-gradient-to-r from-brand-saffron to-brand-maroon text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Experience the Purity Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the Shree Gopal Ji Bhog family and taste the difference that pure, traditional flour makes in your kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-saffron hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Find a Distributor
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-brand-maroon font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
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
                <li><a href="#home" className="hover:text-brand-saffron transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-saffron transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-brand-saffron transition-colors">Products</a></li>
                <li><a href="#contact" className="hover:text-brand-saffron transition-colors">Contact</a></li>
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

export default Index;
