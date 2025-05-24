import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();

  // Set the map coordinates
  const latitude = 26.798856447208955;
  const longitude = 75.81149726978549;
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123456789012!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9b7a2e7e1e1%3A0x1234567890abcdef!2sShree%20Gopal%20Ji%20Bhog!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`;

  return (
    <div className="min-h-screen bg-brand-sand">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-brand-saffron to-brand-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-6xl font-playfair font-bold mb-6 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('contact.contactUs')}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto opacity-90 ${language === 'hi' ? 'hindi' : ''}`}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className={`text-2xl font-playfair font-bold mb-6 text-gray-800 ${language === 'hi' ? 'hindi' : ''}`}>
                {t('contact.sendMessage')}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'hi' ? 'hindi' : ''}`}>
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'hi' ? 'hindi' : ''}`}>
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="w-full"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'hi' ? 'hindi' : ''}`}>
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    className="w-full"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'hi' ? 'hindi' : ''}`}>
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="w-full"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
                <Button type="submit" className="bg-brand-maroon hover:bg-brand-maroon/90">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className={`text-2xl font-playfair font-bold mb-6 text-gray-800 ${language === 'hi' ? 'hindi' : ''}`}>
                  {t('contact.contactInfo')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-maroon/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-brand-maroon" />
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-medium text-gray-900 ${language === 'hi' ? 'hindi' : ''}`}>
                        {t('contact.address')}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {t('contact.addressLine1')}<br />
                        {t('contact.addressLine2')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-maroon/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-brand-maroon" />
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-medium text-gray-900 ${language === 'hi' ? 'hindi' : ''}`}>
                        {t('contact.phone')}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-maroon/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-brand-maroon" />
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-medium text-gray-900 ${language === 'hi' ? 'hindi' : ''}`}>
                        {t('contact.email')}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        info@shreegopaljibhog.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-maroon/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-brand-maroon" />
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-medium text-gray-900 ${language === 'hi' ? 'hindi' : ''}`}>
                        {t('contact.hours')}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {t('contact.weekdays')}: 9:00 AM - 6:00 PM<br />
                        {t('contact.weekend')}: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={t('contact.mapTitle')}
                  className="w-full h-64 md:h-80 lg:h-96"
                ></iframe>
                <div className="bg-white p-4 text-center">
                  <a 
                    href="https://maps.app.goo.gl/rgRkm1cVodV1BxPP7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-brand-maroon font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <span>{t('contact.viewLargerMap')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
