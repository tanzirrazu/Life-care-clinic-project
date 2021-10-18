import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {servicedetailsid}= useParams();
    const [details, setdetails] = useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(details => setdetails(details.services))
    },[servicedetailsid, details ])
    const dev = details.filter(details => details.id == servicedetailsid)
    console.log(dev);
    return (
      
        <div>
            <h2>this is service details</h2>
        </div>
    );
};

export default ServiceDetails;