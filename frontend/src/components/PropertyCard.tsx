import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  HomeIcon,
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon as HeartOutlineIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'sold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link
      to={`/property/${property.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-gray-800 shadow-sm transition-all hover:bg-white"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-gray-800 shadow-sm transition-all hover:bg-white"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Like Button */}
        <button
          onClick={toggleLike}
          className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-gray-800 shadow-sm transition-all hover:bg-white"
        >
          {isLiked ? (
            <HeartSolidIcon className="h-4 w-4 text-red-500" />
          ) : (
            <HeartOutlineIcon className="h-4 w-4" />
          )}
        </button>

        {/* Property Type Badge */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-md bg-primary/80 px-2 py-1 text-xs font-medium text-white">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-900">{property.title}</h3>
        <p className="mb-2 flex items-center text-sm text-gray-500">
          <MapPinIcon className="mr-1 h-4 w-4" />
          {property.location}
        </p>
        <p className="mb-4 text-xl font-bold text-primary">
          {formatPrice(property.price)}
        </p>

        {/* Features */}
        <div className="mt-auto flex items-center gap-4 text-sm text-gray-600">
          {property.beds && (
            <div className="flex items-center">
              <HomeIcon className="mr-1 h-4 w-4" />
              {property.beds} Beds
            </div>
          )}
          {property.baths && (
            <div className="flex items-center">
              <HomeIcon className="mr-1 h-4 w-4" />
              {property.baths} Baths
            </div>
          )}
          {property.sqft && (
            <div className="flex items-center">
              <HomeIcon className="mr-1 h-4 w-4" />
              {property.sqft} sqm
            </div>
          )}
        </div>

        {/* Agent Contact */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{property.agent.phone}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
