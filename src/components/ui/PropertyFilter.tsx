import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { PropertyFilterType } from '../../types';

interface PropertyFilterProps {
  onFilterChange: (filter: Partial<PropertyFilterType>) => void;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<Partial<PropertyFilterType>>({
    location: '',
    type: 'all',
    purpose: 'all',
    minPrice: 0,
    maxPrice: 100000000,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Handle numeric values
    if (name === 'minPrice' || name === 'maxPrice' || name === 'minBedrooms') {
      setFilter({
        ...filter,
        [name]: value === '' ? undefined : Number(value),
      });
    } else {
      setFilter({
        ...filter,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filter);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-display font-bold text-primary-500 mb-6">Find Your Perfect Property</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Any location in Gurgaon"
              value={filter.location}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          
          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select
              id="type"
              name="type"
              value={filter.type}
              onChange={handleChange}
              className="input-field"
            >
              <option value="all">All Types</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          
          {/* Purpose */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
              Purpose
            </label>
            <select
              id="purpose"
              name="purpose"
              value={filter.purpose}
              onChange={handleChange}
              className="input-field"
            >
              <option value="all">Buy or Rent</option>
              <option value="sale">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          
          {/* Min Price */}
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Min Price (₹)
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Minimum price"
              value={filter.minPrice === undefined ? '' : filter.minPrice}
              onChange={handleChange}
              className="input-field"
              min="0"
              step="10000"
            />
          </div>
          
          {/* Max Price */}
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Max Price (₹)
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Maximum price"
              value={filter.maxPrice === undefined ? '' : filter.maxPrice}
              onChange={handleChange}
              className="input-field"
              min="0"
              step="10000"
            />
          </div>
          
          {/* Min Bedrooms (only show for residential) */}
          {filter.type === 'residential' || filter.type === 'all' ? (
            <div>
              <label htmlFor="minBedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                Min Bedrooms
              </label>
              <select
                id="minBedrooms"
                name="minBedrooms"
                value={filter.minBedrooms === undefined ? '' : filter.minBedrooms}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
          ) : null}
        </div>
        
        <button 
          type="submit" 
          className="btn-primary w-full flex justify-center items-center"
        >
          <Search size={18} className="mr-2" />
          Search Properties
        </button>
      </form>
    </div>
  );
};

export default PropertyFilter;