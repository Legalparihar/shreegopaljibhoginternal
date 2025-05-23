import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'aata', name: 'Aata' },
    { id: 'besan', name: 'Besan' },
    { id: 'multigrain', name: 'Multigrain Flours' },
    { id: 'specialty', name: 'Specialty Flours' }
  ];

  const products = [
    {
      id: 1,
      title: "Premium Wheat Aata",
      description: "Stone-ground whole wheat flour made from carefully selected grains, perfect for making soft rotis and nutritious bread.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["100% Natural", "Stone Ground", "Rich in Fiber", "No Preservatives"],
      category: 'aata',
      nutritionalInfo: {
        protein: "12g",
        carbs: "71g",
        fiber: "12g",
        calories: "340"
      },
      packagingOptions: ["1kg", "5kg", "10kg", "25kg"],
      usageTips: "Perfect for rotis, parathas, and bread. Store in cool, dry place."
    },
    {
      id: 2,
      title: "Pure Besan",
      description: "Premium gram flour made from high-quality chickpeas, ideal for traditional Indian sweets and savory dishes.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      features: ["Protein Rich", "Gluten Free", "Fresh Ground", "Traditional Process"],
      category: 'besan',
      nutritionalInfo: {
        protein: "22g",
        carbs: "57g",
        fiber: "11g",
        calories: "387"
      },
      packagingOptions: ["500g", "1kg", "5kg"],
      usageTips: "Ideal for pakoras, laddoos, and dhokla. Rich in protein and naturally gluten-free."
    },
    {
      id: 3,
      title: "Multigrain Flour",
      description: "Nutritious blend of wheat, millet, and other grains for healthier meals and enhanced nutritional value.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      features: ["Multi-Nutrient", "Balanced Blend", "Health Focused", "Energy Boosting"],
      category: 'multigrain',
      nutritionalInfo: {
        protein: "14g",
        carbs: "68g",
        fiber: "15g",
        calories: "350"
      },
      packagingOptions: ["1kg", "5kg"],
      usageTips: "Perfect for health-conscious families. Great for rotis and baking."
    },
    {
      id: 4,
      title: "Organic Wheat Aata",
      description: "100% organic whole wheat flour sourced from certified organic farms, ensuring pure and chemical-free nutrition.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["Certified Organic", "Chemical Free", "Premium Quality", "Stone Ground"],
      category: 'specialty',
      nutritionalInfo: {
        protein: "13g",
        carbs: "70g",
        fiber: "13g",
        calories: "345"
      },
      packagingOptions: ["1kg", "5kg"],
      usageTips: "Premium organic option for health-conscious families."
    },
    {
      id: 5,
      title: "Ragi Flour",
      description: "Nutritious finger millet flour rich in calcium and iron, perfect for healthy rotis and porridge.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      features: ["High Calcium", "Iron Rich", "Gluten Free", "Traditional Grain"],
      category: 'specialty',
      nutritionalInfo: {
        protein: "7g",
        carbs: "72g",
        fiber: "4g",
        calories: "336"
      },
      packagingOptions: ["500g", "1kg"],
      usageTips: "Excellent for babies and health-conscious individuals. Mix with wheat flour for rotis."
    },
    {
      id: 6,
      title: "Bajra Flour",
      description: "Pearl millet flour with high nutritional value, perfect for traditional bajra rotis and healthy meals.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      features: ["High Energy", "Gluten Free", "Rich in Minerals", "Traditional"],
      category: 'specialty',
      nutritionalInfo: {
        protein: "11g",
        carbs: "67g",
        fiber: "2g",
        calories: "361"
      },
      packagingOptions: ["500g", "1kg"],
      usageTips: "Best consumed in winter. Mix with wheat flour for better texture."
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
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover our range of premium flour products crafted with tradition and care
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
                    <div className="absolute top-4 right-4 bg-brand-saffron text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-brand-charcoal mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-brand-saffron rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Nutritional Info */}
                    <div className="mb-4 p-3 bg-brand-sand rounded-lg">
                      <h4 className="font-semibold text-sm text-brand-charcoal mb-2">Nutritional Info (per 100g)</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Protein: {product.nutritionalInfo.protein}</div>
                        <div>Carbs: {product.nutritionalInfo.carbs}</div>
                        <div>Fiber: {product.nutritionalInfo.fiber}</div>
                        <div>Calories: {product.nutritionalInfo.calories}</div>
                      </div>
                    </div>

                    {/* Packaging Options */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-brand-charcoal mb-2">Available Sizes</h4>
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
                      <h4 className="font-semibold text-sm text-brand-charcoal mb-2">Usage Tips</h4>
                      <p className="text-xs text-gray-600">{product.usageTips}</p>
                    </div>
                    
                    <button className="w-full bg-brand-wheat hover:bg-brand-saffron text-brand-charcoal hover:text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                      Learn More
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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our experts are here to help you find the perfect flour for your needs
          </p>
          <button className="bg-white text-brand-saffron hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Our Experts
          </button>
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

export default Products;
