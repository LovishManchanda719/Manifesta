// src/pages/Works.jsx
import React from 'react';

const GettingStarted = () => {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl lg:text-5xl">
          How Manifesta Works
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-600">
          A simple, step-by-step process to get the most out of your college event experience.
        </p>

        <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-indigo-100 rounded-full">
              <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 100 24A12 12 0 0012 0zm0 22a10 10 0 110-20 10 10 0 010 20zM10.29 7.29l2.3 2.3 4.7-4.7a1 1 0 011.41 1.42l-5.41 5.41a1 1 0 01-1.41 0L9.29 9.71a1 1 0 011.41-1.42z" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-800">Create Your Account</h3>
            <p className="mt-4 text-base text-gray-600">
              Sign up easily with your email or social media to start discovering and sharing events.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-yellow-100 rounded-full">
              <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 100 24A12 12 0 0012 0zm3 13H9a1 1 0 010-2h6a1 1 0 010 2zM6 17h12a1 1 0 010 2H6a1 1 0 010-2zm12-8H6a1 1 0 010-2h12a1 1 0 010 2z" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-800">Explore Events</h3>
            <p className="mt-4 text-base text-gray-600">
              Browse a curated list of events or use filters to find exactly what interests you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-teal-100 rounded-full">
              <svg className="w-12 h-12 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 100 24A12 12 0 0012 0zm4.8 9.2l-5.2 5.2a1 1 0 01-1.6-.8V8.6a1 1 0 012 0v5.2l4.4-4.4a1 1 0 011.4 1.4z" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-800">Attend & Enjoy</h3>
            <p className="mt-4 text-base text-gray-600">
              Join the event and connect with peers; make memories and share the experience on Manifesta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
