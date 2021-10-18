import React from 'react';
import { Link } from 'react-router-dom';

const SingleDoctor = (props) => {
    const {id, image, qulification, name} = props.doctor
    return (
        <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 col">
            <div className="p-3 shadow card h-100">
                <div>
                    <img className="img-fluid " src={image} alt="" />
                    </div>
                        <div className="py-3">
                            <h5>{name}</h5>
                            <h6>{qulification}</h6>
                            <Link to={`/doctorDetails/${id}`}><div className="text-success fw-bold" type="button">See more.....</div></Link>
                        </div>
            </div>
    </div>
    );
};

export default SingleDoctor;