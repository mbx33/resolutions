import React from 'react';
import Router from 'next/router';

import { Button } from '../../styles/styled_components/utils';
import { CenterContainer } from '../../styles/styled_components/utils';

const Preparing = ({ user }) => {
	const router = Router;

	return (
		<CenterContainer>
			<h1>Getting Prepared</h1>
			<p>
				Before you start, you need to prepare yourself. This is a very important
				step.
			</p>
			<p>You need to be in the right mindset to be able to do this successfully.</p>
			<p>Gather yourself</p>
			<p>Turn on relaxing music</p>
			<p>Get yourself a drink (coffee, tea)</p>
			<p>Let go of expectations</p>
			<p>Begin when you’re ready.</p>
			<div className="button-group">
				{!user && (
					<Button create onClick={() => router.push('/signup')}>
						Register
					</Button>
				)}
				{!user && (
					<Button
						style={{ marginLeft: '2rem' }}
						next
						onClick={() => router.push('/login')}
					>
						Login
					</Button>
				)}
				{user && (
					<Button next onClick={() => router.push('last-year')}>
						Begin
					</Button>
				)}
			</div>
		</CenterContainer>
	);
};

export default Preparing;
