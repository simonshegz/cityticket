import React, { createContext, useContext, useState } from 'react';
import { Event } from '../types/Event';
import { eventsData } from '../data/events';

interface EventContextType {
  events: Event[];
  loading: boolean;
  error: string | null;
  getEventById: (id: string) => Event | undefined;
  getEventsByCategory: (category: string) => Event[];
  searchEvents: (query: string) => Event[];
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(eventsData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getEventById = (id: string): Event | undefined => {
    return events.find(event => event.id === id);
  };

  const getEventsByCategory = (category: string): Event[] => {
    return events.filter(event => event.category === category);
  };

  const searchEvents = (query: string): Event[] => {
    const lowercaseQuery = query.toLowerCase();
    return events.filter(event => 
      event.title.toLowerCase().includes(lowercaseQuery) ||
      event.venue.toLowerCase().includes(lowercaseQuery) ||
      event.location.toLowerCase().includes(lowercaseQuery) ||
      event.description.toLowerCase().includes(lowercaseQuery)
    );
  };

  return (
    <EventContext.Provider value={{ 
      events, 
      loading, 
      error, 
      getEventById, 
      getEventsByCategory,
      searchEvents
    }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = (): EventContextType => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};