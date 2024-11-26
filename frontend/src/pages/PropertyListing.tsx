import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AdjustmentsHorizontalIcon,
  MapIcon,
  HomeIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  HeartIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  images: string[];
  isFavorite: boolean;
  daysListed: number;
  status: 'For Sale' | 'For Rent' | 'Pending' | 'Sold';
}

const PropertyListing: React.FC = () => {
  const [viewType, setViewType] = useState<'grid' | 'map'>('grid');
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    beds: 'any',
    baths: 'any',
    homeType: 'any',
  });
  const [sortBy, setSortBy] = useState('newest');

  const toggleFavorite = (propertyId: string) => {
    // Implement favorite toggling logic
  };

  const shareProperty = (propertyId: string) => {
    // Implement share functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="sticky top-0 z-10 bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center">
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="w-full rounded-lg border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-4 flex items-center space-x-4">
              <button
                onClick={() => setViewType(viewType === 'grid' ? 'map' : 'grid')}
                className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                {viewType === 'grid' ? (
                  <>
                    <MapIcon className="mr-2 h-5 w-5" />
                    Map View
                  </>
                ) : (
                  <>
                    <HomeIcon className="mr-2 h-5 w-5" />
                    Grid View
                  </>
                )}
              </button>
              <button
                className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                <AdjustmentsHorizontalIcon className="mr-2 h-5 w-5" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <select
              value={filters.priceMin}
              onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
              className="rounded-md border-gray-300 py-1.5 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Price (Min)</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>
              <option value="300000">$300,000</option>
              <option value="400000">$400,000</option>
              <option value="500000">$500,000</option>
            </select>

            <select
              value={filters.priceMax}
              onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
              className="rounded-md border-gray-300 py-1.5 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Price (Max)</option>
              <option value="500000">$500,000</option>
              <option value="750000">$750,000</option>
              <option value="1000000">$1,000,000</option>
              <option value="1500000">$1,500,000</option>
              <option value="2000000">$2,000,000+</option>
            </select>

            <select
              value={filters.beds}
              onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
              className="rounded-md border-gray-300 py-1.5 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="any">Beds</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>

            <select
              value={filters.baths}
              onChange={(e) => setFilters({ ...filters, baths: e.target.value })}
              className="rounded-md border-gray-300 py-1.5 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="any">Baths</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>

            <select
              value={filters.homeType}
              onChange={(e) => setFilters({ ...filters, homeType: e.target.value })}
              className="rounded-md border-gray-300 py-1.5 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="any">All Home Types</option>
              <option value="house">Houses</option>
              <option value="condo">Condos</option>
              <option value="townhouse">Townhouses</option>
              <option value="land">Land</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 py-1.5 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="beds">Beds</option>
              <option value="baths">Baths</option>
              <option value="sqft">Square Feet</option>
            </select>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1"
            >
              {/* Property Image Carousel */}
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="rounded-full bg-white p-2 text-gray-400 shadow-md hover:text-red-500"
                  >
                    {property.isFavorite ? (
                      <HeartIconSolid className="h-5 w-5 text-red-500" />
                    ) : (
                      <HeartIcon className="h-5 w-5" />
                    )}
                  </button>
                  <button
                    onClick={() => shareProperty(property.id)}
                    className="rounded-full bg-white p-2 text-gray-400 shadow-md hover:text-gray-600"
                  >
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-800 shadow-md">
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-4">
                <Link to={`/properties/${property.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                    {property.title}
                  </h3>
                </Link>
                <p className="mt-1 text-sm text-gray-500">{property.address}</p>
                <div className="mt-2">
                  <span className="text-xl font-bold text-gray-900">{property.price}</span>
                  {property.status === 'For Rent' && (
                    <span className="text-sm text-gray-500">/month</span>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <HomeIcon className="mr-1 h-4 w-4" />
                      {property.beds} beds
                    </div>
                    <div className="flex items-center">
                      <BuildingOfficeIcon className="mr-1 h-4 w-4" />
                      {property.baths} baths
                    </div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="mr-1 h-4 w-4" />
                      {property.sqft.toLocaleString()} sqft
                    </div>
                  </div>
                  <div className="text-xs">
                    {property.daysListed === 0
                      ? 'Just listed'
                      : `${property.daysListed} days ago`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample data
const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    address: '123 Ocean View Dr, Malibu, CA 90265',
    price: '$4,500,000',
    beds: 5,
    baths: 4.5,
    sqft: 4500,
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    ],
    isFavorite: false,
    daysListed: 0,
    status: 'For Sale',
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    address: '456 Main St #1200, Los Angeles, CA 90014',
    price: '$8,500',
    beds: 3,
    baths: 2,
    sqft: 2200,
    type: 'condo',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    ],
    isFavorite: true,
    daysListed: 3,
    status: 'For Rent',
  },
  // Add more properties...
];

export default PropertyListing;
