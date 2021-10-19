import React from 'react';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
          <Slider/>
          <Services/>
          <Pricing/>
        </div>
    );
};

export default Home;