import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Tag, ArrowLeft } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';
import { eventsData } from '../data/events';

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundEvent = eventsData.find(e => e.id.toString() === eventId);
    setEvent(foundEvent || null);
    setLoading(false);
  }, [eventId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <p className="mb-8">Sorry, the event you're looking for doesn't exist or has been removed.</p>
        <Link to="/events" className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <ArrowLeft size={18} className="mr-2" />
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm mb-6 flex gap-2 text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link to="/events" className="hover:text-blue-600">Events</Link>
        <span>/</span>
        <span className="text-gray-700">{event.name}</span>
      </div>

      {/* Event Hero */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="h-96 w-full bg-gradient-to-r from-blue-500 to-purple-600 relative">
          {event.image && (
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{event.name}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Event</h2>
            <div className="prose max-w-none">
              <p>{event.description}</p>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Event Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 mr-3 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Date</p>
                  <p>{formatDate(event.date)}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Time</p>
                  <p>{event.time}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>{event.location}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Tag className="w-5 h-5 mr-3 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Category</p>
                  <p>{event.category}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Organizer</h2>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                {event.organizer?.logo || event.organizer?.name?.charAt(0) || 'O'}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{event.organizer?.name || 'Event Organizer'}</h3>
                <p className="text-gray-600">{event.organizer?.description || 'Event organizer information'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow p-6 sticky top-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-1">${event.price}</h3>
              <div className="flex items-center gap-2 text-green-600">
                <Users size={16} />
                <span>{event.availableSeats} spots left</span>
              </div>
            </div>

            <Link
              to={`/checkout/${event.id}`}
              className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-center rounded-lg shadow transition-colors"
            >
              Get Tickets
            </Link>
            
            <div className="mt-6 text-gray-600 text-sm">
              <p className="mb-2">
                <strong>Refund Policy:</strong> Full refunds available up to 7 days before the event.
              </p>
              <p>
                <strong>Note:</strong> Tickets will be emailed to you and are also available in your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;