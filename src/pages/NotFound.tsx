import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="section flex items-center justify-center min-h-[60vh]">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-9xl font-display font-bold text-primary-500 mb-4">404</h1>
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <Home size={20} className="mr-2" /> Return Home
              </Link>
              <Link to="/properties" className="btn-outline">
                <Search size={20} className="mr-2" /> Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;