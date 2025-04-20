import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Ticket, Theater, Utensils, Award } from 'lucide-react';

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ icon, title, description, link, color }) => (
  <Link 
    to={link}
    className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:shadow-xl ${color} hover:-translate-y-1`}
  >
    <div className="p-3 rounded-full bg-white/20 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-center text-sm">{description}</p>
  </Link>
);

const EventCategories: React.FC = () => {
  const categories = [
    {
      icon: <Music size={28} className="text-white" />,
      title: "Concerts",
      description: "Live music experiences from your favorite artists",
      link: "/events?category=concerts",
      color: "bg-primary-600",
    },
    {
      icon: <Ticket size={28} className="text-white" />,
      title: "Sports",
      description: "Exciting sporting events and championships",
      link: "/events?category=sports",
      color: "bg-secondary-600",
    },
    {
      icon: <Theater size={28} className="text-white" />,
      title: "Theater & Arts",
      description: "Broadway shows, plays, and performances",
      link: "/events?category=theater",
      color: "bg-accent-600",
    },
    {
      icon: <Utensils size={28} className="text-white" />,
      title: "Festivals",
      description: "Food, music, and cultural festivals",
      link: "/events?category=festivals",
      color: "bg-success-600",
    },
    {
      icon: <Award size={28} className="text-white" />,
      title: "Comedy",
      description: "Stand-up comedy and entertainment shows",
      link: "/events?category=comedy",
      color: "bg-warning-600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Browse by Category</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover events that match your interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;