import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
	const { servicedetailsid } = useParams();
	const [details, setDetails] = useState([]);
	const history = useHistory();
	const handelGoBack = () => {
		history.push('/');
	};
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/tanzirrazu/fakedata/main/data.json'
		)
			.then((res) => res.json())
			.then((data) => setDetails(data));
	}, [details, servicedetailsid]);

	let detailFound = details.filter((detail) => detail.id == servicedetailsid);

	return (
		<div className="row  container-fluid align-items-center g-4 my-5">
			<div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
				<div>
					<h4 className="fw-bold">{detailFound[0]?.name}</h4>
					<p className="fw-bold text-secondary">{detailFound[0]?.dec}</p>
					<h4 className="fw-bold">Service Duration</h4>
					<p className="fw-bold text-secondary">{detailFound[0]?.care}</p>
					<div className="bg-secondary bg-gradient p-5 text-center">
						<h4 className="fw-bold text-white">Have a Question?</h4>
						<p className="fw-bold text-white">
							Your local team of Client Care Managers are on call 24/7 to answer
							your questions and work with you to design a customized plan of
							care that is right for you.
						</p>
						<button className="btn btn-dark">Contact Us Today</button>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
				<img className="img-fluid" src={detailFound[0]?.image} alt="" />
			</div>
			<button
				onClick={handelGoBack}
				className="btn btn-outline-dark w-25 shadow">
				Go Back
			</button>
		</div>
	);
};

export default ServiceDetails;
