import React from 'react'



const Card = ({ title, image }) => {
  return (
    <div className="relative m-8 w-[320px] h-[320px] bg-black  overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 rounded-lg shadow-lg shadow-gray-300">
      <img src={image} alt={title} className="object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full bg-white bg-opacity-40 text-black p-2 font-roboto text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
