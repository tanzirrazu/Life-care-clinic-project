import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../Context/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
	let history = useHistory();
	const { googleSignIn, handelRegistration, githubSignIn, signInWithEmail } =
		useAuth();
	const location = useLocation();
	const rediret_url = location.state?.from || '/home';
	//  redirect handel with google
	const handelGoogleSignIn = () => {
		googleSignIn().then((result) => {
			history.push(rediret_url);
		});
	};
	//  redirect handel with github
	const handelGithubSignIn = () => {
		githubSignIn().then((result) => {
			history.push(rediret_url);
		});
	};
	const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
	const githubIcon = <FontAwesomeIcon icon={faGithub} />;

	const handelLoginToRegister = () => {
		history.push('/register');
	};
	return (
		<div>
			<form
				onSubmit={handelRegistration}
				className="w-50 mx-auto my-5 p-5"
				style={{
					boxShadow:
						'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
				}}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="emailId"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input type="password" className="form-control" id="passwordId" />
				</div>
				<div className="mb-3 form-check">
					<label className="form-check-label" htmlFor="exampleCheck1">
						New user? Create Account
					</label>
					<input
						onClick={handelLoginToRegister}
						type="checkbox"
						className="form-check-input"
						id="exampleCheck1"
					/>
				</div>
				<button
					onClick={signInWithEmail}
					type="submit"
					className="btn btn-primary">
					Submit
				</button>
			</form>
			<div className="my-5">
				<div className="d-grid gap-2 col-4 mx-auto">
					<button onClick={handelGoogleSignIn} className="btn btn-light mb-3">
						<span className="me-2 mt-1 text-danger">{googleIcon}</span> Google
						Sign In
					</button>
					<button onClick={handelGithubSignIn} className="btn btn-dark">
						<span className="me-2 mt-1">{githubIcon}</span> Github Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
