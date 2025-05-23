
import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-sand">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-brand-saffron to-brand-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            About Shree Gopal Ji Bhog
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            A legacy of purity, tradition, and commitment to quality flour products
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a vision to preserve the authentic taste of traditional Indian cooking, Shree Gopal Ji Bhog began as a humble endeavor to bring pure, stone-ground flour to families across India.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey started decades ago when our founders recognized the need for preserving traditional milling methods while ensuring modern quality standards. We believe that every grain tells a story, and every product carries the legacy of our commitment to excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Shree Gopal Ji Bhog stands as a testament to the perfect blend of tradition and innovation, bringing you flour products that not only nourish your body but also connect you to the rich heritage of Indian cuisine.
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
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg traditional-border animate-slide-up">
              <div className="w-16 h-16 bg-brand-saffron rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-brand-charcoal mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To provide pure, nutritious, and authentic flour products that preserve the traditional flavors of Indian cuisine while meeting modern quality standards. We are committed to supporting healthy lifestyles and bringing families together through wholesome food.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg traditional-border animate-slide-up animation-delay-200">
              <div className="w-16 h-16 bg-brand-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-brand-charcoal mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To become the most trusted brand for traditional flour products in India, setting the benchmark for quality and purity. We envision a future where every kitchen enjoys the authentic taste and nutritional benefits of our carefully crafted products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
              Quality Assurance
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every step of our process is designed to ensure the highest quality and purity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-brand-wheat rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-brand-maroon text-3xl">🌾</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Sourcing Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We carefully select grains from trusted farmers who follow sustainable farming practices. Each batch is tested for quality and purity before processing.
              </p>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-200">
              <div className="w-20 h-20 bg-brand-wheat rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-brand-maroon text-3xl">⚙️</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Traditional Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Our stone-grinding process preserves the natural nutrients and authentic flavors. We maintain optimal temperatures to ensure the grain's integrity is never compromised.
              </p>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-400">
              <div className="w-20 h-20 bg-brand-wheat rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-brand-maroon text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Quality Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product undergoes rigorous quality checks including nutritional analysis, purity testing, and packaging integrity to ensure you receive only the best.
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
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
                Community Engagement
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Shree Gopal Ji Bhog, we believe in giving back to the communities that support us. Our initiatives focus on supporting local farmers, promoting sustainable agriculture, and contributing to nutritional awareness.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-saffron rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal mb-1">Farmer Support Programs</h4>
                    <p className="text-gray-600">Direct partnerships with local farmers ensuring fair prices and sustainable farming practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-saffron rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal mb-1">Nutritional Education</h4>
                    <p className="text-gray-600">Community workshops on healthy eating and the benefits of traditional grains.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-saffron rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal mb-1">Environmental Initiatives</h4>
                    <p className="text-gray-600">Promoting eco-friendly packaging and supporting organic farming methods.</p>
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

export default About;
