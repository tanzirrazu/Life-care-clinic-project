import React from 'react';
import About from '../About/About';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
          <Slider/>
          <Services/>
          <OurDoctors/>
          <About/>
        </div>
    );
};

export default Home;