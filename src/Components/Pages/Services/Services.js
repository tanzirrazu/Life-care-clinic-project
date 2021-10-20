import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/tanzirrazu/fakedata/main/data.json'
		)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div>
			<div className="text-center my-3 fw-bold ">
				<h1 className="text-center display-3 fw-bold">
					<span className="text-primary">Our</span> Services
				</h1>
				<p>
					Nano Home Care, LLC will provide the following home health care <br />{' '}
					programs at flexible schedules and cost-friendly service rates.
				</p>
			</div>
			<hr />
			<div className="row row-cols-1 row-cols-md-4 row-cols-lg-3 mb-5 g-4 container-fluid">
				{services.map((service) => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
			<hr />
		</div>
	);
};

export default Services;
