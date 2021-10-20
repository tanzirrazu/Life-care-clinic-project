import React, { useEffect, useState } from 'react';
import SingleDoctor from './SingleDoctor';

const OurDoctors = () => {
	const [doctors, setDoctors] = useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/tanzirrazu/fakedata/main/doctor.json'
		)
			.then((res) => res.json())
			.then((data) => setDoctors(data));
	}, []);
	return (
		<div>
			<hr />
			<div className="text-center pb-2  fw-bold ">
				<h1 className="text-center display-3 fw-bold">
					<span className="text-primary">Our</span> Doctor's
				</h1>
				<p className="text-secodary">
					Doctors, also known as physicians, are licensed health professionals
					who maintain and restore human health through the practice of
					medicine.
					<br /> They examine patients, review their medical history, diagnose
					illnesses or injuries, administer treatment, and counsel patients on
					their health and well being.
				</p>
			</div>
			<hr />
			<div className="row container-fluid my-5 align-items-center g-5 mx-auto">
				{doctors.map((doctor) => (
					<SingleDoctor key={doctor.id} doctor={doctor}></SingleDoctor>
				))}
			</div>
		</div>
	);
};

export default OurDoctors;
