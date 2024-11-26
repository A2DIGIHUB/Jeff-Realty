import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  overlayOpacity?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage = '/images/hero-pattern.png',
  overlayOpacity = 'bg-opacity-90'
}) => {
  return (
    <div className="relative bg-primary">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary to-primary-dark ${overlayOpacity}`} />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="h-full w-full">
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-12 translate-x-12 transform rounded-full bg-primary-light opacity-20 blur-3xl filter"></div>
          <div className="absolute left-0 bottom-0 h-48 w-48 translate-y-12 -translate-x-12 transform rounded-full bg-primary-dark opacity-20 blur-3xl filter"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title.split(' ').map((word, index) => (
              <span 
                key={index}
                className="inline-block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-100 animate-fade-in-delayed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 fill-current text-white"
          viewBox="0 0 1440 48"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 48h1440V0c-211.28 41.406-468.37 48-771.26 48C365.85 48 108.76 41.406 0 0v48z" />
        </svg>
      </div>
    </div>
  );
};

export default PageHero;
