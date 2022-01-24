import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../../assets/media/logos/logo-1.svg";
import GoogleLogo from "../../../assets/media/svg/brand-logos/google-icon.svg";
import agent from "../../api/agent";
import UserContext from "../../context/user-context";
import LoadingButton from "../../layout/appComponents/LoadingButton";
import GoogleSignIn from "./GoogleLogin";

const Login = () => {
	const userCtx = useContext(UserContext);
	const history = useHistory();
	const [formValues, setFormValues] = useState({
		email: "",
		password: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (userCtx.user)
			history.push("/");

		window.gapi.signin2.render('g-signin2', {
			'scope': 'https://www.googleapis.com/auth/plus.login',
			'width': 200,
			'height': 50,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': onSignIn
		})
	}, [userCtx, history]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		agent.Account.login(formValues)
			.then(user => {
				userCtx.saveUser(user);
				history.push("/");
			})
			.catch(error => console.log(error))
			.finally(() => setIsSubmitting(false));
	}

	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	}

	return (
		<div className="d-flex flex-column flex-root mt-20">
			<div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style={{ backgroundImage: "url(assets/media/illustrations/sigma-1/14.png" }}>
				<div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					<img alt="Logo" src={Logo} className="h-40px mb-20" />
					<div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						<form className="form w-100" id="kt_sign_in_form" onSubmit={handleSubmit}>
							<div className="text-center mb-10">
								<h1 className="text-dark mb-3">Sign In to Fleet Manager</h1>
							</div>
							<div className="fv-row mb-10">
								<label className="form-label fs-6 fw-bolder text-dark">Email</label>
								<input
									className="form-control form-control-lg form-control-solid"
									type="text"
									name="email"
									autoComplete="off"
									onChange={handleInputChange}
								/>
							</div>
							<div className="fv-row mb-10">
								<div className="d-flex flex-stack mb-2">
									<label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
									<Link to="/reset-password" className="link-primary fs-6 fw-bolder">Forgot Password ?</Link>
								</div>
								<input
									className="form-control form-control-lg form-control-solid"
									type="password"
									name="password"
									autoComplete="off"
									onChange={handleInputChange}
								/>
							</div>
							<div className="text-center">
								{/* <LoadingButton classes="btn-lg w-100 mb-5" isSubmitting={isSubmitting}>Continue</LoadingButton>
								<div className="text-center text-muted text-uppercase fw-bolder mb-5">or</div>
								<Link to="/" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
									<img alt="Logo" src={GoogleLogo} className="h-20px me-3" />Continue with Google</Link> */}

								{/* <div className="g-signin2" data-onsuccess={onSignIn} >

								</div> */}

							</div>
						</form>
						<GoogleSignIn />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;