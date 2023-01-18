import React from 'react';
import Router from 'next/router';

const Preparing = ({ user }) => {
	const router = Router;

	return (
		<div>
			<h1>Getting Prepared</h1>
			<p>
				Before you start, you need to prepare yourself. This is a very important
				step. You need to be in the right mindset to be able to do this
				successfully.
			</p>
			<p>Gather yourself</p>
			<p>Turn on relaxing music</p>
			<p>Get yourself a drink (coffee, tea)</p>
			<p>Let go of expectations</p>
			<p>Begin when you’re ready.</p>
			{!user && <button onClick={() => router.push('/signup')}>Register</button>}
			{!user && <button onClick={() => router.push('/login')}>Login</button>}
			{user && <button onClick={() => router.push('last-year')}>Continue</button>}
		</div>
	);
};

export default Preparing;