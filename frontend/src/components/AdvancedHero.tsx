import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface AdvancedHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  theme?: 'light' | 'dark';
  showBuilding?: boolean;
  ctaText?: string;
  ctaLink?: string;
  fullHeight?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const AdvancedHero: React.FC<AdvancedHeroProps> = ({
  title,
  subtitle,
  backgroundImage = '/images/luxury-home.jpg',
  theme = 'dark',
  showBuilding,
  ctaText,
  ctaLink,
  fullHeight = false,
  children,
  className = ''
}) => {
  const heightClass = fullHeight ? 'min-h-[calc(100vh-4rem)]' : 'min-h-[60vh]';

  return (
    <section className={`relative ${heightClass} ${className} mt-16`}>
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: '50% 65%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full transform -translate-x-24 -translate-y-24" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full transform translate-x-24 translate-y-24" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative h-full z-10">
        <div className="h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center py-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-8 max-w-3xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight">
                  {title.split(' ').map((word, i) => (
                    <span 
                      key={i} 
                      className="inline-block hover:text-primary transition-colors duration-300"
                    >
                      {word}{' '}
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                  {subtitle}
                </p>

                {/* CTA Button */}
                {ctaText && ctaLink && !children && (
                  <div className="mt-8">
                    <a
                      href={ctaLink}
                      className="group inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg shadow-lg text-black bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      {ctaText}
                      <ChevronRightIcon 
                        className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                        aria-hidden="true" 
                      />
                    </a>
                  </div>
                )}
              </div>

              {/* Search Section or Additional Content */}
              {children && (
                <div className="mt-16 w-full max-w-5xl mx-auto">
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedHero;
