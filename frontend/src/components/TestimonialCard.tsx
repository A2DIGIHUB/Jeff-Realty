import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  role,
  content,
  rating,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 relative">
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 text-6xl font-serif text-primary/10">"</div>

      <div className="space-y-6">
        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-yellow-400' : 'text-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-600 leading-relaxed line-clamp-4">{content}</p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
