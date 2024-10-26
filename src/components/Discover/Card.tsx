import React from 'react';

// Define the props interface
interface CardProps {
  title: string;
  image: string;
}

// Update the Card component to use the props interface
const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;
