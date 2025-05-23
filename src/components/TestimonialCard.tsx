
interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar?: string;
}

const TestimonialCard = ({ name, location, rating, review, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 traditional-border">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-brand-wheat rounded-full flex items-center justify-center mr-4">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-brand-maroon font-semibold text-lg">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-brand-charcoal">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? 'text-brand-saffron' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 italic leading-relaxed">
        "{review}"
      </p>
    </div>
  );
};

export default TestimonialCard;
