import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faGraduationCap, faClock, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const DoctorDetails = () => {
    const userIcon = <FontAwesomeIcon icon={faUserAlt} />
    const graduateIcon = <FontAwesomeIcon icon={faGraduationCap} />
    const timeIcon = <FontAwesomeIcon icon={faClock} />
    const brifIcon = <FontAwesomeIcon icon={faBriefcase} />
    const {doctorDetailsId} =useParams()
    const [details, setDetails] = useState([])
    const history = useHistory()
    const handelGoBack = () =>{
        history.push('/')
    }

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/tanzirrazu/fakedata/main/doctor.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    let singleDetails = details.filter(detail => detail.id == doctorDetailsId)
    return (
        <div className="row container-fluid my-5 align-items-center g-5 mx-auto">
                <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <div className="p-3 shadow">
                                <img className="img-fluid" src={singleDetails[0]?.image} alt="" />
                                    <div className="mt-4">
                                        <h5 className="fw-bold">{singleDetails[0]?.name}</h5>
                                        <hr />
                                    </div>
                                         <div className="d-flex">
                                             <h6 className="fw-bold">{userIcon}</h6>
                                            <h6 className="fw-bold ms-4">Specialty</h6>
                                     </div>  
                                    <p className="text-secondary px-4 ms-3 ">{singleDetails[0]?.Specialty}</p>
                                        <div className="d-flex">
                                        <h6 className="fw-bold">{graduateIcon}</h6>
                                        <h6 className="fw-bold ms-3">Education/Qualification </h6>
                                </div>
                                <p className="text-secondary px-4 ms-3">Ph.D. in psychology</p>
                                <div className="d-flex">
                                        <h6 className="fw-bold">{timeIcon}</h6>
                                        <h6 className="fw-bold ms-3">Length of Work </h6>
                                </div>
                                 <p className="text-secondary px-4 ms-3">since 2000 until now</p>
                                 <div className="d-flex">
                                        <h6 className="fw-bold">{brifIcon}</h6>
                                        <h6 className="fw-bold ms-3">Work Place</h6>
                                </div>
                                <p className="text-secondary px-4 ms-3">Life care clinic</p>
                        </div>
                        <button onClick={handelGoBack} className="btn btn-outline-dark form-control mt-3 shadow">Go Back</button>
                </div>
                <div  className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
                        <h4>Feature medical center "Life Care Clinic"</h4>
                        <p className="text-secondary">On the basis of the medical center “Nordis” can be given a thorough examination of the body and get the advice of highly qualified specialists in various fields of medicine. According to studies, our doctors will make an individual program of prevention and treatment of identified diseases, directed to a surgical treatment if necessary.</p>
                        <div className="border p-3 text-center border-primary">
                            <p className="text-secondary">On the basis of the medical center “Nordis” can be given a thorough examination of the body and get the advice of highly qualified specialists in various fields of medicine.</p>
                        </div>
                        <p className="text-secondary my-5">In today’s operational department conducted a wide range of operations under local and general anesthesia; as in “Nordis” provides services for the diagnosis and treatment of infertility, including the use of reproductive technologies (IVF).</p>
                        <h4 className="text-darl my-5 fw-bold">Finibus Bonorum et Malorum”, written by Cicero in 45 BC</h4>
                        <p className="text-secondary my-5">In addition to the medical services we provide services in the field of tourism. Managers of tourism department “Nordis” will help organize the passage of therapeutic and preventive measures and rehabilitation courses in the best health resorts of Belarus, stay in resorts and abroad, as well as its own tourist pearl – hotel “Nordis”, located on the island of Lepel lake.</p>
                        
                </div>
        </div>
    );
};

export default DoctorDetails;