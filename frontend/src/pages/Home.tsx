import React, { useState } from 'react';
import {
  ChevronDownIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  HomeModernIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import AdvancedHero from '../components/AdvancedHero';
import FeaturedProperty from '../components/FeaturedProperty';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

const HERO_IMAGE = '/images/nigeria-city-1.jpg';
const CTA_IMAGE = '/images/nigeria-city-3.jpg';

const Home: React.FC = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Sample data for featured properties
  const featuredProperties = [
    {
      image: '/images/mansion-1.jpg',
      title: 'Luxury Villa in Independence Layout',
      price: '₦85,000,000',
      location: 'Independence Layout, Enugu',
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: 'Villa',
    },
    {
      image: '/images/modern-apartment-2.jpg',
      title: 'Modern Apartment in GRA',
      price: '₦45,000,000',
      location: 'GRA, Enugu',
      beds: 3,
      baths: 2,
      sqft: 1500,
      type: 'Apartment',
    },
    {
      image: '/images/luxury-house-3.jpg',
      title: 'Waterfront Penthouse',
      price: '₦120,000,000',
      location: 'Diamond Hills, Calabar',
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      type: 'Penthouse',
    },
  ];

  // Sample data for stats
  const stats = [
    {
      icon: <BuildingOfficeIcon className="w-6 h-6 text-primary" />,
      title: 'Properties Listed',
      value: '500+',
      description: 'Premium properties in Enugu and Calabar',
    },
    {
      icon: <UserGroupIcon className="w-6 h-6 text-primary" />,
      title: 'Happy Clients',
      value: '1,000+',
      description: 'Satisfied customers who found their dream homes',
    },
    {
      icon: <HomeModernIcon className="w-6 h-6 text-primary" />,
      title: 'Cities Covered',
      value: '2',
      description: 'Comprehensive coverage of Enugu and Calabar',
    },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      image: '/images/african-business-1.jpg',
      name: 'Chioma Okafor',
      role: 'Property Owner',
      content:
        'Jeff Realty helped me find my dream home in Independence Layout, Enugu. Their knowledge of the local property market is exceptional, and they guided me through every step.',
      rating: 5,
    },
    {
      image: '/images/african-business-2.jpg',
      name: 'Michael Effiong',
      role: 'Property Investor',
      content:
        'As a real estate investor in Calabar, I appreciate their market knowledge and professional approach. They helped me find great investment opportunities in prime locations.',
      rating: 5,
    },
    {
      image: '/images/african-business-3.jpg',
      name: 'Ada Mbah',
      role: 'First-time Buyer',
      content:
        'Outstanding service! They found me the perfect apartment in New Haven, Enugu within my budget. Their local expertise and negotiation skills saved me money.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <AdvancedHero
        title="Jeff - Realty"
        subtitle="Discover premium properties in prime locations across Enugu and Calabar. Let us help you find the perfect home."
        fullHeight
        backgroundImage={HERO_IMAGE}
        className="mb-16"
      >
        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-white/20">
          <div className="space-y-6">
            {/* Search Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">Location</label>
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full px-4 py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  list="locations"
                />
                <datalist id="locations">
                  <option>Independence Layout, Enugu</option>
                  <option>GRA, Enugu</option>
                  <option>New Haven, Enugu</option>
                  <option>Trans Ekulu, Enugu</option>
                  <option>Diamond Hills, Calabar</option>
                  <option>State Housing, Calabar</option>
                  <option>Parliamentary Road, Calabar</option>
                  <option>Federal Housing, Calabar</option>
                </datalist>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">Price Range</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-primary/50 focus:border-primary">
                  <option>Any Price</option>
                  <option>₦10M - ₦30M</option>
                  <option>₦30M - ₦50M</option>
                  <option>₦50M - ₦100M</option>
                  <option>₦100M+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">Property Type</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-primary/50 focus:border-primary">
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Land</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">Bedrooms</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-primary/50 focus:border-primary">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </div>
            </div>

            {/* Advanced Search Toggle */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-sm font-medium text-gray-900 hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                {showAdvanced ? 'Simple Search' : 'Advanced Search'}
                <ChevronDownIcon
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    showAdvanced ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-black font-medium rounded-lg transition-colors duration-200">
                Search
              </button>
            </div>

            {/* Advanced Search Options */}
            {showAdvanced && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/20">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">Bathrooms</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-primary/50 focus:border-primary">
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">Square Feet</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-primary/50 focus:border-primary">
                    <option>Any</option>
                    <option>1000+ sqft</option>
                    <option>1500+ sqft</option>
                    <option>2000+ sqft</option>
                    <option>2500+ sqft</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">Year Built</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-primary/50 focus:border-primary">
                    <option>Any</option>
                    <option>2020+</option>
                    <option>2015+</option>
                    <option>2010+</option>
                    <option>2000+</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </AdvancedHero>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our hand-picked selection of premium properties in Enugu and Calabar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <FeaturedProperty key={index} {...property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/properties" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from our satisfied clients about their experience with Jeff Realty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={CTA_IMAGE}
                alt="Enugu cityscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/50"></div>
            </div>
            <div className="relative py-16 px-8 sm:px-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-white">Ready to Find Your Dream Home?</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Let us help you navigate through the best real estate opportunities in Enugu and Calabar.
                </p>
                <div className="mt-8 flex gap-4">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-primary hover:bg-primary/90 transition-colors duration-300">
                    Contact Us Today
                  </button>
                  <a
                    href="https://wa.me/2349064088365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#25D366] hover:bg-[#20BD5C] transition-colors duration-300"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
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

export default Home;
