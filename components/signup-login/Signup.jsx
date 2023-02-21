import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

// Styles
import { FormContainer, Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Signup = ({ supabase, timeOut }) => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [alert, setAlert] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const resetForm = () => {
		setEmail('');
		setUsername('');
		setPassword('');
		setPasswordConfirm('');
		setLoading(false);
		setError('');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		if (password !== passwordConfirm) {
			setLoading(false);
			setError('Passwords do not match');
			timeOut(3000).then(() => setError(''));
			return;
		}
		if (!email || !username || !password || !passwordConfirm) {
			setLoading(false);
			setError('Please fill out all fields');
			timeOut(3000).then(() => setError(''));
			return;
		}
		const { user, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					username,
				},
			},
		});

		if (error) {
			console.log(error);
			setLoading(false);
			setError(error.message);
			timeOut(3000).then(() => setError(''));
		}
	};

	return (
		<>
			<Head>
				<title>Resolutions- signup</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<FormContainer>
					<h2>Create a free account</h2>
					<Form onSubmit={handleSubmit}>
						<div className="form-container">
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									id="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="passwordConfirm">Confirm Password</label>
								<input
									type={showPassword ? 'text' : 'password'}
									id="passwordConfirm"
									value={passwordConfirm}
									onChange={(e) => setPasswordConfirm(e.target.value)}
								/>
								{showPassword ? (
									<span onClick={togglePassword}>
										<AiFillEyeInvisible />
									</span>
								) : (
									<span onClick={togglePassword}>
										<AiFillEye />
									</span>
								)}
							</div>
							<button className="account-btn" disabled={loading}>
								{loading ? 'Loading...' : 'Submit'}
							</button>
							{alert && <p>{alert}</p>}
							{error && <p>{error}</p>}
						</div>
					</Form>
					<p>
						Already have an account? <Link href="/login">Login</Link>
					</p>
				</FormContainer>
			</main>
		</>
	);
};

export default Signup;
