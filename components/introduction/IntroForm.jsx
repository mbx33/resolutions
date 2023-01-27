import React from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

import { Button } from '../../styles/styled_components/utils';

const IntroForm = ({ onSubmit }) => {
	return (
		<Container>
			<m.h1
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				This is my new Resolutions app
			</m.h1>
			<m.p
				initial={{ y: -200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				Start your New Year right!
			</m.p>

			<form onSubmit={onSubmit}>
				<label style={{ fontSize: '1.2rem' }} htmlFor="name">
					Accect Privacy Policy
				</label>
				<input type="checkbox" style={{ margin: '0 1rem 0 .3rem' }} />
				<Button next>Continue</Button>
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

	input[type='checkbox'] {
		width: 1.2rem;
		height: 1.2rem;
		padding: 1rem;
		border: 2px solid #000;
		background-color: #fff;
	}

	input[type='checkbox']:checked {
		background-color: var(--color-900);
		box-shadow: 0 0 5px var(--color-400);
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
