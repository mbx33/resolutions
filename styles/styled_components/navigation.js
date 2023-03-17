import styled from 'styled-components';

export const NavContainer = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--color-light);

	/* .btn-group {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		list-style: none;
	} */

	.nav {
		/* background-color: ${(props) =>
			props.dark ? 'rgba(0, 0, 0, 0.75)' : 'transparent'}; */
		padding: 1rem 1rem;
		border-radius: 1rem 0 0 5rem;
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
		padding-top: 0.3rem;
		font-size: 2.4rem;
		font-weight: 700;
		overflow-x: hidden;
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

	.mobile-view {
		visibility: hidden;

		.hamburger-nav {
			font-size: 3.5rem;
			color: var(--color-accent);
			cursor: pointer;

			&:hover {
				color: var(--color-400);
				transition: all 0.2s ease-in-out;
				transform: scale(1.1);
			}
		}
	}

	.mobile-nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-900);
		z-index: 100;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.mobile {
			display: flex;
			flex-direction: column;
			gap: 2rem;
			list-style: none;
		}

		.close {
			position: absolute;
			top: 2.5rem;
			right: 1rem;
			font-size: 3rem;
			color: var(--color-light);
			cursor: pointer;

			&:hover {
				color: var(--color-400);
				transition: all 0.2s ease-in-out;
				transform: scale(1.1);
			}
		}
	}

	@media (max-width: 800px) {
		.desktop-view {
			display: none;
		}
	}

	@media (max-width: 800px) {
		.mobile-view {
			visibility: visible;
		}
	}
`;
