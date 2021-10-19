import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Pricing = () => {
    const circleIcon = <FontAwesomeIcon icon={faCheck} />
  return (
    <div>
      <hr />
      <div className="text-center pb-2  fw-bold  ">
        <h1 className="text-center display-3 fw-bold">
          <span className="text-primary">Price</span> Table's
        </h1>
        <h4 className="text-secodary">Discount For Regular Customers</h4>
      </div>
      <hr />
      <div className="row container mx-auto">
          {/* single discound table */}
          <div className="col-lg-4 col-mg-4 col-sm-12 col-xs-12">
            <div className="my-5 shadow-lg onHover">
                <div className="bg-info p-5 text-center text-white">
                    <h2>Diagnostics</h2>
                    <h4>Fetaure laboratory</h4>
                </div>
                <div className="mt-5 text-center">
                   <h2>$50</h2>
                </div>
                <div className="p-5">
                    <div className="d-flex align-items-center">
                    <h4 className="text-info me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Ultrasound Digonstics</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-info me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Laborotory services</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-info me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">X-ray digonstics</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-info me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Functional  digonstics</p>
                    </div>
                </div>
                <button className="btn btn-info form-control text-white">Booking</button>
            </div>
          </div>
           {/* single discound table */}
           <div className="col-lg-4 col-mg-4 col-sm-12 col-xs-12">
            <div className="my-5 shadow-lg onHover">
                <div className="bg-dark p-5 text-center text-white">
                    <h2>Pediatrics</h2>
                    <h4>for kids of 2years</h4>
                </div>
                <div className="mt-5 text-center">
                   <h2>$40</h2>
                </div>
                <div className="p-5">
                    <div className="d-flex align-items-center">
                    <h4 className="text-dark me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Houehold allergens</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-dark me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Funagal allergens</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-dark me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Pollen allergens</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-dark me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Food allergens</p>
                    </div>
                </div>
                <button className="btn btn-dark form-control ">Booking</button>
            </div>
          </div>
           {/* single discound table */}
           <div className="col-lg-4 col-mg-4 col-sm-12 col-xs-12">
            <div className="my-5 shadow-lg onHover">
                <div className="bg-primary p-5 text-center text-white">
                    <h2>Dental</h2>
                    <h4>our dental services</h4>
                </div>
                <div className="mt-5 text-center">
                   <h2>$100</h2>
                </div>
                <div className="p-5">
                    <div className="d-flex align-items-center">
                    <h4 className="text-primary me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Dental whitening</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-primary me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Laser dentistry</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-primary me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Tooth implantation</p>
                    </div>
                    <div className="d-flex align-items-center">
                    <h4 className="text-primary me-3">{circleIcon}</h4>
                        <p className="text-secondary text-bold">Modern techniques</p>
                    </div>
                </div>
                <button className="btn btn-primary form-control ">Booking</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;
