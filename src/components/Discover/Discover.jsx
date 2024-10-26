import React from 'react'
import "./discover.css"
import Card from "./Card.jsx"



const Discover = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
        <div className="header min-w-[320px]">Uncover your interest.</div>
        <div className="flex flex-wrap justify-center mt-8">
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
