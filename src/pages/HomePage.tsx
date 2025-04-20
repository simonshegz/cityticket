import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedEvents from '../components/home/FeaturedEvents';
import EventCategories from '../components/home/EventCategories';
import UpcomingEvents from '../components/home/UpcomingEvents';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedEvents />
      <EventCategories />
      <UpcomingEvents />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;