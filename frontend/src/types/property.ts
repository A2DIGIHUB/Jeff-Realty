export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  state: 'Enugu' | 'Calabar';
  type: 'For Sale' | 'For Rent';
  category: 'Land' | 'House';
  beds?: number;
  baths?: number;
  sqft?: number;
  plotSize?: string;
  features: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    whatsapp?: string;
  };
  status: 'Available' | 'Sold' | 'Pending';
  yearBuilt?: number;
  parkingSpaces?: number;
  furnished?: boolean;
  propertyTags?: string[];
  virtualTour?: string;
  video?: string;
  featured?: boolean;
  createdAt?: string;
  imageUrl?: string;
  propertyType?: string;
}
