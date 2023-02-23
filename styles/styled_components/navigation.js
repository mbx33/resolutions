import styled from 'styled-components';

export const NavContainer = styled.nav`
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.3rem 1.5rem;
	color: var(--color-light);

	.btn-group {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		list-style: none;
	}

	a {
		font-size: 1.8rem;
	}

	.nav a {
		text-decoration: none;
	}

	.nav a::before {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--color-light);
		transform-origin: center;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}

	.nav a {
		position: relative;
		text-decoration: none;
		color: var(--color-light);

		&:hover {
			color: var(--color-light);

			&::before {
				transform: scaleX(1);
				transition: transform 0.3s ease-in-out;
			}
		}

		&:active {
			color: var(--color-light);
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
		color: var(--color-600);
	}

	.logo a:hover {
		color: var(--color-400);
	}

	.btn-group {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 3rem;
	}
`;
