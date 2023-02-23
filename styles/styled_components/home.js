import styled from 'styled-components';

export const NavbarWrapper = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
`;

export const HowToContainer = styled.section`
	.how-to-steps {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		padding: 4rem 2rem;

		p {
			text-align: center;
			width: 60%;
		}
	}

	.step {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	svg {
		font-size: 5.5rem;
		color: var(--color-600);
	}
`;

export const WhyContainer = styled.section`
	padding: 2rem 2rem;
	background-color: var(--color-600);
	text-align: center;

	h1 {
		color: var(--color-100);
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	li {
		list-style: none;
		margin-bottom: 1.4rem;
		font-size: 1.2rem;
	}

	.cta-btn {
		margin-top: 2rem;
	}
`;
