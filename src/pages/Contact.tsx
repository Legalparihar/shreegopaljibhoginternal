import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

interface FAQItem {
  en: {
    q: string;
    a: string;
  };
  hi: {
    q: string;
    a: string;
  };
}

const Contact = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const latitude = 26.798856447208955;
  const longitude = 75.81149726978549;
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123456789012!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9b7a2e7e1e1%3A0x1234567890abcdef!2sShree%20Gopal%20Ji%20Bhog!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`;

  const faqs: FAQItem[] = [
    {
      en: { q: "What types of products do you offer?", a: "We specialize in a wide range of bhog prasad, sweets, and snacks prepared with traditional methods." },
      hi: { q: "आप किस प्रकार के उत्पाद प्रदान करते हैं?", a: "हम पारंपरिक तरीकों से तैयार किए गए भोग प्रसाद, मिठाइयों और नमकीन की एक विस्तृत श्रृंखला में विशेषज्ञता रखते हैं।" }
    },
    {
      en: { q: "Where is Shree Gopal Ji Bhog located?", a: "We are located in Jaipur, Rajasthan." },
      hi: { q: "श्री गोपाल जी भोग कहाँ स्थित है?", a: "हम राजस्थान के जयपुर में स्थित हैं।" }
    },
    {
      en: { q: "Do you offer home delivery?", a: "Yes, we offer home delivery within selected areas." },
      hi: { q: "क्या आप होम डिलीवरी की सुविधा प्रदान करते हैं?", a: "हां, हम चयनित क्षेत्रों के भीतर होम डिलीवरी की सुविधा प्रदान करते हैं।" }
    },
    {
      en: { q: "How can I place an order?", a: "You can place orders through our website or contact us via phone/email." },
      hi: { q: "मैं ऑर्डर कैसे दे सकता हूं?", a: "आप हमारी वेबसाइट के माध्यम से ऑर्डर दे सकते हैं या फोन/ईमेल के माध्यम से हमसे संपर्क कर सकते हैं।" }
    },
    {
      en: { q: "Do you cater for events?", a: "Yes, we provide catering for religious functions, events, and weddings." },
      hi: { q: "क्या आप कार्यक्रमों के लिए खानपान की व्यवस्था करते हैं?", a: "हां, हम धार्मिक कार्यक्रमों, आयोजनों और शादियों के लिए खानपान सेवा प्रदान करते हैं।" }
    },
    {
      en: { q: "Are your products made fresh?", a: "Absolutely, all items are prepared fresh daily using premium ingredients." },
      hi: { q: "क्या आपके उत्पाद ताज़े बनाए जाते हैं?", a: "बिल्कुल, सभी वस्तुएं प्रीमियम सामग्री का उपयोग करके रोजाना ताजी तैयार की जाती हैं।" }
    },
    {
      en: { q: "Do you use any preservatives?", a: "No, we do not use artificial preservatives in our bhog or sweets." },
      hi: { q: "क्या आप कोई परिरक्षक उपयोग करते हैं?", a: "नहीं, हम अपने भोग या मिठाइयों में कृत्रिम परिरक्षकों का उपयोग नहीं करते हैं।" }
    },
    {
      en: { q: "Can I customize my bhog order?", a: "Yes, we accept custom orders for puja bhog and prasadam." },
      hi: { q: "क्या मैं अपना भोग ऑर्डर कस्टमाइज़ कर सकता हूं?", a: "हां, हम पूजा भोग और प्रसादम के लिए कस्टम ऑर्डर स्वीकार करते हैं।" }
    },
    {
      en: { q: "What are your payment options?", a: "We accept UPI, cards, and cash on delivery." },
      hi: { q: "आपके भुगतान विकल्प क्या हैं?", a: "हम UPI, कार्ड और कैश ऑन डिलीवरी स्वीकार करते हैं।" }
    },
    {
      en: { q: "Do you ship outside Jaipur?", a: "Currently, we serve only in Jaipur but plan to expand soon." },
      hi: { q: "क्या आप जयपुर से बाहर भी डिलीवरी करते हैं?", a: "वर्तमान में, हम केवल जयपुर में सेवा प्रदान करते हैं लेकिन जल्द ही विस्तार करने की योजना है।" }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNDEsMTk2LDE1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-amber-900">
              {t('contact.contactUs')}
            </h1>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-amber-800/90 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className={`text-2xl font-semibold mb-6 text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('contact.sendMessage')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
                    {t('contact.form.name')}
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    className="w-full border-amber-200 bg-amber-50/50 placeholder-amber-400/70 text-amber-900" 
                    placeholder={t('contact.form.namePlaceholder')} 
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
                    {t('contact.form.email')}
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="w-full border-amber-200 bg-amber-50/50 placeholder-amber-400/70 text-amber-900" 
                    placeholder={t('contact.form.emailPlaceholder')} 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
                  {t('contact.form.subject')}
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  className="w-full border-amber-200 bg-amber-50/50 placeholder-amber-400/70 text-amber-900" 
                  placeholder={t('contact.form.subjectPlaceholder')} 
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
                  {t('contact.form.message')}
                </label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  className="w-full border-amber-200 bg-amber-50/50 placeholder-amber-400/70 text-amber-900" 
                  placeholder={t('contact.form.messagePlaceholder')} 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t('contact.form.submit')}
              </Button>
              {submitted && <p className="text-green-600 mt-4">{t('contact.form.successMessage')}</p>}
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className={`text-2xl font-bold text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
                {t('contact.contactInfo')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-amber-50/50 rounded-xl">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    
                    <p className="text-amber-800/90 mt-1">
                      {language === 'hi' ? 'निर्माता:' : 'Manufactured By:'}<br />
                      AGARWAL INDUSTRIES<br />
                      Gi-45 Rice. Ind. Aera<br />
                      Kolana - Bandikui<br />
                      M: 9829967385, 8949680255
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-xl">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-700 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-semibold text-amber-900 text-sm ${language === 'hi' ? 'hindi' : ''}`}>
                        {t('contact.phone')}
                      </h3>
                      <p className="text-amber-800/90 text-sm">+91 98765 43210<br />+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-xl">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-700 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-semibold text-amber-900 text-sm ${language === 'hi' ? 'hindi' : ''}`}>
                        {t('contact.email')}
                      </h3>
                      <p className="text-amber-800/90 text-sm">shreegopaljibhog@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-amber-50/50 rounded-xl">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-amber-900 ${language === 'hi' ? 'hindi' : ''}`}>
                      {t('contact.hours')}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mt-1">
                      <div>
                        <p className={`text-amber-900 font-medium text-sm ${language === 'hi' ? 'hindi' : ''}`}>
                          {t('contact.weekdays')}
                        </p>
                        <p className="text-amber-800/90">9:00 AM – 8:00 PM</p>
                      </div>
                      <div>
                        <p className={`text-amber-900 font-medium text-sm ${language === 'hi' ? 'hindi' : ''}`}>
                          {t('contact.weekend')}
                        </p>
                        <p className="text-amber-800/90">10:00 AM – 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[350px] lg:h-[300px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  aria-label={t('contact.mapTitle')}
                  title={t('contact.mapTitle')}
                />
              </div>
              <a 
                href={`https://www.google.com/maps/dir//${latitude},${longitude}/@${latitude},${longitude},17z`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                {t('contact.getDirections')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-amber-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-amber-900 mb-4 ${language === 'hi' ? 'hindi' : ''}`}>
              {t('contact.faqTitle')}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((item, index) => (
              <details 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-amber-100"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className={`font-medium text-amber-900 group-hover:text-amber-700 transition-colors duration-300 ${language === 'hi' ? 'hindi' : ''}`}>
                    {language === 'hi' ? item.hi.q : item.en.q}
                  </span>
                  <svg 
                    className="w-5 h-5 text-amber-600 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <div className="border-t border-amber-100 pt-4">
                    <p className={`text-amber-800/90 ${language === 'hi' ? 'hindi' : ''}`}>
                      {language === 'hi' ? item.hi.a : item.en.a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Social Icons */}
      <section className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">{t('contact.followUs')}</h2>
          <div className="flex justify-center gap-6 text-gray-600">
            <a href="https://facebook.com" aria-label="Facebook"><Facebook className="h-6 w-6 hover:text-blue-600" /></a>
            <a href="https://instagram.com" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-pink-600" /></a>
            <a href="https://twitter.com" aria-label="Twitter"><Twitter className="h-6 w-6 hover:text-blue-400" /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
