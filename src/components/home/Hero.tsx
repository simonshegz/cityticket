import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundPosition: "center 30%"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-28 md:py-40 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in">
            Unforgettable Events<br />Unforgettable Memories
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 animate-slide-up">
            Discover and book tickets to the hottest concerts, sports events,<br className="hidden md:block" /> theater shows, and more.
          </p>
          
          <div className="pt-4 pb-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search events, artists, venues..." 
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button 
                type="submit" 
                className="py-3 px-6 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors shadow-lg"
              >
                Find Events
              </button>
            </form>
          </div>

          <div className="pt-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/events?category=concerts" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition"
              >
                Concerts
              </Link>
              <Link 
                to="/events?category=sports" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition"
              >
                Sports
              </Link>
              <Link 
                to="/events?category=theater" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition"
              >
                Theater
              </Link>
              <Link 
                to="/events?category=festivals" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition"
              >
                Festivals
              </Link>
              <Link 
                to="/events?category=comedy" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition"
              >
                Comedy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;