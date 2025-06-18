import { Property, PropertyFilterType } from '../types';

// Mock data for properties
export const properties: Property[] = [
  {
    id: 'prop1',
    title: 'Luxury Apartment with City View',
    type: 'residential',
    purpose: 'sale',
    price: 20000000,
    location: 'DLF Phase 1, Gurgaon',
    area: 2500,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    ],
    featured: true,
    description: 'This magnificent 4-bedroom apartment offers breathtaking views of the Gurgaon skyline. Located in the prestigious DLF Phase 1 area, it features high-end finishes, spacious living areas, and top-of-the-line amenities. The property includes a private terrace, modular kitchen, and premium Italian marble flooring throughout.',
    amenities: [
      '24/7 Security', 'Swimming Pool', 'Gym', 'Club House', 'Children\'s Play Area', 
      'Power Backup', 'Parking', 'Visitor Parking', 'Gated Community'
    ],
    contactPhone: '+91 98765 43210',
    contactEmail: 'info@bbestates.com',
  },
  {
    id: 'prop2',
    title: 'Modern Office Space',
    type: 'commercial',
    purpose: 'rent',
    price: 350000,
    location: 'Cyber City, Gurgaon',
    area: 3000,
    images: [
      'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg',
      'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
      'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg',
    ],
    featured: true,
    description: 'Premium office space available for rent in the heart of Cyber City. This modern space is ideal for tech companies and startups looking for a prestigious address. The office comes with high-speed internet, conference rooms, and a dedicated reception area.',
    amenities: [
      '24/7 Access', 'Conference Rooms', 'High-speed Internet', 'Power Backup', 
      'Cafeteria', 'Parking', 'Reception Services', 'Security'
    ],
    contactPhone: '+91 98765 43210',
    contactEmail: 'commercial@bbestates.com',
  },
  {
    id: 'prop3',
    title: 'Spacious Family Villa',
    type: 'residential',
    purpose: 'sale',
    price: 45000000,
    location: 'Sushant Lok, Gurgaon',
    area: 4500,
    bedrooms: 5,
    bathrooms: 5,
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    ],
    featured: true,
    description: 'Exquisite 5-bedroom villa in the exclusive Sushant Lok neighborhood. This family home offers luxurious living with a private garden, swimming pool, and entertainment area. The property features premium finishes, smart home technology, and abundant natural light throughout.',
    amenities: [
      'Private Garden', 'Swimming Pool', 'Smart Home System', 'Home Theater', 
      'Modular Kitchen', 'Servant Quarters', 'Multiple Terraces', 'Security System'
    ],
    contactPhone: '+91 98765 43210',
    contactEmail: 'luxury@bbestates.com',
  },
  {
    id: 'prop4',
    title: 'Retail Space in Premium Mall',
    type: 'commercial',
    purpose: 'rent',
    price: 250000,
    location: 'MG Road, Gurgaon',
    area: 1200,
    images: [
      'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg',
      'https://images.pexels.com/photos/264502/pexels-photo-264502.jpeg',
      'https://images.pexels.com/photos/264545/pexels-photo-264545.jpeg',
    ],
    featured: false,
    description: 'Prime retail space available in one of Gurgaon\'s most visited shopping destinations. This store offers excellent visibility, high foot traffic, and modern infrastructure. Ideal for fashion brands, electronics retailers, or specialty stores looking to establish presence in a premium location.',
    amenities: [
      'High Foot Traffic', 'Central Air Conditioning', 'Maintenance Services', 
      'Security', 'Parking', 'Loading/Unloading Area', 'Power Backup'
    ],
    contactPhone: '+91 98765 43210',
    contactEmail: 'retail@bbestates.com',
  },
  {
    id: 'prop5',
    title: 'Elegant 3BHK Apartment',
    type: 'residential',
    purpose: 'rent',
    price: 85000,
    location: 'Golf Course Road, Gurgaon',
    area: 1800,
    bedrooms: 3,
    bathrooms: 2,
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    ],
    featured: false,
    description: 'Beautiful 3-bedroom apartment available for rent on the prestigious Golf Course Road. This fully furnished property offers modern amenities, a balcony with golf course views, and 24/7 security. Located within walking distance of shopping centers and restaurants.',
    amenities: [
      'Fully Furnished', 'Club Membership', 'Swimming Pool', 'Gym', 
      'Power Backup', 'Covered Parking', 'Children\'s Play Area', 'Gated Community'
    ],
    contactPhone: '+91 98765 43210',
    contactEmail: 'rentals@bbestates.com',
  },
  {
    id: 'prop6',
    title: 'Premium Penthouse',
    type: 'residential',
    purpose: 'sale',
    price: 70000000,
    location: 'DLF Phase 1, Gurgaon',
    area: 5500,
    bedrooms: 4,
    bathrooms: 4,
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg',
    ],
    featured: true,
    description: 'Magnificent penthouse in DLF Phase 1 offering unparalleled luxury and breathtaking views. This exclusive property features double-height ceilings, a private terrace garden, infinity pool, and premium imported finishes throughout. A truly unique residence for the most discerning buyers.',
    amenities: [
      'Private Pool', 'Terrace Garden', 'Home Automation', 'Private Elevator',
      'Home Theater', 'Wine Cellar', 'Staff Quarters', '360° City Views'
    ],
    contactPhone: '+91 98765 43210',
    contactEmail: 'premium@bbestates.com',
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getFilteredProperties = (filter: Partial<PropertyFilterType>): Property[] => {
  return properties.filter(property => {
    // Filter by location if provided
    if (filter.location && !property.location.toLowerCase().includes(filter.location.toLowerCase())) {
      return false;
    }
    
    // Filter by type if provided and not 'all'
    if (filter.type && filter.type !== 'all' && property.type !== filter.type) {
      return false;
    }
    
    // Filter by purpose if provided and not 'all'
    if (filter.purpose && filter.purpose !== 'all' && property.purpose !== filter.purpose) {
      return false;
    }
    
    // Filter by price range if provided
    if (filter.minPrice && property.price < filter.minPrice) {
      return false;
    }
    if (filter.maxPrice && property.price > filter.maxPrice) {
      return false;
    }
    
    // Filter by minimum bedrooms if provided
    if (filter.minBedrooms && (!property.bedrooms || property.bedrooms < filter.minBedrooms)) {
      return false;
    }
    
    return true;
  });
};

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.featured);
};