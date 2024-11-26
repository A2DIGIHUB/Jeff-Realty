import React, { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import AdvancedHero from '../components/AdvancedHero';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Implement actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const officeLocation = {
    city: 'Enugu Office',
    address: 'No. 7 O Conner street Presidential Road Enugu',
    phone: '+2349064088365',
    email: 'info@jeff-realty.com',
  };

  return (
    <div className="min-h-screen bg-white">
      <AdvancedHero
        title="Get in Touch"
        subtitle="Have questions about our properties or services? We're here to help you find your perfect real estate solution."
        backgroundImage="/images/contact-hero.jpg"
        showBuilding={false}
        theme="dark"
        ctaText="Contact Us Now"
        ctaLink="#contact-form"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Office Location */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h2>
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                <BuildingOfficeIcon className="h-6 w-6 inline-block mr-2 text-primary" />
                {officeLocation.city}
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {officeLocation.address}
                  </a>
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${officeLocation.phone}`}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {officeLocation.phone}
                  </a>
                </p>
                <p className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${officeLocation.email}`}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {officeLocation.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Visit Our Offices
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            {/* TODO: Add Google Maps or other map integration */}
            <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Map Integration Coming Soon
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
