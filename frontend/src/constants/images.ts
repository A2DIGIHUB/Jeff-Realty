import { getPublicImageUrl } from '../utils/imageUtils';

// Hero and CTA Images
export const HERO_IMAGE = getPublicImageUrl('images/luxury-house-1.jpg');
export const CTA_IMAGE = getPublicImageUrl('images/modern-house-1.jpg');

// Property Images - Enugu Houses
export const ENUGU_HOUSE_IMAGES = {
  luxury_duplex: [
    getPublicImageUrl('images/luxury-house-1.jpg'),
    getPublicImageUrl('images/luxury-house-2.jpg'),
    getPublicImageUrl('images/luxury-house-3.jpg'),
  ],
  smart_home: [
    getPublicImageUrl('images/modern-house-1.jpg'),
    getPublicImageUrl('images/modern-house-2.jpg'),
    getPublicImageUrl('images/modern-house-3.jpg'),
  ],
  apartment: [
    getPublicImageUrl('images/modern-apartment-1.jpg'),
    getPublicImageUrl('images/modern-apartment-2.jpg'),
    getPublicImageUrl('images/modern-apartment-3.jpg'),
  ],
};

// Property Images - Enugu Land
export const ENUGU_LAND_IMAGES = {
  commercial: [
    getPublicImageUrl('images/modern-city-1.jpg'),
    getPublicImageUrl('images/modern-city-2.jpg'),
  ],
  residential: [
    getPublicImageUrl('images/african-city-1.jpg'),
    getPublicImageUrl('images/african-city-2.jpg'),
  ],
};

// Property Images - Calabar Houses
export const CALABAR_HOUSE_IMAGES = {
  villa: [
    getPublicImageUrl('images/villa-1.jpg'),
    getPublicImageUrl('images/villa-2.jpg'),
    getPublicImageUrl('images/villa-3.jpg'),
  ],
  waterfront: [
    getPublicImageUrl('images/mansion-1.jpg'),
    getPublicImageUrl('images/mansion-2.jpg'),
    getPublicImageUrl('images/mansion-3.jpg'),
  ],
};

// Property Images - Calabar Land
export const CALABAR_LAND_IMAGES = {
  waterfront_development: [
    getPublicImageUrl('images/nigeria-city-1.jpg'),
    getPublicImageUrl('images/nigeria-city-2.jpg'),
  ],
  industrial: [
    getPublicImageUrl('images/modern-city-3.jpg'),
    getPublicImageUrl('images/modern-city-4.jpg'),
  ],
};

// Property-specific Images
export const PROPERTY_IMAGES = {
  INDEPENDENCE_LAYOUT: getPublicImageUrl('images/luxury-house-4.jpg'),
  GRA_APARTMENT: getPublicImageUrl('images/modern-apartment-4.jpg'),
  NEW_HAVEN_FLAT: getPublicImageUrl('images/modern-house-4.jpg'),
  TRANS_EKULU_DUPLEX: getPublicImageUrl('images/mansion-4.jpg')
};

// Location Images
export const LOCATION_IMAGES = {
  enugu: {
    independence_layout: getPublicImageUrl('images/modern-city-1.jpg'),
    gra: getPublicImageUrl('images/african-city-3.jpg'),
    new_haven: getPublicImageUrl('images/nigeria-city-3.jpg')
  },
  calabar: {
    marina: getPublicImageUrl('images/nigeria-city-4.jpg'),
    state_housing: getPublicImageUrl('images/modern-city-5.jpg'),
    free_trade_zone: getPublicImageUrl('images/african-city-4.jpg')
  },
  LUXURY_HOMES: getPublicImageUrl('images/modern-city-1.jpg'),
  SERVICED_APARTMENTS: getPublicImageUrl('images/nigeria-city-5.jpg'),
  LAND_PLOTS: getPublicImageUrl('images/african-city-5.jpg'),
  NEW_DEVELOPMENTS: getPublicImageUrl('images/modern-city-2.jpg')
};

// Category Images
export const CATEGORY_IMAGES = {
  luxury_homes: getPublicImageUrl('images/luxury-house-5.jpg'),
  apartments: getPublicImageUrl('images/modern-apartment-5.jpg'),
  land: getPublicImageUrl('images/modern-city-3.jpg'),
  waterfront: getPublicImageUrl('images/villa-5.jpg')
};

// Agent Images
export const AGENT_IMAGES = {
  profile: getPublicImageUrl('images/real-estate-agent-1.jpg'),
  team: [
    getPublicImageUrl('images/business-person-1.jpg'),
    getPublicImageUrl('images/african-business-1.jpg'),
    getPublicImageUrl('images/real-estate-agent-2.jpg'),
    getPublicImageUrl('images/business-person-2.jpg'),
  ]
};

// Testimonial Images
export const TESTIMONIAL_IMAGES = {
  TESTIMONIAL_1: getPublicImageUrl('images/african-business-2.jpg'),
  TESTIMONIAL_2: getPublicImageUrl('images/business-person-3.jpg'),
  TESTIMONIAL_3: getPublicImageUrl('images/african-business-3.jpg')
};
