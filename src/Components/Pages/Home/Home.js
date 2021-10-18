import React from 'react';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
          <Slider/>
          <Services/>
          <OurDoctors/>
        </div>
    );
};

export default Home;