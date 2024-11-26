import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../data/properties';
import { Tab } from '@headlessui/react';
import {
  BuildingOfficeIcon,
  MapPinIcon,
  HomeIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

interface PropertyListProps {
  properties: Property[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  const [selectedState, setSelectedState] = useState<'All' | 'Enugu' | 'Calabar'>('All');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'House' | 'Land'>('All');

  const filteredProperties = properties.filter(property => {
    const stateMatch = selectedState === 'All' || property.state === selectedState;
    const categoryMatch = selectedCategory === 'All' || property.category === selectedCategory;
    return stateMatch && categoryMatch;
  });

  const categories = ['All', 'House', 'Land'];
  const states = ['All', 'Enugu', 'Calabar'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'House':
        return HomeIcon;
      case 'Land':
        return MapIcon;
      default:
        return BuildingOfficeIcon;
    }
  };

  const getStateIcon = (state: string) => {
    switch (state) {
      case 'Enugu':
      case 'Calabar':
        return MapPinIcon;
      default:
        return BuildingOfficeIcon;
    }
  };

  const getPropertyCount = (state: string, category: string) => {
    return properties.filter(p => 
      (state === 'All' || p.state === state) &&
      (category === 'All' || p.category === category)
    ).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Properties</h2>
          <p className="mt-2 text-lg text-gray-600">
            Explore our selection of premium properties in Enugu and Calabar
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {/* Location Filter */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-900">Location</h3>
          <div className="grid grid-cols-3 gap-2">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state as any)}
                className={classNames(
                  'flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all',
                  selectedState === state
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {React.createElement(getStateIcon(state), { className: 'h-5 w-5' })}
                <span>{state}</span>
                <span className="ml-1.5 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                  {getPropertyCount(state, selectedCategory)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-900">Property Type</h3>
          <div className="grid grid-cols-3 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={classNames(
                  'flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all',
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {React.createElement(getCategoryIcon(category), { className: 'h-5 w-5' })}
                <span>{category}</span>
                <span className="ml-1.5 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                  {getPropertyCount(selectedState, category)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-6">
        <p className="mb-4 text-sm text-gray-600">
          Showing {filteredProperties.length} properties
          {selectedState !== 'All' && ` in ${selectedState}`}
          {selectedCategory !== 'All' && ` • ${selectedCategory}s`}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {filteredProperties.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <BuildingOfficeIcon className="h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No properties found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your filters to find more properties.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
