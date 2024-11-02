import React from 'react'

import Card from "./Card.jsx"



const Discover = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
        <div className="flex font-['Roboto_Condensed',_sans-serif] font-extrabold text-[55px] h-[60px] mt-16 mb-[70px]  justify-center items-center min-w-[500px]">Uncover your interest.</div>
        <div className="flex flex-wrap justify-center items-center mt-8">
            <Card title="Kalakriti" image="src/assets/kalakriti.jpeg" />
            <Card title="Sahitya" image="src/assets/sahitya.jpeg" />
            <Card title="UAS" image="src/assets/uas.jpeg" />
            <Card title="Kalakriti" image="src/assets/kalakriti.jpeg" />
            <Card title="Sahitya" image="src/assets/sahitya.jpeg" />
            <Card title="UAS" image="src/assets/uas.jpeg" />
            
      </div>
    </div>
  );
};

export default Discover;
