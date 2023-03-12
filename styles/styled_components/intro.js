import styled from 'styled-components';

export const PrepContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 2rem 2rem;
	background-color: var(--color-600);
	color: var(--color-100);

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.prep-steps {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;

		p {
			text-align: center;
			width: 60%;
		}
	}
`;
