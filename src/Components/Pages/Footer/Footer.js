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
           <div className="container  ">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/" className="text-white text-decoration-none">Development</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Web design</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Hosting</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/" className="text-white text-decoration-none">Company</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Team</Link></li>
                            <li><Link to="/" className="text-white text-decoration-none">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="d-flex  justify-content-center">
                    <Link to="/"><i  className="fs-2 me-3 text-white">{githubIcon}</i></Link>
                    <Link to="/"><i  className="fs-2 me-3 text-white">{twitterIcon}</i></Link>
                    <Link to="/"><i  className="fs-2 me-3 text-white">{instagramIcon}</i></Link>
                    <Link to="/"><i  className="fs-2 me-3 text-white">{facebookIcon}</i></Link>
                        <div>
                        </div>
                       
                    </div>
                    <p className="copyright text-center">Company Name © 2018</p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;