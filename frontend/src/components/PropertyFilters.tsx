import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface PropertyFiltersProps {
  states: FilterOption[];
  categories: FilterOption[];
  priceRanges: FilterOption[];
  selectedState: string;
  selectedCategory: string;
  selectedPriceRange: string;
  onStateChange: (state: string) => void;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  states,
  categories,
  priceRanges,
  selectedState,
  selectedCategory,
  selectedPriceRange,
  onStateChange,
  onCategoryChange,
  onPriceRangeChange,
}) => {
  const filters = [
    {
      id: 'state',
      name: 'Location',
      options: states,
      selected: selectedState,
      onChange: onStateChange,
    },
    {
      id: 'category',
      name: 'Property Type',
      options: categories,
      selected: selectedCategory,
      onChange: onCategoryChange,
    },
    {
      id: 'price',
      name: 'Price Range',
      options: priceRanges,
      selected: selectedPriceRange,
      onChange: onPriceRangeChange,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {filters.map((section) => (
        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6 px-4">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    <ChevronDownIcon
                      className={`h-5 w-5 ${open ? 'rotate-180 transform' : ''} duration-200`}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {section.options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`filter-${section.id}-${option.value}`}
                        name={`filter-${section.id}`}
                        value={option.value}
                        checked={option.value === section.selected}
                        onChange={() => section.onChange(option.value)}
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${option.value}`}
                        className="ml-3 text-sm text-gray-600 cursor-pointer hover:text-gray-900"
                      >
                        {option.label}
                        {option.count !== undefined && (
                          <span className="ml-1 text-gray-400">({option.count})</span>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default PropertyFilters;
