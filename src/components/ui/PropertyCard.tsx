import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Maximize, Building, BedSingle, Bath } from 'lucide-react';
import { Property } from '../../types';
import { formatPrice } from '../../utils/formatters';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    id,
    title,
    type,
    purpose,
    price,
    location,
    area,
    bedrooms,
    bathrooms,
    images,
  } = property;

  return (
    <Link 
      to={`/properties/${id}`}
      className="property-card group block animate-fade-in"
    >
      {/* Property Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="bg-primary-500 text-white text-xs uppercase px-3 py-1 rounded-full">
            {purpose === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
          <span className="bg-secondary-500 text-primary-900 text-xs uppercase px-3 py-1 rounded-full">
            {type === 'residential' ? 'Residential' : 'Commercial'}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5">
        <h3 className="text-xl font-display font-bold text-primary-900 mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="text-secondary-500 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <p className="text-2xl font-bold text-primary-500 mb-4">
          {formatPrice(price)}
          {purpose === 'rent' && <span className="text-sm font-normal text-gray-500">/month</span>}
        </p>
        
        {/* Property Features */}
        <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
          <div className="flex items-center">
            <Maximize size={16} className="text-secondary-500 mr-2" />
            <span className="text-sm text-gray-700">{area} sq.ft</span>
          </div>
          
          {type === 'residential' && bedrooms ? (
            <div className="flex items-center">
              <BedSingle size={16} className="text-secondary-500 mr-2" />
              <span className="text-sm text-gray-700">{bedrooms} Beds</span>
            </div>
          ) : (
            <div className="flex items-center">
              <Building size={16} className="text-secondary-500 mr-2" />
              <span className="text-sm text-gray-700">{type}</span>
            </div>
          )}
          
          {type === 'residential' && bathrooms ? (
            <div className="flex items-center col-span-2">
              <Bath size={16} className="text-secondary-500 mr-2" />
              <span className="text-sm text-gray-700">{bathrooms} Baths</span>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;