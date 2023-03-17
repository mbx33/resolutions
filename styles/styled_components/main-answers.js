import styled from 'styled-components';

export const MainAnswerContainer = styled.div`
	padding: 10rem 0;
	/* Add this back in when you figure out a background image */
	/*
	 background-image: url(/answers-bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center; */
	/* background-attachment: fixed; */
	background-color: var(--color-900);

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
		color: var(--color-accent);
	}

	h2,
	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--color-accent);
		padding: 0 3rem;
	}

	@media (max-width: 768px) {
		padding-right: 1rem;
		padding-left: 1rem;
	}
`;
