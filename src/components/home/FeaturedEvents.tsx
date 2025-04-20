import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useEvents } from '../../context/EventContext';
import EventCard from '../events/EventCard';

const FeaturedEvents: React.FC = () => {
  const { events } = useEvents();
  const featuredEvents = events.filter(event => event.featured).slice(0, 4);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Events</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these hot tickets. Our featured events are selling fast!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/events" 
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-md"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;