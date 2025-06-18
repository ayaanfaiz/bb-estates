import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Home, 
  Building,
  Map,
  Landmark
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="relative bg-primary-500 py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
              About BB Estates
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Your trusted partner in finding premium properties in Gurgaon
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-500 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2012, BB Estates began with a simple vision: to provide a premium real estate service that focuses on understanding clients' needs and delivering exceptional results. Starting with just a small office in DLF Phase 1, we have grown to become one of Gurgaon's most trusted real estate agencies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What sets us apart is our deep knowledge of the Gurgaon real estate market, our commitment to transparency, and our personalized approach to each client. Whether you're looking to buy, sell, or rent a property, we ensure that your experience is smooth, efficient, and successful.
              </p>
              <p className="text-lg text-gray-700">
                Over the years, we've helped hundreds of families find their dream homes and assisted numerous businesses in securing ideal commercial spaces. Our reputation has been built on trust, expertise, and a genuine passion for real estate.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="BB Estates Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-primary-500 font-display font-bold text-3xl">2012</p>
                <p className="text-gray-600 text-sm">Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Mission & Values</h2>
            <p className="section-subheading mx-auto">
              Guided by our commitment to excellence and client satisfaction
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="w-24 h-24 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto">
                  <Target size={40} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700">
                  To connect people with exceptional properties that enhance their lives and fulfill their aspirations. We are committed to providing personalized, expert guidance through every step of the real estate journey, ensuring each client finds their perfect match in a property that meets their unique needs and desires.
                </p>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-700">
                We are committed to delivering exceptional service and results in every interaction. Our team continuously strives to exceed expectations and set new standards of excellence in the real estate industry.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                Client-Centric
              </h3>
              <p className="text-gray-700">
                Our clients' needs and goals are at the heart of everything we do. We take the time to understand their requirements, preferences, and aspirations to provide tailored solutions that truly address their needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                <Landmark size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-700">
                Honesty and transparency are non-negotiable in our business dealings. We provide clear, accurate information to our clients, ensuring they make informed decisions with complete confidence in our guidance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-700">
                We embrace new technologies and innovative approaches to enhance our services and deliver better results. Our forward-thinking mindset keeps us at the forefront of the real estate industry's evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Expertise</h2>
            <p className="section-subheading mx-auto">
              Specialized knowledge in Gurgaon's premium real estate market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" 
                  alt="Luxury Residential Properties" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                  <Home size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                  Luxury Residential
                </h3>
                <p className="text-gray-700 mb-4">
                  From premium apartments to exclusive villas, we specialize in high-end residential properties that offer exceptional quality and prestigious locations.
                </p>
                <Link to="/properties" className="text-primary-500 font-medium hover:underline flex items-center">
                  View Residential Properties
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg" 
                  alt="Commercial Properties" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                  <Building size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                  Commercial Spaces
                </h3>
                <p className="text-gray-700 mb-4">
                  We offer a range of commercial properties including office spaces, retail outlets, and mixed-use developments in prime business districts.
                </p>
                <Link to="/properties" className="text-primary-500 font-medium hover:underline flex items-center">
                  View Commercial Properties
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg" 
                  alt="Gurgaon Neighborhoods" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                  <Map size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                  Neighborhood Expertise
                </h3>
                <p className="text-gray-700 mb-4">
                  Our team has in-depth knowledge of Gurgaon's diverse neighborhoods, from the prestigious DLF Phase 1 to emerging areas with growth potential.
                </p>
                <Link to="/contact" className="text-primary-500 font-medium hover:underline flex items-center">
                  Consult With Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Leadership Team</h2>
            <p className="section-subheading mx-auto">
              Meet the experienced professionals who lead BB Estates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
                  alt="Rahul Bhalla - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-1">
                  Rahul Bhalla
                </h3>
                <p className="text-secondary-500 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-700 mb-4">
                  With over 15 years of experience in real estate, Rahul founded BB Estates with a vision to transform the property buying experience in Gurgaon.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
                  alt="Priya Sharma - Sales Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-1">
                  Priya Sharma
                </h3>
                <p className="text-secondary-500 font-medium mb-4">Sales Director</p>
                <p className="text-gray-700 mb-4">
                  Priya leads our sales team with her exceptional market knowledge and dedication to matching clients with their perfect properties.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                  alt="Vikram Mehta - Commercial Property Specialist" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-1">
                  Vikram Mehta
                </h3>
                <p className="text-secondary-500 font-medium mb-4">Commercial Property Specialist</p>
                <p className="text-gray-700 mb-4">
                  Vikram specializes in commercial real estate, helping businesses find spaces that enhance their operations and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-primary-500 rounded-xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your real estate needs and discover how we can help you find your perfect property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties" className="btn-secondary">
                Browse Properties
              </Link>
              <Link to="/contact" className="btn bg-white text-primary-500 hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;