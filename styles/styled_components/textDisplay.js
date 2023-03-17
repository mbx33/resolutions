import styled from 'styled-components';

export const Wrapper = styled.div`
	font-size: 1.5rem;
	background: var(--color-600);
	color: var(--color-dark);
	border: 1px solid var(--color-accent);
	border-radius: 0.5rem;
	box-shadow: 0 0.2rem 1.2rem rgba(27, 31, 35, 0.15);
	margin: 1rem 0;
	padding: 0.5rem;
	min-width: 60%;

	@media (max-width: 768px) {
		min-width: 90%;
	}

	@media (max-width: 480px) {
		min-width: 100%;
	}
`;

export const ResponseWrapper = styled.div`
	font-size: 1.7rem;
	background: var(--color-600);
	color: var(--color-dark);
	border: 1px solid var(--color-accent);
	border-radius: 1rem;
	box-shadow: 0 0.2rem 1.2rem rgba(27, 31, 35, 0.15);
	margin: 1rem 0;
	padding: 1rem 2rem;
	/* min-width: 30rem; */
`;

export const EditWrapper = styled.div`
	font-size: 1.5rem;
	background: var(--color-200);
	color: var(--color-dark);
	border: 1px solid var(--color-accent);
	border-radius: 3px;
	box-shadow: 0 0.2rem 1.2rem rgba(27, 31, 35, 0.15);
	margin: 1rem 0;
	padding: 1rem;
	min-width: 30rem;
`;
