import { Property } from '../types/property';

export const properties: Property[] = [
  // Enugu Houses
  {
    id: 'enugu-h1',
    title: 'Luxury Villa',
    location: 'Independence Layout, Enugu',
    state: 'Enugu',
    price: 450000000,
    type: 'For Sale',
    category: 'House',
    beds: 5,
    baths: 6,
    sqft: 550,
    features: [
      'Swimming Pool',
      'Garden',
      'Security Post',
      'CCTV',
      'Backup Power'
    ],
    description: 'Magnificent 5 bedroom villa with modern finishes and top-notch facilities.',
    images: [
      '/images/luxury-house-1.jpg',
      '/images/luxury-house-2.jpg',
      '/images/luxury-house-3.jpg'
    ],
    agent: {
      name: 'John Doe',
      phone: '+234 906 408 8365',
      email: 'john@jeff-realty.com'
    },
    status: 'Available',
    yearBuilt: 2022,
    parkingSpaces: 4,
    furnished: true,
    featured: true,
    createdAt: '2023-01-15',
    imageUrl: '/images/luxury-house-1.jpg',
    propertyType: 'Villa'
  },
  {
    id: 'enugu-h2',
    title: 'Modern 3 Bedroom Apartment',
    location: 'New Haven, Enugu',
    state: 'Enugu',
    price: 85000000,
    type: 'For Sale',
    category: 'House',
    beds: 3,
    baths: 4,
    sqft: 300,
    features: [
      'All Rooms Ensuite',
      'Modern Kitchen',
      'Balcony',
      'Car Park'
    ],
    description: 'Beautiful 3 bedroom apartment in New Haven. Features modern amenities and excellent finishing.',
    images: [
      '/images/modern-apartment-1.jpg',
      '/images/modern-apartment-2.jpg',
      '/images/modern-apartment-3.jpg',
      '/images/modern-apartment-4.jpg'
    ],
    agent: {
      name: 'Chioma Nnamdi',
      phone: '+234 906 408 8365',
      email: 'chioma@jeff-realty.com'
    },
    status: 'Available',
    yearBuilt: 2022,
    parkingSpaces: 2,
    featured: false,
    createdAt: '2023-01-15',
    imageUrl: '/images/modern-apartment-1.jpg',
    propertyType: 'Apartment'
  },
  // Calabar Houses
  {
    id: 'calabar-h1',
    title: 'Waterfront Villa',
    location: 'Marina Resort Area, Calabar',
    state: 'Calabar',
    price: 250000000,
    type: 'For Sale',
    category: 'House',
    beds: 6,
    baths: 7,
    sqft: 800,
    features: [
      'Waterfront View',
      'Private Dock',
      'Swimming Pool',
      'Garden'
    ],
    description: 'Magnificent waterfront villa with breathtaking views of the marina. Features high-end finishes and luxury amenities.',
    images: [
      '/images/villa-1.jpg',
      '/images/villa-2.jpg',
      '/images/villa-3.jpg',
      '/images/villa-4.jpg'
    ],
    agent: {
      name: 'David Effiong',
      phone: '+234 906 408 8365',
      email: 'david@jeff-realty.com',
      whatsapp: '+234 906 408 8365'
    },
    status: 'Available',
    yearBuilt: 2021,
    parkingSpaces: 6,
    furnished: true,
    featured: true,
    createdAt: '2023-01-15',
    imageUrl: '/images/villa-1.jpg',
    propertyType: 'Villa'
  },
  {
    id: 'calabar-h2',
    title: 'Executive Mansion',
    location: 'State Housing Estate, Calabar',
    state: 'Calabar',
    price: 180000000,
    type: 'For Sale',
    category: 'House',
    beds: 5,
    baths: 6,
    sqft: 600,
    features: [
      'Cinema Room',
      'Wine Cellar',
      'Smart Home System',
      'Gym'
    ],
    description: 'Elegant mansion in the prestigious State Housing Estate. Perfect for those who appreciate luxury and comfort.',
    images: [
      '/images/mansion-1.jpg',
      '/images/mansion-2.jpg',
      '/images/mansion-3.jpg',
      '/images/mansion-4.jpg'
    ],
    agent: {
      name: 'Sarah Okon',
      phone: '+234 906 408 8365',
      email: 'sarah@jeff-realty.com'
    },
    status: 'Available',
    yearBuilt: 2022,
    parkingSpaces: 4,
    furnished: true,
    featured: false,
    createdAt: '2023-01-15',
    imageUrl: '/images/mansion-1.jpg',
    propertyType: 'Mansion'
  },
  // Enugu Land
  {
    id: 'enugu-l1',
    title: 'Commercial Plot',
    location: 'Zik Avenue, Enugu',
    state: 'Enugu',
    price: 120000000,
    type: 'For Sale',
    category: 'Land',
    plotSize: '1000 sqm',
    features: [
      'C of O',
      'Fenced',
      'Gated Estate',
      'Good Road Network'
    ],
    description: 'Prime commercial land along the busy Zik Avenue. Perfect for commercial development.',
    images: [
      '/images/modern-city-1.jpg',
      '/images/modern-city-2.jpg',
      '/images/modern-city-3.jpg'
    ],
    agent: {
      name: 'Emmanuel Okoro',
      phone: '+234 906 408 8365',
      email: 'emmanuel@jeff-realty.com'
    },
    status: 'Available',
    featured: false,
    createdAt: '2023-01-15',
    imageUrl: '/images/modern-city-1.jpg',
    propertyType: 'Land'
  },
  // Calabar Land
  {
    id: 'calabar-l1',
    title: 'Waterfront Development Land',
    location: 'Marina, Calabar',
    state: 'Calabar',
    price: 200000000,
    type: 'For Sale',
    category: 'Land',
    plotSize: '2000 sqm',
    features: [
      'Waterfront Access',
      'C of O',
      'Survey Plan',
      'Developmental Control Approved'
    ],
    description: 'Rare waterfront land perfect for hotel or luxury apartment development.',
    images: [
      '/images/nigeria-city-1.jpg',
      '/images/nigeria-city-2.jpg',
      '/images/nigeria-city-3.jpg'
    ],
    agent: {
      name: 'David Effiong',
      phone: '+234 906 408 8365',
      email: 'david@jeff-realty.com'
    },
    status: 'Available',
    featured: false,
    createdAt: '2023-01-15',
    imageUrl: '/images/nigeria-city-1.jpg',
    propertyType: 'Land'
  }
];

export type { Property };
