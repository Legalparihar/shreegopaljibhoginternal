import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

const Recipes = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filters = [
    { id: 'all', name: 'All Recipes' },
    { id: 'aata', name: 'Wheat Aata' },
    { id: 'besan', name: 'Besan' },
    { id: 'multigrain', name: 'Multigrain' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'main-course', name: 'Main Course' },
    { id: 'sweets', name: 'Sweets' }
  ];

  const recipes = [
    {
      id: 1,
      title: "Soft Wheat Rotis",
      description: "Perfect soft rotis made with our premium wheat aata",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      prepTime: "15 mins",
      difficulty: "Easy",
      serves: "4 people",
      rating: 4.8,
      category: 'aata',
      mealType: 'main-course',
      ingredients: [
        "2 cups Shree Gopal Ji Bhog Wheat Aata",
        "3/4 cup warm water",
        "1/2 tsp salt",
        "1 tsp oil (optional)"
      ],
      instructions: [
        "Mix wheat aata and salt in a bowl",
        "Gradually add warm water while mixing",
        "Knead into a soft, smooth dough",
        "Cover and rest for 15 minutes",
        "Divide into small portions",
        "Roll each portion into thin circles",
        "Cook on hot tawa until brown spots appear",
        "Serve hot with ghee"
      ]
    },
    {
      id: 2,
      title: "Crispy Besan Pakoras",
      description: "Golden crispy pakoras made with pure besan flour",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      prepTime: "20 mins",
      difficulty: "Medium",
      serves: "6 people",
      rating: 4.9,
      category: 'besan',
      mealType: 'snacks',
      ingredients: [
        "1 cup Shree Gopal Ji Bhog Besan",
        "1 onion, thinly sliced",
        "2 green chilies, chopped",
        "1 tsp ginger-garlic paste",
        "1/2 tsp turmeric powder",
        "1 tsp red chili powder",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      instructions: [
        "Mix besan with all dry spices",
        "Add ginger-garlic paste and vegetables",
        "Gradually add water to make thick batter",
        "Heat oil in deep pan",
        "Drop spoonfuls of batter into hot oil",
        "Fry until golden brown and crispy",
        "Drain on paper towels",
        "Serve hot with chutney"
      ]
    },
    {
      id: 3,
      title: "Healthy Multigrain Rotis",
      description: "Nutritious rotis packed with the goodness of multiple grains",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      prepTime: "25 mins",
      difficulty: "Easy",
      serves: "4 people",
      rating: 4.7,
      category: 'multigrain',
      mealType: 'main-course',
      ingredients: [
        "2 cups Shree Gopal Ji Bhog Multigrain Flour",
        "3/4 cup warm water",
        "1/2 tsp salt",
        "1 tsp ghee",
        "Fresh herbs (optional)"
      ],
      instructions: [
        "Combine multigrain flour and salt",
        "Add ghee and mix well",
        "Gradually add warm water",
        "Knead into smooth dough",
        "Rest for 20 minutes",
        "Roll into circles",
        "Cook on tawa until cooked through",
        "Serve with vegetables or dal"
      ]
    },
    {
      id: 4,
      title: "Besan Ladoo",
      description: "Traditional sweet ladoos made with roasted besan",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      prepTime: "30 mins",
      difficulty: "Medium",
      serves: "8 people",
      rating: 4.9,
      category: 'besan',
      mealType: 'sweets',
      ingredients: [
        "2 cups Shree Gopal Ji Bhog Besan",
        "1 cup powdered sugar",
        "3/4 cup ghee",
        "1/4 cup chopped almonds",
        "1/2 tsp cardamom powder"
      ],
      instructions: [
        "Roast besan in ghee until fragrant",
        "Cool completely",
        "Add powdered sugar and cardamom",
        "Mix well and add nuts",
        "Shape into small balls",
        "Let them set for 30 minutes",
        "Store in airtight container",
        "Enjoy as dessert"
      ]
    }
  ];

  const filteredRecipes = selectedFilter === 'all' 
    ? recipes 
    : recipes.filter(recipe => 
        recipe.category === selectedFilter || recipe.mealType === selectedFilter
      );

  if (selectedRecipe) {
    const recipe = recipes.find(r => r.id === selectedRecipe);
    return (
      <div className="min-h-screen bg-brand-sand">
        <Navigation />
        
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="mb-6 bg-brand-saffron text-white px-4 py-2 rounded-lg hover:bg-brand-maroon transition-colors"
            >
              ← Back to Recipes
            </button>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div>
                <h1 className="text-4xl font-playfair font-bold text-gradient mb-4">
                  {recipe.title}
                </h1>
                <p className="text-lg text-gray-700 mb-6">{recipe.description}</p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-brand-saffron mr-2" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-brand-saffron mr-2" />
                    <span>{recipe.serves}</span>
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="w-5 h-5 text-brand-saffron mr-2" />
                    <span>{recipe.difficulty}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-brand-saffron">★</span>
                    <span className="ml-1">{recipe.rating}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Ingredients</h3>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-brand-saffron rounded-full mr-3" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Instructions</h3>
                  <ol className="space-y-3">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex">
                        <span className="bg-brand-saffron text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-sand">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNDEsMTk2LDE1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-amber-900">
              Traditional Recipes
            </h1>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-amber-800/90 max-w-2xl mx-auto leading-relaxed">
              Discover authentic Indian recipes using our premium flour products
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-brand-saffron text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-brand-wheat'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, index) => (
              <div key={recipe.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 traditional-border overflow-hidden cursor-pointer"
                     onClick={() => setSelectedRecipe(recipe.id)}>
                  <div className="relative">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-brand-saffron text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {recipe.difficulty}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-brand-charcoal mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {recipe.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {recipe.prepTime}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {recipe.serves}
                      </div>
                      <div className="flex items-center">
                        <span className="text-brand-saffron">★</span>
                        <span className="ml-1">{recipe.rating}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-brand-wheat hover:bg-brand-saffron text-brand-charcoal hover:text-white py-3 rounded-lg font-medium transition-all duration-300">
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

export default Recipes;
