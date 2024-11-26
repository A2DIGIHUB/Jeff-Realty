import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface PropertyMapProps {
  location: string;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ location }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <MapPinIcon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold text-gray-900">Location</h2>
      </div>

      <div className="mt-4">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <iframe
            title="Property Location"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              location
            )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </div>
        <p className="mt-2 text-sm text-gray-600">{location}</p>
      </div>
    </div>
  );
};

export default PropertyMap;
