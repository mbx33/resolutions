import React from 'react';
import styled from 'styled-components';

const IntroForm = ({ onSubmit }) => {
	return (
		<Container>
			<h1>This is my new Resolutions app</h1>
			<p>Start your New Year right!</p>
			<form onSubmit={onSubmit}>
				<label htmlFor="name">Accect Privacy Policy</label>
				<input type="checkbox" />
				<button>Start Now</button>
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
	border-radius: 0.5rem;

	h1 {
		font-size: 2.2rem;
	}

	p {
		font-size: 1.5rem;
	}

	button {
		background-color: hsl(0, 0%, 20%);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;

		&:hover {
			background-color: hsl(0, 0%, 30%);

			transition: background-color 0.2s ease-in-out;

			cursor: pointer;
		}
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
