import styled from 'styled-components';

export const MainAnswerContainer = styled.div`
	padding: 10rem 0;
	background-image: url(/answers-bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 -88rem;
	background-attachment: fixed;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	scroll-behavior: smooth;

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
