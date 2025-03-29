import React from "react";

const Hero = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl">Today's Headlines: Stay</h2>
      <span className="md:flex  justify-between    grid items-center gap-6">
        <span className="text-2xl md:text-4xl">Informed</span>
        <span className="text-md text-gray-400">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories. Discover the world through our news coverage.
        </span>
      </span>
    </div>
  );
};

export default Hero;
