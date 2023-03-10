import styled from 'styled-components';

export const Main = styled.main`
	position: relative;
	padding: 10rem 0;
	background-color: var(--color-dark);
	z-index: 1;
	height: 150vh;
`;

export const ImageContainer = styled.div`
	position: absolute;
	top: -55%;
	left: 55%;
	height: 100%;
	background-color: var(--color-light);
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
		url('https://res.cloudinary.com/high-desert-development/image/upload/v1678425317/milky-way_sloxlm.jpg');
	background-size: cover;
	transform: rotate(225deg);
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	/* z-index: 10; */
`;

export const BorderContainer = styled.div`
	position: absolute;
	transform: rotate(225deg);
	top: 20%;
	left: -9%;
	width: 130%;
	/* z-index: 10; */
	border-bottom: 1px solid var(--color-accent);
`;

export const WaterMark = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	font-size: 10rem;
	color: var(--color-accent);
	opacity: 0.3;
`;
