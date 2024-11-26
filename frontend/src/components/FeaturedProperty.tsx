import React from 'react';
import { HeartIcon, MapPinIcon, HomeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface FeaturedPropertyProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
}

const FeaturedProperty: React.FC<FeaturedPropertyProps> = ({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  type
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 rounded-t-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-primary/90 transition-colors duration-300">
            <HeartIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-primary text-black text-sm font-semibold rounded-full">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">{title}</h3>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="w-4 h-4 mr-1" />
            <p className="text-sm line-clamp-1">{location}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center">
              <HomeIcon className="w-4 h-4 mr-1" />
              {beds} beds
            </span>
            <span>{baths} baths</span>
            <span>{sqft} sqft</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-primary font-semibold">
            <CurrencyDollarIcon className="w-5 h-5 mr-1" />
            {price}
          </div>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary hover:text-black transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
