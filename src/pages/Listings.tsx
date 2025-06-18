import React, { useState } from 'react';
import { MapPin, Home, Building } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import PropertyFilter from '../components/ui/PropertyFilter';
import { getFilteredProperties, properties } from '../data/properties';
import { PropertyFilter as PropertyFilterType } from '../types';

const Listings: React.FC = () => {
  const [filter, setFilter] = useState<Partial<PropertyFilterType>>({});
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterChange = (newFilter: Partial<PropertyFilterType>) => {
    setFilter(newFilter);
    setFilteredProperties(getFilteredProperties(newFilter));
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Count properties by type and purpose
  const residentialCount = properties.filter(p => p.type === 'residential').length;
  const commercialCount = properties.filter(p => p.type === 'commercial').length;
  const forSaleCount = properties.filter(p => p.purpose === 'sale').length;
  const forRentCount = properties.filter(p => p.purpose === 'rent').length;

  return (
    <div className="listings-page">
      {/* Page Header */}
      <section className="relative bg-primary-500 py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
              Find Your Perfect Property
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Browse our extensive collection of premium properties in Gurgaon
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Properties Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Statistics & Quick Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-6">
                  <button 
                    onClick={toggleFilter}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {showFilter ? 'Hide Filters' : 'Show Filters'}
                  </button>
                </div>

                {/* Property Filter - Mobile */}
                <div className={`lg:hidden ${showFilter ? 'block' : 'hidden'} mb-6`}>
                  <PropertyFilter onFilterChange={handleFilterChange} />
                </div>

                {/* Property Filter - Desktop */}
                <div className="hidden lg:block mb-8">
                  <PropertyFilter onFilterChange={handleFilterChange} />
                </div>

                {/* Property Stats */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                    Property Types
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Home size={18} className="text-secondary-500 mr-2" />
                        <span>Residential</span>
                      </div>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm">
                        {residentialCount}
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Building size={18} className="text-secondary-500 mr-2" />
                        <span>Commercial</span>
                      </div>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm">
                        {commercialCount}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                    Purpose
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span>For Sale</span>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm">
                        {forSaleCount}
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>For Rent</span>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm">
                        {forRentCount}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Featured Locations */}
                <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                    Featured Locations
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <MapPin size={18} className="text-secondary-500 mr-2" />
                      <span>DLF Phase 1</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={18} className="text-secondary-500 mr-2" />
                      <span>Golf Course Road</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={18} className="text-secondary-500 mr-2" />
                      <span>Cyber City</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={18} className="text-secondary-500 mr-2" />
                      <span>Sushant Lok</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={18} className="text-secondary-500 mr-2" />
                      <span>MG Road</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content - Property Listings */}
            <div className="lg:col-span-3">
              {/* Results Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-primary-900">
                      {filteredProperties.length} Properties Found
                    </h2>
                    {Object.keys(filter).length > 0 && (
                      <p className="text-gray-500 mt-1">
                        Filtered results based on your criteria
                      </p>
                    )}
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <select className="input-field min-w-[200px]">
                      <option value="newest">Newest First</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="area-asc">Area: Small to Large</option>
                      <option value="area-desc">Area: Large to Small</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Property Grid */}
              {filteredProperties.length === 0 ? (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                  <Building size={64} className="text-primary-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-primary-900 mb-2">No Properties Found</h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any properties matching your search criteria.
                  </p>
                  <button 
                    onClick={() => handleFilterChange({})}
                    className="btn-outline"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;