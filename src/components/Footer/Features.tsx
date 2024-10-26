// src/pages/Features.jsx
import React from 'react';

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl lg:text-5xl">
          Why Choose Manifesta?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-600">
          Discover what makes Manifesta the best platform for promoting and discovering college events.
        </p>

        <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full">
              <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a6 6 0 100 12A6 6 0 0012 0zm0 10a4 4 0 110-8 4 4 0 010 8zM4.08 21.19A10.91 10.91 0 0112 17a10.91 10.91 0 017.92 4.19.75.75 0 001.2-.9A12.46 12.46 0 0012 15.5a12.46 12.46 0 00-9.12 4.78.75.75 0 101.2.91z" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-800">User-Friendly Interface</h3>
            <p className="mt-4 text-base text-gray-600">
              Easily navigate and discover upcoming events in an intuitive, user-friendly layout.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-green-100 rounded-full">
              <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-4 10.5h-2v2h-4v-2H8v-4h2V8.5h4v2h2v4z" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-800">Event Customization</h3>
            <p className="mt-4 text-base text-gray-600">
              Customize event details to showcase highlights, schedule, and more, making it easy to attract attendees.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-purple-100 rounded-full">
              <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 00-3.29 19.41c.52.1.71-.22.71-.5v-2c-2.89.63-3.5-1.4-3.5-1.4-.48-1.19-1.18-1.51-1.18-1.51-.97-.66.08-.65.08-.65 1.07.07 1.63 1.1 1.63 1.1.95 1.62 2.48 1.15 3.08.88.1-.69.37-1.15.67-1.41-2.31-.26-4.75-1.16-4.75-5.14 0-1.14.41-2.07 1.08-2.8-.11-.26-.47-1.3.1-2.7 0 0 .87-.28 2.85 1.07A9.9 9.9 0 0112 7.67c.88 0 1.77.12 2.6.35 1.97-1.35 2.85-1.07 2.85-1.07.58 1.4.22 2.44.11 2.7.67.73 1.08 1.66 1.08 2.8 0 4-2.45 4.87-4.78 5.13.39.33.74.99.74 2v2.95c0 .29.19.61.72.5A10 10 0 0012 2z" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-800">Enhanced Visibility</h3>
            <p className="mt-4 text-base text-gray-600">
              Increase your event’s reach to a broad audience, ensuring no one misses out on the excitement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
