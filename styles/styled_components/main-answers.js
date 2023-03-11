import styled from 'styled-components';

export const MainAnswerContainer = styled.div`
	padding: 10rem 0;
	background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
		url(/answers-bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 -94rem;
	background-attachment: fixed;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	text-align: center;

	h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--color-dark);
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--color-dark);
	}
`;
