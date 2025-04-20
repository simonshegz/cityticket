import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  rating: number;
  text: string;
  image: string;
  event: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, rating, text, image, event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{event}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 flex-grow">{text}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The ticket booking process was seamless and the mobile tickets were so convenient. Great experience from start to finish!",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
      event: "Taylor Swift Concert"
    },
    {
      name: "Michael Chen",
      rating: 4,
      text: "Really impressed with how easy it was to find and book tickets. The seat selection tool was particularly helpful.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      event: "NBA Finals Game"
    },
    {
      name: "Olivia Wilson",
      rating: 5,
      text: "I've used many ticket sites and CityTicket is by far the best. No hidden fees and excellent customer service!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      event: "Broadway Show"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from customers who have used CityTicket for their event needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;