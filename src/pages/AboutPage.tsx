import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our event platform! We're dedicated to bringing people together through 
          memorable experiences and unforgettable moments.
        </p>
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To create exceptional event experiences that inspire, connect, and bring joy to 
              people's lives through innovative technology and passionate service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the world's most trusted platform for discovering and experiencing 
              life-enriching events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;