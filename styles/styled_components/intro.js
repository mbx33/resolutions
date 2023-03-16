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

			@media (max-width: 768px) {
				width: 90%;
				font-size: 1.2rem;

				&:last-child {
					margin-bottom: 2rem;
				}
			}

			@media (max-width: 480px) {
				width: 100%;
				font-size: 1.2rem;
				text-align: left;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 1rem 1rem;
	}
`;
