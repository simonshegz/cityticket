import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { formatDate, formatTime } from '../../utils/dateUtils';
import { Event } from '../../types/Event';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { id, title, image, date, venue, location, time, price, category } = event;

  const getCategoryClass = (category: string) => {
    const classes = {
      concerts: 'bg-primary-500',
      sports: 'bg-secondary-500',
      theater: 'bg-accent-500',
      comedy: 'bg-warning-500',
      festivals: 'bg-success-500',
      default: 'bg-gray-500'
    };
    
    return classes[category as keyof typeof classes] || classes.default;
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      <Link to={`/events/${id}`} className="block relative">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        <span className={`absolute top-4 right-4 text-xs font-semibold text-white px-2 py-1 rounded-full ${getCategoryClass(category)}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
        
        {event.featured && (
          <span className="absolute top-4 left-4 text-xs font-semibold bg-accent-500 text-white px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </Link>
      
      <div className="p-5">
        <Link to={`/events/${id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar size={14} className="mr-2 text-gray-400" />
            <span>{formatDate(date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={14} className="mr-2 text-gray-400" />
            <span className="truncate">{venue}, {location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Clock size={14} className="mr-2 text-gray-400" />
            <span>{formatTime(time)}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="text-primary-600 font-semibold">
            {price === 'Free' ? 'Free' : `From $${price}`}
          </div>
          
          <Link 
            to={`/events/${id}`} 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;