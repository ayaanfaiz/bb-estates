import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Building2 className="mr-2 text-white" size={28} />
              <div className="font-display font-bold text-xl text-white">
                BB <span className="text-secondary-500">Estates</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium properties in Gurgaon. Specializing in luxury residential and commercial properties across the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary-500">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Residential Properties
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Commercial Spaces
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Properties for Sale
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Rental Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-secondary-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  Shop 140, The Shopping Mall, Arjun Marg, DLF Phase 1, Gurgaon, Haryana 122002
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-secondary-500 flex-shrink-0" size={18} />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  +91 98723 31654
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-secondary-500 flex-shrink-0" size={18} />
                <a href="mailto:bbestatesindia@gmail.com" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  bbestatesindia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-400 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} BB Estates. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;