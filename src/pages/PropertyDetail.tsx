import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Building2, 
  Maximize, 
  BedSingle, 
  Bath, 
  Check, 
  ArrowLeft,
  Calendar,
  User,
  Mail,
  Phone,
  Send
} from 'lucide-react';
import PropertyGallery from '../components/ui/PropertyGallery';
import { getPropertyById } from '../data/properties';
import { formatPrice } from '../utils/formatters';
import { InquiryFormData } from '../types';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || '');
  
  const [inquiryForm, setInquiryForm] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyId: id,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="section">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <Building2 size={64} className="text-primary-300 mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">Property Not Found</h2>
            <p className="text-gray-500 mb-6">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/properties" className="btn-primary">
              <ArrowLeft size={18} className="mr-2" /> Back to All Properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const {
    title,
    type,
    purpose,
    price,
    location,
    area,
    bedrooms,
    bathrooms,
    images,
    description,
    amenities,
    contactPhone,
    contactEmail,
  } = property;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setInquiryForm({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyId: id,
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="property-detail-page">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <Link to="/properties" className="text-primary-500 flex items-center hover:underline">
            <ArrowLeft size={18} className="mr-2" /> Back to Properties
          </Link>
        </div>
      </div>
      
      {/* Property Header */}
      <section className="bg-white pt-8 pb-6 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-primary-500 text-white text-xs uppercase px-3 py-1 rounded-full">
                  {purpose === 'sale' ? 'For Sale' : 'For Rent'}
                </span>
                <span className="bg-secondary-500 text-primary-900 text-xs uppercase px-3 py-1 rounded-full">
                  {type === 'residential' ? 'Residential' : 'Commercial'}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-2">
                {title}
              </h1>
              <div className="flex items-center text-gray-500 mb-2">
                <MapPin size={18} className="text-secondary-500 mr-2" />
                <span>{location}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-primary-500">
                {formatPrice(price)}
                {purpose === 'rent' && <span className="text-sm font-normal text-gray-500">/month</span>}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {/* Property ID for reference */}
                Property ID: {id}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Property Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <PropertyGallery images={images} title={title} />
              </div>
              
              {/* Description */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Property Details
                </h2>
                
                {/* Features Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 border-b border-gray-100 pb-6">
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Maximize size={24} className="text-secondary-500 mb-2" />
                    <span className="text-sm text-gray-500">Area</span>
                    <span className="font-bold text-primary-900">{area} sq.ft</span>
                  </div>
                  
                  {type === 'residential' && bedrooms ? (
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <BedSingle size={24} className="text-secondary-500 mb-2" />
                      <span className="text-sm text-gray-500">Bedrooms</span>
                      <span className="font-bold text-primary-900">{bedrooms}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Building2 size={24} className="text-secondary-500 mb-2" />
                      <span className="text-sm text-gray-500">Type</span>
                      <span className="font-bold text-primary-900 capitalize">{type}</span>
                    </div>
                  )}
                  
                  {type === 'residential' && bathrooms ? (
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Bath size={24} className="text-secondary-500 mb-2" />
                      <span className="text-sm text-gray-500">Bathrooms</span>
                      <span className="font-bold text-primary-900">{bathrooms}</span>
                    </div>
                  ) : null}
                  
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Calendar size={24} className="text-secondary-500 mb-2" />
                    <span className="text-sm text-gray-500">Available</span>
                    <span className="font-bold text-primary-900">Immediately</span>
                  </div>
                </div>
                
                {/* Description Text */}
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-primary-900 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {description}
                  </p>
                </div>
                
                {/* Amenities */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary-900 mb-3">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Check size={18} className="text-secondary-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Location Map */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Location
                </h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
                  <iframe 
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location + ', Gurgaon, Haryana, India')}`}
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="Property Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Contact Info */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                    Contact Agent
                  </h3>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      BB
                    </div>
                    <div>
                      <p className="font-bold text-primary-900">BB Estates</p>
                      <p className="text-gray-500 text-sm">Premium Property Specialist</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Phone size={18} className="text-secondary-500 mr-3" />
                      <a href={`tel:${contactPhone}`} className="text-primary-500 hover:underline">
                        {contactPhone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail size={18} className="text-secondary-500 mr-3" />
                      <a href={`mailto:${contactEmail}`} className="text-primary-500 hover:underline">
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Inquiry Form */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                    Interested in this property?
                  </h3>
                  
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <Check size={32} className="text-green-500 mx-auto mb-2" />
                      <h4 className="text-lg font-bold text-green-800 mb-1">Inquiry Submitted!</h4>
                      <p className="text-green-700">
                        Thank you for your interest. Our team will contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name*
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={inquiryForm.name}
                            onChange={handleInputChange}
                            required
                            className="pl-10 input-field"
                            placeholder="John Smith"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={inquiryForm.email}
                            onChange={handleInputChange}
                            required
                            className="pl-10 input-field"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number*
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={inquiryForm.phone}
                            onChange={handleInputChange}
                            required
                            className="pl-10 input-field"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={inquiryForm.message}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="I'm interested in this property and would like to schedule a viewing."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn-primary w-full flex justify-center items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <Send size={18} className="mr-2" />
                            Send Inquiry
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;