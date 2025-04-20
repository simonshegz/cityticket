import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/events/EventCard';
import { useEvents } from '../context/EventContext';

const EventsPage = () => {
  const { events } = useEvents();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Events</h1>
        <p className="text-gray-600">Discover and book tickets for upcoming events</p>
      </div>

      {/* Event filters */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="">All Categories</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="arts">Arts</option>
              <option value="food">Food & Drink</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="">Any Date</option>
              <option value="today">Today</option>
              <option value="weekend">This Weekend</option>
              <option value="month">This Month</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="">All Locations</option>
              <option value="nyc">New York</option>
              <option value="la">Los Angeles</option>
              <option value="chi">Chicago</option>
              <option value="mia">Miami</option>
            </select>
          </div>
        </div>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events && events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No events found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;