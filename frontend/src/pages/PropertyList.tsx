import React, { useState, useMemo } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import PropertyCard from '../components/PropertyCard';
import PropertyFilterBar from '../components/PropertyFilterBar';
import { Property } from '../types/property';
import { useInView } from 'react-intersection-observer';
import HeroAnimation from '../components/HeroAnimation';

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000000]); // 1B Naira max
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  // Calculate max price for the price range slider
  const maxPrice = useMemo(() => {
    return Math.max(...properties.map(p => p.price));
  }, [properties]);

  // Filter options
  const states = useMemo(() => {
    const stateCount = properties.reduce((acc, property) => {
      acc[property.state] = (acc[property.state] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      { value: 'all', label: 'All Locations' },
      ...Object.entries(stateCount).map(([state, count]) => ({
        value: state.toLowerCase(),
        label: state,
        count,
      })),
    ];
  }, [properties]);

  const categories = useMemo(() => {
    const categoryCount = properties.reduce((acc, property) => {
      acc[property.category] = (acc[property.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      { value: 'all', label: 'All Types' },
      ...Object.entries(categoryCount).map(([category, count]) => ({
        value: category.toLowerCase(),
        label: category,
        count,
      })),
    ];
  }, [properties]);

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = properties.filter(property => {
      const stateMatch = selectedState === 'all' || 
        property.state.toLowerCase() === selectedState;
      
      const categoryMatch = selectedCategory === 'all' || 
        property.category.toLowerCase() === selectedCategory;

      const searchMatch = !searchQuery || 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());

      const priceMatch = property.price >= priceRange[0] && property.price <= priceRange[1];

      return stateMatch && categoryMatch && searchMatch && priceMatch;
    });

    // Sort properties
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
          const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
          return dateB.getTime() - dateA.getTime();
        });
        break;
      default:
        // Featured sorting (you can implement your own logic)
        break;
    }

    return filtered;
  }, [properties, selectedState, selectedCategory, searchQuery, priceRange, sortBy]);

  // Intersection Observer for lazy loading
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <HeroAnimation />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Perfect Property
            </h1>
            <p className="mt-6 max-w-xl text-xl text-gray-300">
              Explore our curated selection of premium properties in Enugu and Calabar
            </p>

            {/* Search Bar */}
            <div className="mt-10 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-lg border-0 pl-12 pr-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <PropertyFilterBar
        states={states}
        categories={categories}
        priceRange={priceRange}
        maxPrice={maxPrice}
        onStateChange={setSelectedState}
        onCategoryChange={setSelectedCategory}
        onPriceRangeChange={setPriceRange}
        selectedState={selectedState}
        selectedCategory={selectedCategory}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium text-gray-900">{filteredProperties.length}</span> properties
            </p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-lg border-gray-300 py-2 pl-3 pr-10 text-sm focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <div className="flex rounded-lg border border-gray-300 p-1">
              <button
                onClick={() => setViewType('grid')}
                className={`p-2 rounded ${
                  viewType === 'grid' ? 'bg-primary text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-2 rounded ${
                  viewType === 'list' ? 'bg-primary text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No properties found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSelectedState('all');
                  setSelectedCategory('all');
                  setPriceRange([0, maxPrice]);
                  setSearchQuery('');
                }}
                className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Clear all filters
              </button>
            </div>
          </div>
        ) : (
          <div
            className={
              viewType === 'grid'
                ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
                : 'space-y-6'
            }
          >
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                ref={index === filteredProperties.length - 1 ? ref : undefined}
                className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
