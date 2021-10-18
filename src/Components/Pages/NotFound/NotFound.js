import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../imgaes/notfound.jpg'

const NotFound = () => {
    return (
        <div className="row container-fluid align-items-center p-5 g-3 ">
            <div className="col-md-6 col-lg-6">
                <div >
                    <h1 className="fw-bold display-1 text-primary text-center"> 404!</h1>
                    <h1 className="fw-bold display-4"> <span className="text-primary">OPPS!</span> PAGE NOT FOUND</h1>
                    <p className="text-center fw-bold text-secondary">The page you looking for is unabailable.</p>
                </div>
                    <Link to="/home">  <button className="btn btn-outline-dark form-control">Go Back</button> </Link>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
                <div>
                <img src={notfound} className="img-fluid w-75" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;