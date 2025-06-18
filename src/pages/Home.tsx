import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { ArrowRight, Home as HomeIcon, Building, Award, Shield } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import { getFeaturedProperties } from '../data/properties';

const Home: React.FC = () => {
  const featuredProperties = getFeaturedProperties();

  // Settings for the hero slider
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  // Settings for the testimonials slider
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative">
        <Slider {...heroSliderSettings} className="hero-slider">
          <div className="relative h-screen min-h-[600px] max-h-[800px]">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" 
              alt="Luxury Home in Gurgaon" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container-custom text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
                  Discover Your Dream Property in Gurgaon
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Premium residential and commercial properties in prime locations across Gurgaon
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <Link to="/properties" className="btn-primary">
                    View All Properties
                  </Link>
                  <Link to="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-primary-500">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-screen min-h-[600px] max-h-[800px]">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" 
              alt="Luxury Apartment in Gurgaon" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container-custom text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
                  Luxury Living in DLF Phase 1
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Exclusive properties in Gurgaon's most prestigious neighborhood
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <Link to="/properties" className="btn-primary">
                    Explore DLF Properties
                  </Link>
                  <Link to="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-primary-500">
                    Schedule a Viewing
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-screen min-h-[600px] max-h-[800px]">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
              alt="Commercial Property in Gurgaon" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container-custom text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
                  Premium Commercial Spaces
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Elevate your business with our exclusive commercial properties
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <Link to="/properties" className="btn-primary">
                    View Commercial Properties
                  </Link>
                  <Link to="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-primary-500">
                    Business Inquiries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        {/* Property Search Overlay */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-30 px-4">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="quick-location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="quick-location"
                    placeholder="Any location in Gurgaon"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="quick-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    id="quick-type"
                    className="input-field"
                  >
                    <option value="">All Types</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-medium text-gray-700 mb-1 invisible md:visible">
                    &nbsp;
                  </label>
                  <Link to="/properties" className="btn-primary h-full">
                    Search Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="section pt-32 md:pt-40">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Featured Properties</h2>
            <p className="section-subheading mx-auto">
              Discover our hand-picked selection of premium properties across Gurgaon
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/properties" className="btn-primary">
              View All Properties <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-500 mb-6">
                Gurgaon's Premier Real Estate Agency
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At BB Estates, we specialize in premium properties across Gurgaon, with a particular focus on the prestigious DLF Phase 1 area. With over a decade of experience in the local market, we pride ourselves on our deep understanding of Gurgaon's real estate landscape.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're looking to buy, sell, or rent a property, our team of experienced professionals is committed to providing personalized service tailored to your unique needs.
              </p>
              <Link to="/about" className="btn-outline">
                Learn More About Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg" 
                  alt="BB Estates Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary-500 text-primary-900 p-6 rounded-lg shadow-lg">
                <p className="text-xl font-display font-bold">10+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose BB Estates</h2>
            <p className="section-subheading mx-auto">
              We are committed to providing exceptional service and finding the perfect property for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-property text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={30} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">Premium Selection</h3>
              <p className="text-gray-600">
                Curated portfolio of the finest properties in Gurgaon's most desirable locations
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-property text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon size={30} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Gurgaon's neighborhoods, property values, and market trends
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-property text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={30} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">Trusted Advisor</h3>
              <p className="text-gray-600">
                Transparent and ethical service with your best interests at heart
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-property text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Building size={30} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">Full Service</h3>
              <p className="text-gray-600">
                Comprehensive assistance from property search to final transaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience with BB Estates
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...testimonialSettings}>
              <div className="px-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <p className="text-xl italic text-white/90 mb-6">
                    "BB Estates helped us find our dream home in DLF Phase 1. Their knowledge of the area and attention to our specific requirements made the entire process smooth and enjoyable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary-500 text-primary-900 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      AR
                    </div>
                    <div>
                      <p className="font-bold">Amit Rao</p>
                      <p className="text-white/70 text-sm">Homeowner, DLF Phase 1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <p className="text-xl italic text-white/90 mb-6">
                    "As a business owner, finding the right commercial space was crucial. BB Estates understood our needs perfectly and found us an ideal location that has significantly contributed to our growth."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary-500 text-primary-900 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      PS
                    </div>
                    <div>
                      <p className="font-bold">Priya Singh</p>
                      <p className="text-white/70 text-sm">Business Owner, Cyber City</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <p className="text-xl italic text-white/90 mb-6">
                    "I've worked with several real estate agencies in Gurgaon, but BB Estates stands out for their professionalism and dedication. They helped me secure an excellent return on my investment property."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary-500 text-primary-900 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      VK
                    </div>
                    <div>
                      <p className="font-bold">Vikram Kumar</p>
                      <p className="text-white/70 text-sm">Property Investor</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-primary-500 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <Building size="100%" className="text-white" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to discuss your requirements with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/properties" className="btn-secondary">
                  Browse Properties
                </Link>
                <Link to="/contact" className="btn bg-white text-primary-500 hover:bg-gray-100">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;