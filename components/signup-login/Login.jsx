import Link from 'next/link';
import Head from 'next/head';

import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Button } from '../../styles/styled_components/utils';

// Styles
import { FormContainer, Form } from '../../styles/styled_components/form';

const Login = ({ supabase, session, setShowSignup }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [message, setMessage] = useState(null);
	const [showPassword, setShowPassword] = useState(false);

	function timeout(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { u, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			console.log(error);
			setLoading(false);
			setError(error.message);
			timeout(3000).then(() => setError(''));
		}
	};

	return (
		<>
			<Head>
				<title>Resolution- login</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<dialog>
				<FormContainer>
					<h2>login to your account</h2>
					{message && <p>{message}</p>}
					{error && <p>{error}</p>}
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
								<label htmlFor="password">Password</label>
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
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
								{loading ? 'Loading...' : 'Login'}
							</button>
						</div>
						<p style={{ margin: '1.3rem 0' }}>
							No Account?{' '}
							<span onClick={() => setShowSignup(true)}>Signup</span>
						</p>
					</Form>
				</FormContainer>
			</dialog>
		</>
	);
};

export default Login;
