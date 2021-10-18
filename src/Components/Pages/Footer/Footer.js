import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    return (
        <div className="bg-primary text-white p-5">
           <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/" className="text-white text-decoration-none">Daily Home Care</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Hourly Home Care</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Hospital to home care.</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Respite home care.</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/" className="text-white text-decoration-none">happy customers clients</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Professional medical specialist</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Certificates</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Life Care Clinic</h3>
                        <p>est Doctors experts are selected from the Best Doctors in America® List. The Best Doctors in America List is our proprietary database that includes the world’s top medical specialists. Physicians are selected to be on this list only after being nominated via our poll, in which physicians are asked, “If you physicians worldwide in more than 450 medical specialties and subspecialties.</p>
                    </div>
                    <hr />
                    <div className="d-flex  justify-content-center">
                    <Link to="/"><i  className="fs-2 me-3 text-white">{githubIcon}</i></Link>
                    <Link to="/"><i  className="fs-2 me-3 text-white">{twitterIcon}</i></Link>
                    <Link to="/"><i  className="fs-2 me-3 text-white">{instagramIcon}</i></Link>
                    <Link to="/"><i  className="fs-2 me-3 text-white">{facebookIcon}</i></Link>
                        <div>
                        </div>
                    </div>
                    <p className="copyright text-center mt-3">All Right Received By Life Care Clinic © 2018</p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;