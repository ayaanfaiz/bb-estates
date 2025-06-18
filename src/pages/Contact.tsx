import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
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
      
      // Reset form after submission
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="relative bg-primary-500 py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Get in touch with our team of real estate experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <MapPin size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-1">Office Address</h3>
                      <p className="text-gray-700">
                        Shop 140, The Shopping Mall, Arjun Marg<br />
                        Gurgaon, Haryana 122002<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Phone size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-1">Phone Numbers</h3>
                      <p className="text-gray-700">
                        Main: <a href="tel:+919876543210" className="text-primary-500 hover:underline">+91 9872331654</a><br />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Mail size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-1">Email Addresses</h3>
                      <p className="text-gray-700">
                        General: <a href="mailto:bbestatesindia@gmail.com" className="text-primary-500 hover:underline">bbestatesindia@gmail.com</a><br />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Clock size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Sunday: 10:00 AM - 7:00 PM<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Connect With Us
                </h2>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61576602397597" className="bg-primary-100 p-3 rounded-full hover:bg-primary-200 transition-colors" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/bbestates.in/" className="bg-primary-100 p-3 rounded-full hover:bg-primary-200 transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/bb-estates-in/" className="bg-primary-100 p-3 rounded-full hover:bg-primary-200 transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form & Map */}
            <div className="lg:col-span-2">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Send Us a Message
                </h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-lg text-green-700 mb-4">
                      Your message has been sent successfully. Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject*
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select a subject</option>
                          <option value="property-inquiry">Property Inquiry</option>
                          <option value="viewing-request">Schedule a Viewing</option>
                          <option value="sell-property">Sell My Property</option>
                          <option value="rent-property">Rent My Property</option>
                          <option value="general-inquiry">General Inquiry</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={contactForm.message}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                          placeholder="Please describe how we can help you..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto flex justify-center items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Our Location
                </h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=DLF+Phase+1,+Gurgaon,+Haryana,+India" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="BB Estates Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading mx-auto">
              Find answers to commonly asked questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                What areas do you serve in Gurgaon?
              </h3>
              <p className="text-gray-700">
                We provide real estate services across all of Gurgaon, with special expertise in DLF Phase 1, Golf Course Road, Cyber City, Sushant Lok, and other premium neighborhoods.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                Do you handle rental properties?
              </h3>
              <p className="text-gray-700">
                Yes, we offer comprehensive rental services for both residential and commercial properties, including property management for landlords and tenant placement.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                How can I list my property with BB Estates?
              </h3>
              <p className="text-gray-700">
                To list your property with us, simply contact our office via phone, email, or the contact form on this page. One of our agents will schedule a visit to your property to discuss your needs and create a customized listing strategy.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                What sets BB Estates apart from other real estate agencies?
              </h3>
              <p className="text-gray-700">
                Our deep knowledge of Gurgaon's premium real estate market, personalized service approach, and commitment to transparency set us apart. We focus on understanding our clients' needs and providing tailored solutions rather than pushing for quick transactions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                How quickly can I expect a response to my inquiry?
              </h3>
              <p className="text-gray-700">
                We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our office directly for immediate assistance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                Do you help with legal documentation and paperwork?
              </h3>
              <p className="text-gray-700">
                Yes, we provide comprehensive assistance with all legal documentation and paperwork related to property transactions, ensuring a smooth and hassle-free experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;