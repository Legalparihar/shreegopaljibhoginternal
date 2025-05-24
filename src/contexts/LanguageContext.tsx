
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
    'common.findDistributor': 'Find a Distributor',
    'common.contactUs': 'Contact Us',
    
    // Home Page
    'home.promiseTitle': 'Our Promise of Purity',
    'home.promiseDescription': 'At Shree Gopal Ji Bhog, we believe in preserving the traditional methods of flour making while ensuring the highest quality standards. Every grain is hand-picked, and every batch is made with care and devotion.',
    'home.pureIngredients': 'Pure Ingredients',
    'home.pureIngredientsDesc': 'Hand-selected grains from trusted farmers',
    'home.traditionalProcess': 'Traditional Process',
    'home.traditionalProcessDesc': 'Stone-ground using time-tested methods',
    'home.healthFirst': 'Health First',
    'home.healthFirstDesc': 'No chemicals, no preservatives, just pure nutrition',
    'home.productsTitle': 'Our Premium Products',
    'home.productsDescription': 'Discover our range of carefully crafted flour products, made with traditional methods and modern quality standards.',
    'home.recipeTitle': 'Traditional Recipes, Modern Kitchen',
    'home.recipeDescription': 'Discover authentic Indian recipes that bring out the best flavors using our premium flour products. From soft rotis to crispy pakoras, create memorable meals for your family.',
    'home.exploreRecipes': 'Explore Recipes',
    'home.testimonialsTitle': 'What Our Customers Say',
    'home.testimonialsDescription': 'Join thousands of satisfied customers who trust Shree Gopal Ji Bhog for their daily flour needs.',
    'home.ctaTitle': 'Experience the Purity Today',
    'home.ctaDescription': 'Join the Shree Gopal Ji Bhog family and taste the difference that pure, traditional flour makes in your kitchen.',
    
    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'A legacy of purity, tradition, and commitment to quality flour products',
    'about.ourStory': 'Our Story',
    'about.storyPara1': 'Founded with a vision to preserve the authentic taste of traditional Indian cooking, Shree Gopal Ji Bhog began as a humble endeavor to bring pure, stone-ground flour to families across India.',
    'about.storyPara2': 'Our journey started decades ago when our founders recognized the need for preserving traditional milling methods while ensuring modern quality standards. We believe that every grain tells a story, and every product carries the legacy of our commitment to excellence.',
    'about.storyPara3': 'Today, Shree Gopal Ji Bhog stands as a testament to the perfect blend of tradition and innovation, bringing you flour products that not only nourish your body but also connect you to the rich heritage of Indian cuisine.',
    'about.mission': 'Mission & Vision',
    'about.missionTitle': 'Our Mission',
    'about.missionText': 'To provide pure, nutritious, and authentic flour products that preserve the traditional flavors of Indian cuisine while meeting modern quality standards. We are committed to supporting healthy lifestyles and bringing families together through wholesome food.',
    'about.visionTitle': 'Our Vision',
    'about.visionText': 'To become the most trusted brand for traditional flour products in India, setting the benchmark for quality and purity. We envision a future where every kitchen enjoys the authentic taste and nutritional benefits of our carefully crafted products.',
    'about.quality': 'Quality Assurance',
    'about.qualityDescription': 'Every step of our process is designed to ensure the highest quality and purity',
    'about.sourcingTitle': 'Sourcing Excellence',
    'about.sourcingText': 'We carefully select grains from trusted farmers who follow sustainable farming practices. Each batch is tested for quality and purity before processing.',
    'about.processingTitle': 'Traditional Processing',
    'about.processingText': 'Our stone-grinding process preserves the natural nutrients and authentic flavors. We maintain optimal temperatures to ensure the grain\'s integrity is never compromised.',
    'about.testingTitle': 'Quality Testing',
    'about.testingText': 'Every product undergoes rigorous quality checks including nutritional analysis, purity testing, and packaging integrity to ensure you receive only the best.',
    'about.community': 'Community Engagement',
    'about.communityDescription': 'At Shree Gopal Ji Bhog, we believe in giving back to the communities that support us. Our initiatives focus on supporting local farmers, promoting sustainable agriculture, and contributing to nutritional awareness.',
    'about.farmerSupport': 'Farmer Support Programs',
    'about.farmerSupportText': 'Direct partnerships with local farmers ensuring fair prices and sustainable farming practices.',
    'about.nutritionalEducation': 'Nutritional Education',
    'about.nutritionalEducationText': 'Community workshops on healthy eating and the benefits of traditional grains.',
    'about.environmentalInitiatives': 'Environmental Initiatives',
    'about.environmentalInitiativesText': 'Promoting eco-friendly packaging and supporting organic farming methods.',
    
    // Products Page
    'products.title': 'Our Products',
    'products.subtitle': 'Discover our range of premium flour products crafted with tradition and care',
    'products.allProducts': 'All Products',
    'products.aata': 'Aata',
    'products.besan': 'Besan',
    'products.multigrain': 'Multigrain Flours',
    'products.specialty': 'Specialty Flours',
    'products.nutritionalInfo': 'Nutritional Info (per 100g)',
    'products.availableSizes': 'Available Sizes',
    'products.usageTips': 'Usage Tips',
    'products.ctaTitle': 'Need Help Choosing?',
    'products.ctaDescription': 'Our experts are here to help you find the perfect flour for your needs',
    'products.contactExperts': 'Contact Our Experts',
    
    // Gallery Page
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Explore our journey through images and videos showcasing our commitment to quality',
    'gallery.allMedia': 'All Media',
    'gallery.production': 'Production Process',
    'gallery.packaging': 'Packaging',
    'gallery.events': 'Events & Exhibitions',
    'gallery.videos': 'Videos',
    'gallery.featuredVideos': 'Featured Videos',
    'gallery.featuredDescription': 'Watch our production process and hear from satisfied customers',
    'gallery.productionVideo': 'From Grain to Flour: Our Process',
    'gallery.testimonialsVideo': 'Customer Stories & Reviews',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.products': 'Products',
    'footer.contactInfo': 'Contact Info',
    'footer.copyright': '© 2024 Shree Gopal Ji Bhog. All rights reserved.',
    
    // Product Names and Descriptions
    'product.wheatAata': 'Premium Wheat Aata',
    'product.wheatAataDesc': 'Stone-ground whole wheat flour made from carefully selected grains, perfect for making soft rotis and nutritious bread.',
    'product.pureBesan': 'Pure Besan',
    'product.pureBesanDesc': 'Premium gram flour made from high-quality chickpeas, ideal for traditional Indian sweets and savory dishes.',
    'product.multigrainFlour': 'Multigrain Flour',
    'product.multigrainFlourDesc': 'Nutritious blend of wheat, millet, and other grains for healthier meals and enhanced nutritional value.',
    'product.organicWheat': 'Organic Wheat Aata',
    'product.organicWheatDesc': '100% organic whole wheat flour sourced from certified organic farms, ensuring pure and chemical-free nutrition.',
    'product.ragiFlour': 'Ragi Flour',
    'product.ragiFlourDesc': 'Nutritious finger millet flour rich in calcium and iron, perfect for healthy rotis and porridge.',
    'product.bajraFlour': 'Bajra Flour',
    'product.bajraFlourDesc': 'Pearl millet flour with high nutritional value, perfect for traditional bajra rotis and healthy meals.',
    
    // Product Features
    'feature.natural': '100% Natural',
    'feature.stoneGround': 'Stone Ground',
    'feature.richFiber': 'Rich in Fiber',
    'feature.noPreservatives': 'No Preservatives',
    'feature.proteinRich': 'Protein Rich',
    'feature.glutenFree': 'Gluten Free',
    'feature.freshGround': 'Fresh Ground',
    'feature.traditionalProcess': 'Traditional Process',
    'feature.multiNutrient': 'Multi-Nutrient',
    'feature.balancedBlend': 'Balanced Blend',
    'feature.healthFocused': 'Health Focused',
    'feature.energyBoosting': 'Energy Boosting',
    'feature.certifiedOrganic': 'Certified Organic',
    'feature.chemicalFree': 'Chemical Free',
    'feature.premiumQuality': 'Premium Quality',
    'feature.highCalcium': 'High Calcium',
    'feature.ironRich': 'Iron Rich',
    'feature.traditionalGrain': 'Traditional Grain',
    'feature.highEnergy': 'High Energy',
    'feature.richMinerals': 'Rich in Minerals',
    'feature.traditional': 'Traditional',
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
    'common.findDistributor': 'वितरक खोजें',
    'common.contactUs': 'हमसे संपर्क करें',
    
    // Home Page
    'home.promiseTitle': 'शुद्धता का हमारा वादा',
    'home.promiseDescription': 'श्री गोपाल जी भोग में, हम उच्चतम गुणवत्ता मानकों को सुनिश्चित करते हुए आटा बनाने की पारंपरिक विधियों को संरक्षित करने में विश्वास करते हैं। प्रत्येक अनाज हाथ से चुना जाता है, और हर बैच देखभाल और भक्ति के साथ बनाया जाता है।',
    'home.pureIngredients': 'शुद्ध सामग्री',
    'home.pureIngredientsDesc': 'विश्वसनीय किसानों से हाथ से चुने गए अनाज',
    'home.traditionalProcess': 'पारंपरिक प्रक्रिया',
    'home.traditionalProcessDesc': 'समय-परीक्षित विधियों का उपयोग करके पत्थर की चक्की से पिसा हुआ',
    'home.healthFirst': 'स्वास्थ्य सबसे पहले',
    'home.healthFirstDesc': 'कोई रसायन नहीं, कोई परिरक्षक नहीं, केवल शुद्ध पोषण',
    'home.productsTitle': 'हमारे प्रीमियम उत्पाद',
    'home.productsDescription': 'पारंपरिक विधियों और आधुनिक गुणवत्ता मानकों के साथ सावधानीपूर्वक तैयार किए गए हमारे आटा उत्पादों की श्रृंखला की खोज करें।',
    'home.recipeTitle': 'पारंपरिक व्यंजन, आधुनिक रसोई',
    'home.recipeDescription': 'हमारे प्रीमियम आटा उत्पादों का उपयोग करके सबसे अच्छे स्वाद लाने वाले प्रामाणिक भारतीय व्यंजनों की खोज करें। मुलायम रोटी से कुरकुरे पकौड़े तक, अपने परिवार के लिए यादगार भोजन तैयार करें।',
    'home.exploreRecipes': 'व्यंजन देखें',
    'home.testimonialsTitle': 'हमारे ग्राहक क्या कहते हैं',
    'home.testimonialsDescription': 'हजारों संतुष्ट ग्राहकों के साथ जुड़ें जो अपनी दैनिक आटे की जरूरतों के लिए श्री गोपाल जी भोग पर भरोसा करते हैं।',
    'home.ctaTitle': 'आज शुद्धता का अनुभव करें',
    'home.ctaDescription': 'श्री गोपाल जी भोग परिवार में शामिल हों और शुद्ध, पारंपरिक आटे का अंतर महसूस करें जो आपकी रसोई में बनाता है।',
    
    // About Page
    'about.title': 'हमारे बारे में',
    'about.subtitle': 'शुद्धता, परंपरा और गुणवत्तापूर्ण आटा उत्पादों के प्रति प्रतिबद्धता की विरासत',
    'about.ourStory': 'हमारी कहानी',
    'about.storyPara1': 'पारंपरिक भारतीय खाना पकाने के प्रामाणिक स्वाद को संरक्षित करने के दृष्टिकोण के साथ स्थापित, श्री गोपाल जी भोग भारत भर के परिवारों तक शुद्ध, पत्थर की चक्की से पिसा आटा पहुंचाने के एक विनम्र प्रयास के रूप में शुरू हुआ।',
    'about.storyPara2': 'हमारी यात्रा दशकों पहले शुरू हुई जब हमारे संस्थापकों ने आधुनिक गुणवत्ता मानकों को सुनिश्चित करते हुए पारंपरिक मिलिंग विधियों को संरक्षित करने की आवश्यकता को पहचाना। हम मानते हैं कि हर अनाज एक कहानी कहता है, और हर उत्पाद उत्कृष्टता के प्रति हमारी प्रतिबद्धता की विरासत लेकर आता है।',
    'about.storyPara3': 'आज, श्री गोपाल जी भोग परंपरा और नवाचार के सही मिश्रण के प्रमाण के रूप में खड़ा है, आपको ऐसे आटा उत्पाद लाकर जो न केवल आपके शरीर को पोषण देते हैं बल्कि आपको भारतीय व्यंजनों की समृद्ध विरासत से भी जोड़ते हैं।',
    'about.mission': 'मिशन और दृष्टिकोण',
    'about.missionTitle': 'हमारा मिशन',
    'about.missionText': 'आधुनिक गुणवत्ता मानकों को पूरा करते हुए भारतीय व्यंजनों के पारंपरिक स्वाद को संरक्षित करने वाले शुद्ध, पौष्टिक और प्रामाणिक आटा उत्पाद प्रदान करना। हम स्वस्थ जीवनशैली का समर्थन करने और स्वस्थ भोजन के माध्यम से परिवारों को एक साथ लाने के लिए प्रतिबद्ध हैं।',
    'about.visionTitle': 'हमारा दृष्टिकोण',
    'about.visionText': 'भारत में पारंपरिक आटा उत्पादों के लिए सबसे भरोसेमंद ब्रांड बनना, गुणवत्ता और शुद्धता के लिए बेंचमार्क सेट करना। हम एक ऐसे भविष्य की कल्पना करते हैं जहां हर रसोई हमारे सावधानीपूर्वक तैयार किए गए उत्पादों के प्रामाणिक स्वाद और पोषण लाभों का आनंद उठाए।',
    'about.quality': 'गुणवत्ता आश्वासन',
    'about.qualityDescription': 'हमारी प्रक्रिया का हर कदम उच्चतम गुणवत्ता और शुद्धता सुनिश्चित करने के लिए डिज़ाइन किया गया है',
    'about.sourcingTitle': 'सोर्सिंग उत्कृष्टता',
    'about.sourcingText': 'हम सावधानीपूर्वक उन विश्वसनीय किसानों से अनाज का चयन करते हैं जो टिकाऊ कृषि प्रथाओं का पालन करते हैं। प्रसंस्करण से पहले प्रत्येक बैच की गुणवत्ता और शुद्धता के लिए जांच की जाती है।',
    'about.processingTitle': 'पारंपरिक प्रसंस्करण',
    'about.processingText': 'हमारी पत्थर की पिसाई प्रक्रिया प्राकृतिक पोषक तत्वों और प्रामाणिक स्वाद को संरक्षित करती है। हम यह सुनिश्चित करने के लिए इष्टतम तापमान बनाए रखते हैं कि अनाज की अखंडता कभी समझौता न हो।',
    'about.testingTitle': 'गुणवत्ता परीक्षण',
    'about.testingText': 'हर उत्पाद कठोर गुणवत्ता जांच से गुजरता है जिसमें पोषण विश्लेषण, शुद्धता परीक्षण, और पैकेजिंग अखंडता शामिल है ताकि यह सुनिश्चित हो सके कि आपको केवल सर्वोत्तम मिले।',
    'about.community': 'सामुदायिक सहभागिता',
    'about.communityDescription': 'श्री गोपाल जी भोग में, हम उन समुदायों को वापस देने में विश्वास करते हैं जो हमारा समर्थन करते हैं। हमारी पहल स्थानीय किसानों का समर्थन करने, टिकाऊ कृषि को बढ़ावा देने और पोषण जागरूकता में योगदान करने पर केंद्रित है।',
    'about.farmerSupport': 'किसान सहायता कार्यक्रम',
    'about.farmerSupportText': 'स्थानीय किसानों के साथ प्रत्यक्ष साझेदारी उचित मूल्य और टिकाऊ कृषि प्रथाओं को सुनिश्चित करती है।',
    'about.nutritionalEducation': 'पोषण शिक्षा',
    'about.nutritionalEducationText': 'स्वस्थ भोजन और पारंपरिक अनाज के लाभों पर सामुदायिक कार्यशालाएं।',
    'about.environmentalInitiatives': 'पर्यावरणीय पहल',
    'about.environmentalInitiativesText': 'पर्यावरण-अनुकूल पैकेजिंग को बढ़ावा देना और जैविक कृषि विधियों का समर्थन करना।',
    
    // Products Page
    'products.title': 'हमारे उत्पाद',
    'products.subtitle': 'परंपरा और देखभाल के साथ तैयार किए गए हमारे प्रीमियम आटा उत्पादों की श्रृंखला की खोज करें',
    'products.allProducts': 'सभी उत्पाद',
    'products.aata': 'आटा',
    'products.besan': 'बेसन',
    'products.multigrain': 'मल्टीग्रेन आटा',
    'products.specialty': 'विशेष आटा',
    'products.nutritionalInfo': 'पोषण संबंधी जानकारी (प्रति 100 ग्राम)',
    'products.availableSizes': 'उपलब्ध आकार',
    'products.usageTips': 'उपयोग की सुझाव',
    'products.ctaTitle': 'चुनने में सहायता चाहिए?',
    'products.ctaDescription': 'हमारे विशेषज्ञ आपकी आवश्यकताओं के लिए सही आटा खोजने में आपकी सहायता करने के लिए यहां हैं',
    'products.contactExperts': 'हमारे विशेषज्ञों से संपर्क करें',
    
    // Gallery Page
    'gallery.title': 'गैलरी',
    'gallery.subtitle': 'गुणवत्ता के प्रति हमारी प्रतिबद्धता को दर्शाने वाली छवियों और वीडियो के माध्यम से हमारी यात्रा का अन्वेषण करें',
    'gallery.allMedia': 'सभी मीडिया',
    'gallery.production': 'उत्पादन प्रक्रिया',
    'gallery.packaging': 'पैकेजिंग',
    'gallery.events': 'कार्यक्रम और प्रदर्शनियां',
    'gallery.videos': 'वीडियो',
    'gallery.featuredVideos': 'फीचर्ड वीडियो',
    'gallery.featuredDescription': 'हमारी उत्पादन प्रक्रिया देखें और संतुष्ट ग्राहकों से सुनें',
    'gallery.productionVideo': 'अनाज से आटा तक: हमारी प्रक्रिया',
    'gallery.testimonialsVideo': 'ग्राहक कहानियां और समीक्षाएं',
    
    // Footer
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.products': 'उत्पाद',
    'footer.contactInfo': 'संपर्क जानकारी',
    'footer.copyright': '© 2024 श्री गोपाल जी भोग। सभी अधिकार सुरक्षित।',
    
    // Product Names and Descriptions
    'product.wheatAata': 'प्रीमियम गेहूं का आटा',
    'product.wheatAataDesc': 'सावधानीपूर्वक चुने गए अनाज से बना पत्थर की चक्की से पिसा साबुत गेहूं का आटा, मुलायम रोटी और पौष्टिक ब्रेड बनाने के लिए बिल्कुल सही।',
    'product.pureBesan': 'शुद्ध बेसन',
    'product.pureBesanDesc': 'उच्च गुणवत्ता वाले चने से बना प्रीमियम चना आटा, पारंपरिक भारतीय मिठाइयों और नमकीन व्यंजनों के लिए आदर्श।',
    'product.multigrainFlour': 'मल्टीग्रेन आटा',
    'product.multigrainFlourDesc': 'स्वस्थ भोजन और बेहतर पोषण मूल्य के लिए गेहूं, बाजरा और अन्य अनाजों का पौष्टिक मिश्रण।',
    'product.organicWheat': 'जैविक गेहूं का आटा',
    'product.organicWheatDesc': 'प्रमाणित जैविक खेतों से प्राप्त 100% जैविक साबुत गेहूं का आटा, शुद्ध और रसायन-मुक्त पोषण सुनिश्चित करता है।',
    'product.ragiFlour': 'रागी का आटा',
    'product.ragiFlourDesc': 'कैल्शियम और आयरन से भरपूर पौष्टिक मंडुआ आटा, स्वस्थ रोटी और दलिया के लिए बिल्कुल सही।',
    'product.bajraFlour': 'बाजरा आटा',
    'product.bajraFlourDesc': 'उच्च पोषण मूल्य के साथ मोती बाजरा आटा, पारंपरिक बाजरा रोटी और स्वस्थ भोजन के लिए बिल्कुल सही।',
    
    // Product Features
    'feature.natural': '100% प्राकृतिक',
    'feature.stoneGround': 'पत्थर की चक्की से पिसा',
    'feature.richFiber': 'फाइबर से भरपूर',
    'feature.noPreservatives': 'कोई परिरक्षक नहीं',
    'feature.proteinRich': 'प्रोटीन से भरपूर',
    'feature.glutenFree': 'ग्लूटेन मुक्त',
    'feature.freshGround': 'ताजा पिसा हुआ',
    'feature.traditionalProcess': 'पारंपरिक प्रक्रिया',
    'feature.multiNutrient': 'बहु-पोषक',
    'feature.balancedBlend': 'संतुलित मिश्रण',
    'feature.healthFocused': 'स्वास्थ्य केंद्रित',
    'feature.energyBoosting': 'ऊर्जा बढ़ाने वाला',
    'feature.certifiedOrganic': 'प्रमाणित जैविक',
    'feature.chemicalFree': 'रसायन मुक्त',
    'feature.premiumQuality': 'प्रीमियम गुणवत्ता',
    'feature.highCalcium': 'उच्च कैल्शियम',
    'feature.ironRich': 'आयरन से भरपूर',
    'feature.traditionalGrain': 'पारंपरिक अनाज',
    'feature.highEnergy': 'उच्च ऊर्जा',
    'feature.richMinerals': 'खनिजों से भरपूर',
    'feature.traditional': 'पारंपरिक',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi'); // Changed default to Hindi

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
