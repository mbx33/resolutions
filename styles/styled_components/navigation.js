import styled from 'styled-components';

export const NavContainer = styled.nav`
	width: 100%;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.2rem 1.5rem;
	background-color: var(--color-800);

	.nav ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		list-style: none;
	}

	li {
		font-size: 1.8rem;
	}

	.nav a {
		text-decoration: none;
	}

	.nav ul li::before {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--color-400);
		transform-origin: center;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}

	.nav ul li {
		position: relative;
		text-decoration: none;
		color: var(--color-dark);

		&:hover {
			color: var(--color-400);

			&::before {
				transform: scaleX(1);
				transition: transform 0.3s ease-in-out;
			}
		}

		&:active {
			color: var(--color-400);
			transition: all 0.2s ease-in-out;
			transform: scale(0.9);
		}
	}

	.logo {
		font-size: 2.4rem;
		font-weight: 700;
	}

	.logo a {
		text-decoration: none;
		color: var(--color-dark);
	}

	.logo a:hover {
		color: var(--color-400);
	}

	button {
		color: var(--color-dark);
		background-color: var(--color-400);
		border: none;
		padding: 0.5rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: 700;
		cursor: pointer;

		&:hover {
			background-color: var(--color-900);
			color: var(--color-400);
		}
	}
`;
