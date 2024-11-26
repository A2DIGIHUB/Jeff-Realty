import React, { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { XMarkIcon, FunnelIcon, HomeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PriceRangeSlider from './PriceRangeSlider';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
  icon?: React.ComponentType<{ className?: string }>;
}

interface PropertyFilterBarProps {
  states: FilterOption[];
  categories: FilterOption[];
  priceRange: [number, number];
  maxPrice: number;
  onStateChange: (state: string) => void;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  selectedState: string;
  selectedCategory: string;
}

const PropertyFilterBar: React.FC<PropertyFilterBarProps> = ({
  states,
  categories,
  priceRange,
  maxPrice,
  onStateChange,
  onCategoryChange,
  onPriceRangeChange,
  selectedState,
  selectedCategory,
}) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const FilterButton = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
        ${isActive 
          ? 'bg-primary text-white hover:bg-primary-dark' 
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
        }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Desktop Filter Bar */}
      <div className="hidden lg:block bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            {/* Location Filter */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-300">
                    <MapPinIcon className="h-5 w-5 text-gray-400" />
                    <span>Location</span>
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 mt-2 w-72 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                      <div className="space-y-2">
                        {states.map((state) => (
                          <button
                            key={state.value}
                            onClick={() => onStateChange(state.value)}
                            className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                              selectedState === state.value
                                ? 'bg-primary/10 text-primary'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {state.label}
                            {state.count !== undefined && (
                              <span className="ml-2 text-gray-400">({state.count})</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>

            {/* Property Type Filter */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-300">
                    <HomeIcon className="h-5 w-5 text-gray-400" />
                    <span>Property Type</span>
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 mt-2 w-72 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category.value}
                            onClick={() => onCategoryChange(category.value)}
                            className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                              selectedCategory === category.value
                                ? 'bg-primary/10 text-primary'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {category.label}
                            {category.count !== undefined && (
                              <span className="ml-2 text-gray-400">({category.count})</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>

            {/* Price Range Filter */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-300">
                    <span>Price Range</span>
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 mt-2 w-80 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                      <PriceRangeSlider
                        min={0}
                        max={maxPrice}
                        value={priceRange}
                        onChange={onPriceRangeChange}
                      />
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
        >
          <FunnelIcon className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Mobile Filter Modal */}
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        open={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50"
                onClick={() => setIsFilterModalOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-4 px-4">
              {/* Location Filter */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Location</h3>
                <div className="space-y-2">
                  {states.map((state) => (
                    <button
                      key={state.value}
                      onClick={() => {
                        onStateChange(state.value);
                        setIsFilterModalOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                        selectedState === state.value
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {state.label}
                      {state.count !== undefined && (
                        <span className="ml-2 text-gray-400">({state.count})</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type Filter */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Property Type</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => {
                        onCategoryChange(category.value);
                        setIsFilterModalOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                        selectedCategory === category.value
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category.label}
                      {category.count !== undefined && (
                        <span className="ml-2 text-gray-400">({category.count})</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Price Range</h3>
                <PriceRangeSlider
                  min={0}
                  max={maxPrice}
                  value={priceRange}
                  onChange={onPriceRangeChange}
                />
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default PropertyFilterBar;
