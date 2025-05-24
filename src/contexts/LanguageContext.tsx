
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.recipes': 'Recipes',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title1': 'Shree Gopal Ji',
    'hero.title2': 'Bhog',
    'hero.subtitle1': 'Pure Traditional Aata',
    'hero.subtitle2': 'Hand-picked grains, stone-ground to perfection',
    'hero.subtitle3': 'Premium Besan',
    'hero.subtitle4': 'The finest gram flour for authentic Indian cuisine',
    'hero.exploreProducts': 'Explore Products',
    'hero.ourStory': 'Our Story',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
    'common.premium': 'Premium',
    
    // About Page
    'about.title': 'About Us',
    'about.ourStory': 'Our Story',
    'about.mission': 'Mission & Vision',
    'about.quality': 'Quality Assurance',
    'about.community': 'Community Engagement',
    
    // Products Page
    'products.title': 'Our Products',
    'products.aata': 'Aata',
    'products.besan': 'Besan',
    'products.multigrain': 'Multigrain Flours',
    'products.specialty': 'Specialty Flours',
    
    // Recipes Page
    'recipes.title': 'Traditional Recipes',
    'recipes.filter': 'Filter Recipes',
    'recipes.all': 'All Recipes',
    'recipes.breakfast': 'Breakfast',
    'recipes.lunch': 'Lunch',
    'recipes.dinner': 'Dinner',
    'recipes.snacks': 'Snacks',
    'recipes.prepTime': 'Prep Time',
    'recipes.cookTime': 'Cook Time',
    'recipes.serves': 'Serves',
    'recipes.ingredients': 'Ingredients',
    'recipes.instructions': 'Instructions',
    
    // Gallery Page
    'gallery.title': 'Gallery',
    'gallery.production': 'Production Process',
    'gallery.packaging': 'Packaging',
    'gallery.events': 'Events & Exhibitions',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.products': 'उत्पाद',
    'nav.recipes': 'व्यंजन विधि',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.title1': 'श्री गोपाल जी',
    'hero.title2': 'भोग',
    'hero.subtitle1': 'शुद्ध पारंपरिक आटा',
    'hero.subtitle2': 'हाथ से चुने गए अनाज, पत्थर की चक्की से पिसा हुआ',
    'hero.subtitle3': 'प्रीमियम बेसन',
    'hero.subtitle4': 'प्रामाणिक भारतीय व्यंजनों के लिए सबसे बेहतरीन चना आटा',
    'hero.exploreProducts': 'उत्पाद देखें',
    'hero.ourStory': 'हमारी कहानी',
    
    // Common
    'common.learnMore': 'और जानें',
    'common.viewAll': 'सभी देखें',
    'common.readMore': 'और पढ़ें',
    'common.premium': 'प्रीमियम',
    
    // About Page
    'about.title': 'हमारे बारे में',
    'about.ourStory': 'हमारी कहानी',
    'about.mission': 'मिशन और विज़न',
    'about.quality': 'गुणवत्ता आश्वासन',
    'about.community': 'सामुदायिक सहभागिता',
    
    // Products Page
    'products.title': 'हमारे उत्पाद',
    'products.aata': 'आटा',
    'products.besan': 'बेसन',
    'products.multigrain': 'मल्टीग्रेन आटा',
    'products.specialty': 'विशेष आटा',
    
    // Recipes Page
    'recipes.title': 'पारंपरिक व्यंजन',
    'recipes.filter': 'व्यंजन फिल्टर करें',
    'recipes.all': 'सभी व्यंजन',
    'recipes.breakfast': 'नाश्ता',
    'recipes.lunch': 'दोपहर का खाना',
    'recipes.dinner': 'रात का खाना',
    'recipes.snacks': 'नाश्ता',
    'recipes.prepTime': 'तैयारी का समय',
    'recipes.cookTime': 'पकाने का समय',
    'recipes.serves': 'परोसता है',
    'recipes.ingredients': 'सामग्री',
    'recipes.instructions': 'निर्देश',
    
    // Gallery Page
    'gallery.title': 'गैलरी',
    'gallery.production': 'उत्पादन प्रक्रिया',
    'gallery.packaging': 'पैकेजिंग',
    'gallery.events': 'कार्यक्रम और प्रदर्शनियां',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
