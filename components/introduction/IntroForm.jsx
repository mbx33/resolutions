import React from 'react';
import styled from 'styled-components';

import { Button } from '../../styles/styled_components/utils';

const IntroForm = ({ onSubmit }) => {
	return (
		<Container>
			<h1>This is my new Resolutions app</h1>
			<p>Start your New Year right!</p>

			<form onSubmit={onSubmit}>
				<label htmlFor="name">Accect Privacy Policy</label>
				<input type="checkbox" />
				<Button>Continue</Button>
			</form>
		</Container>
	);
};

export default IntroForm;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	color: white;
	padding: 2rem 3.5rem;
	border-radius: 0 0 10px 10px;

	h1 {
		font-size: 2.2rem;
	}

	p {
		font-size: 1.5rem;
	}

	.message {
		.success {
			font-size: 1.2rem;
			color: hsl(100, 100%, 0%);
		}
		.error {
			font-size: 1.2rem;
			color: blue;
		}
	}
`;
