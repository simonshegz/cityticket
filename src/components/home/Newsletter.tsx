import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulating successful subscription
    setIsSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-16 px-4 bg-primary-700 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-full mb-6">
            <Mail size={28} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated on Events</h2>
          <p className="text-lg text-primary-100 mb-8">
            Subscribe to our newsletter and never miss out on exciting events in your area.
            Get early access to ticket sales and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-grow relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${error ? 'border-error-400' : 'border-white/20'} backdrop-blur-sm text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent`}
              />
              {error && <p className="absolute -bottom-6 left-0 text-sm text-error-300">{error}</p>}
            </div>
            <button
              type="submit"
              className="py-3 px-6 bg-white text-primary-700 hover:bg-primary-50 rounded-lg font-medium transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-8 p-3 bg-success-600 text-white rounded-lg animate-scale-up">
              Thank you for subscribing! You'll receive our newsletter soon.
            </div>
          )}
          
          <p className="text-sm text-primary-200 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;