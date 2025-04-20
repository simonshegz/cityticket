import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEvents } from '../../context/EventContext';
import EventCard from '../events/EventCard';

const UpcomingEvents: React.FC = () => {
  const { events } = useEvents();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Filter upcoming events (future dates, not featured)
  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date() && !event.featured)
    .slice(0, 8);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;
        
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const isScrollable = sliderRef.current
    ? sliderRef.current.scrollWidth > sliderRef.current.clientWidth
    : false;

  const showLeftButton = scrollPosition > 0;
  const showRightButton = sliderRef.current
    ? scrollPosition < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 5
    : false;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="mt-2 text-lg text-gray-600">
              Plan your next outing with these exciting upcoming events
            </p>
          </div>
          
          {isScrollable && (
            <div className="flex space-x-2">
              <button 
                onClick={() => scroll('left')}
                className={`p-2 rounded-full border border-gray-300 ${
                  showLeftButton 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-gray-400 cursor-not-allowed'
                }`}
                disabled={!showLeftButton}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className={`p-2 rounded-full border border-gray-300 ${
                  showRightButton 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-gray-400 cursor-not-allowed'
                }`}
                disabled={!showRightButton}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
        
        <div 
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar snap-x"
        >
          {upcomingEvents.map((event) => (
            <div key={event.id} className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 snap-start">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;