import styled from 'styled-components';

export const NavContainer = styled.nav`
	width: 100%;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: hsl(300, 100%, 37%);

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

	.nav ul li {
		text-decoration: none;
		color: black;

		&:hover {
			color: hsl(300, 100%, 87%);
		}

		&:active {
			color: hsl(300, 100%, 87%);
			transition: all 0.2s ease-in-out;
			transform: scale(0.9);
		}
	}

	.logo {
		font-size: 2.4rem;
		font-weight: 700;
	}

	button {
		color: hsl(300, 100%, 37%);
		background-color: hsl(300, 100%, 17%);
		border: none;
		padding: 0.5rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: 700;
		cursor: pointer;

		&:hover {
			background-color: hsl(300, 100%, 87%);
			color: hsl(300, 100%, 37%);
		}
	}
`;
