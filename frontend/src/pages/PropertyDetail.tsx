import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import {
  HeartIcon,
  ShareIcon,
  MapPinIcon,
  HomeIcon,
  CurrencyDollarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { properties } from '../data/properties';
import PropertyMap from '../components/PropertyMap';
import PropertyContactForm from '../components/PropertyContactForm';
import MortgageCalculator from '../components/MortgageCalculator';
import { Link } from 'react-router-dom';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  if (!property) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-gray-600">Property not found</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="relative">
        <div className="h-[70vh] w-full overflow-hidden bg-gray-100">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="h-full w-full object-cover"
          />
          
          {/* Navigation Arrows */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-all hover:bg-white"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-all hover:bg-white"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {currentImageIndex + 1} / {property.images.length}
          </div>

          {/* View Gallery Button */}
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-800 shadow-lg transition-all hover:bg-white"
          >
            View All Photos
          </button>

          {/* Actions */}
          <div className="absolute right-4 top-4 flex items-center gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-all hover:bg-white"
            >
              {isLiked ? (
                <HeartIconSolid className="h-6 w-6 text-red-500" />
              ) : (
                <HeartIcon className="h-6 w-6" />
              )}
            </button>
            <button className="rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-all hover:bg-white">
              <ShareIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Info */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
                <div className="mt-2 flex items-center gap-2 text-gray-600">
                  <MapPinIcon className="h-5 w-5" />
                  <span>{property.location}</span>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(property.price)}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 grid grid-cols-3 gap-4 border-y border-gray-100 py-6">
                {property.beds && (
                  <div className="flex items-center gap-2">
                    <HomeIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {property.beds} Bedrooms
                    </span>
                  </div>
                )}
                {property.baths && (
                  <div className="flex items-center gap-2">
                    <HomeIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {property.baths} Bathrooms
                    </span>
                  </div>
                )}
                {property.sqft && (
                  <div className="flex items-center gap-2">
                    <HomeIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {property.sqft} sqm
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Description</h2>
                <p className="text-gray-600">{property.description}</p>
              </div>

              {/* Features List */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Features & Amenities</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {property.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <HomeIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <PropertyMap location={property.location} />

            {/* Similar Properties */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Similar Properties</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {properties
                  .filter(
                    (p) =>
                      p.id !== property.id &&
                      p.type === property.type &&
                      Math.abs(p.price - property.price) < property.price * 0.2
                  )
                  .slice(0, 2)
                  .map((similarProperty) => (
                    <Link
                      key={similarProperty.id}
                      to={`/properties/${similarProperty.id}`}
                      className="group rounded-lg overflow-hidden bg-gray-50 transition-transform hover:-translate-y-1"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={similarProperty.images[0]}
                          alt={similarProperty.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                          {similarProperty.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">{similarProperty.location}</p>
                        <p className="mt-2 font-medium text-primary">
                          {formatPrice(similarProperty.price)}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <PropertyContactForm
              propertyTitle={property.title}
              agentPhone="+2348012345678"
              agentEmail="agent@jeff-realty.com"
            />
            <MortgageCalculator propertyPrice={property.price} />
          </div>
        </div>
      </div>

      {/* Full Screen Gallery Modal */}
      <Transition show={isGalleryOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsGalleryOpen(false)}
        >
          <div className="fixed inset-0 bg-black/70" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-6xl">
                <div className="relative">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="h-[80vh] w-full rounded-lg object-contain"
                  />
                  <button
                    onClick={() => setIsGalleryOpen(false)}
                    className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                      >
                        <ChevronLeftIcon className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                      >
                        <ChevronRightIcon className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PropertyDetail;
