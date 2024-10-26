// src/pages/AboutUs.jsx
import React from 'react';

const teamMembers = [
  { name: 'Lovish', role: 'Frontend Developer' },
  { name: 'Arjit', role: 'Backend Developer' },
  { name: 'Aditi', role: 'UI/UX Designer' },
  { name: 'Sanat', role: 'Full Stack Developer' },
  { name: 'Vivek', role: 'Project Manager' },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

      <p className="text-lg text-gray-600 text-center max-w-2xl mb-10">
        Welcome to <span className="font-semibold text-blue-600">Manifesta</span>! 🎉🎉 your one-stop shop for all the exciting college events happening around you! 🤩 Discover, explore, and join the fun! 🥳
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet the Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105"
          >
            <div className="w-24 h-24 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-blue-600">
              {member.name[0]}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>

      <p className="text-lg text-gray-600 text-center max-w-xl mb-4">
        We are the GDG DTU Web Team, part of the Google Developers Group at Delhi Technological University, driven by
        our passion for innovation and community growth! 💻
      </p>
    </div>
  );
};

export default AboutUs;
