import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
	const { name, id, image, provides } = props.service;
	return (
		<div>
			<div className="col card-style">
				<div className="card p-3">
					<img src={image} alt="" />
				</div>
				<div className="card-body">
					<h5 className="fw-bold">{name}</h5>
					<p>{provides}</p>
					<Link to={`/serviceDetails/${id}`}>
						{' '}
						<button className="btn btn-outline-primary form-control fw-bold">
							More Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;
