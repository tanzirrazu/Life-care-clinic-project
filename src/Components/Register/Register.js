import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons'
import useAuth from '../Context/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const {googleSignIn, handelEmail, handelPassword, githubSignIn, error,  handelRegistration, nameHandel} = useAuth()
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />

    let history = useHistory()
    const handelRegisterToLogin = () =>{
        history.push('/signin')
    }
    return (
        <div>
          <form onSubmit={handelRegistration} className="w-50 mx-auto my-5 p-5" style={{
                     boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
               }}>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Name</label>
                        <input onBlur={nameHandel} type="text" className="form-control" id="text"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handelEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handelPassword} type="password" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-3 form-check">
                        <label onClick={handelRegisterToLogin} className="form-check-label" htmlFor="exampleCheck1">Already have a Acoount?</label>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <p className="text-danger">{error}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="my-5">
                        <div className="d-grid gap-2 col-4 mx-auto">
                        <button onClick={googleSignIn} className="btn btn-light mb-3" type="button"> <span className="me-2 mt-1">{googleIcon}</span> Google Sign In</button>
                        <button onClick={githubSignIn} className="btn btn-dark" > <span className="me-2 mt-1">{githubIcon}</span> Github Sign In</button>
                        </div>
                </div>
        </div>
    );
};

export default Register;