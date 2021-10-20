import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../imgaes/slider1.jpg';
import slider2 from '../../imgaes/slider2.jpg';
import slider3 from '../../imgaes/slider3.jpg';

const Slider = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item interval={1000}>
					<img className="d-block w-100" src={slider1} alt="First slide" />
					{/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img className="d-block w-100" src={slider2} alt="Second slide" />
					{/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={slider3} alt="Third slide" />
					{/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>
			<hr />
		</div>
	);
};

export default Slider;
