
interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard = ({ title, description, image, features }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-brand-saffron text-white px-3 py-1 rounded-full text-sm font-semibold">
          Premium
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-brand-charcoal mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-brand-saffron rounded-full mr-3" />
              {feature}
            </div>
          ))}
        </div>
        
        <button className="w-full bg-brand-wheat hover:bg-brand-saffron text-brand-charcoal hover:text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
