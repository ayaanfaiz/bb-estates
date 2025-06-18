export interface Property {
  id: string;
  title: string;
  type: 'residential' | 'commercial';
  purpose: 'sale' | 'rent';
  price: number;
  location: string;
  area: number; // in sq. ft.
  bedrooms?: number;
  bathrooms?: number;
  images: string[];
  featured: boolean;
  description: string;
  amenities: string[];
  contactPhone: string;
  contactEmail: string;
}

export type PropertyFilterType = {
  location: string;
  type: 'all' | 'residential' | 'commercial';
  purpose: 'all' | 'sale' | 'rent';
  minPrice: number;
  maxPrice: number;
  minBedrooms?: number;
};

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
}