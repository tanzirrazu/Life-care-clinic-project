import React from 'react';
import about1 from '../../imgaes/about1.jpg'
import about2 from '../../imgaes/about2.jpg'
import about3 from '../../imgaes/about3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faUserNurse, faGem, faAward } from '@fortawesome/free-solid-svg-icons'
import { Accordion } from 'react-bootstrap';

const About = () => {
    const userIcon = <FontAwesomeIcon icon={faUserFriends} />
    const userNurse = <FontAwesomeIcon icon={faUserNurse} />
    const gemIcon = <FontAwesomeIcon icon={faGem} />
    const awardIcon = <FontAwesomeIcon icon={faAward} />
    return (
        <div >
            <hr />
              <div className="text-center pb-2 fw-bold ">
                <h1 className="text-center display-3 fw-bold"><span className="text-primary">About</span> Us</h1>
                <p >Life Care Clinic has over two decades of experience in the healthcare sector, and is known for providing quality healthcare and valuable experience to all domestic and international patients. <br /> Our healthcare offerings are supported by a team of compassionate and dedicated medical professionals who have rich knowledge and experience in their respective domains.</p>
            </div>
                <hr />
                <div className="row container-fluid align-items-center">
                        <h1 className="fw-bold text-decoration-underline">Certificates</h1>
                        <div className="col-md-6 col-lg-6 col-12">
                                <h4>We use only the most modern medical equipment, skills for modern trends and innovations introducing into our practice. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h4>
                        </div>
                        <div className="col-md-6 col-lg-6 col-12">
                                <img className="img-fluid" src={about1} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-6 col-12">
                                <img className="img-fluid" src={about2} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-6 col-12">
                                <img className="img-fluid" src={about3} alt="" />
                        </div>
                </div>
                {/* single single */}
                <div className="row container-fluid text-center my-5 bg-dark p-3 text-white">
    
                        <div className="col-md-3 col-lg-3 col-12">
                                <h1 className="text-primary">{userIcon}</h1>
                                <h1>7220+</h1>
                                <h3>Healthy and happy customers clients</h3>
                        </div>
                        <div className="col-md-3 col-lg-3 col-12">
                                <h1 className="text-primary">{userNurse}</h1>
                                <h1>120+</h1>
                                <h3>Best professional medical specialist</h3>
                        </div>
                        <div className="col-md-3 col-lg-3 col-12">
                               <h1 className="text-primary">{gemIcon}</h1>
                               <h1>14+</h1>
                                <h3>Years of impeccable and successful work</h3>
                        </div>
                        <div className="col-md-3 col-lg-3 col-12">
                                <h1 className="text-primary">{awardIcon}</h1>
                                <h1>450+</h1>
                                <h3>Diplomas and awards of our clinic</h3>
                        </div>
                </div>
                {/* accourdion */}
                <div className="container my-5">
                        <div className="d-flex justify-content-between ">
                            <h1>FAQ</h1>
                            <button className="btn btn-secondary">Give Feedback</button>
                        </div>
                        <Accordion defaultActiveKey="0" className="my-3 ">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Who are the expert physiciand with whom Best Doctors Works?</Accordion.Header>
                            <Accordion.Body>
                            Best Doctors experts are selected from the Best Doctors in America® List. The Best Doctors in America List is our proprietary database that includes the world’s top medical specialists. Physicians are selected to be on this list only after being nominated via our poll, in which physicians are asked, “If you or a loved one needed a physician in a given specialty, to whom would you refer?” Physicians cannot pay to be included on the Best Doctors in America® List or nominate themselves for consideration. This list includes more than 50,000 physicians worldwide  in more than 450 medical specialties and subspecialties.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>If I use Best Doctors services, does that mean Best Doctors in now my trating physician?</Accordion.Header>
                            <Accordion.Body>
                            No. Best Doctors provides medical information only and not medical care, diagnosis, or treatment. You will not be a patient of Best Doctors or of any Best Doctor Expert that reviews your case. No doctor-patient relationship will be created between you and Best Doctors or you and a Best Doctors Expert. Your treating physician maintains all responsibility for your care and all treatment decisions will be made solely between you and your treating physician.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item  eventKey="2">
                            <Accordion.Header>Do I have to folow the Best Doctors recomendation?</Accordion.Header>
                            <Accordion.Body>
                            No. Best Doctors is providing you with this information so that you can bring it to your treating physician and work with him or her to make informed decisions regarding your diagnosis and/or treatment plan.
                           
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                </div>
        </div>
    );
};

export default About;