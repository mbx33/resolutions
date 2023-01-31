import styled from 'styled-components';

//fluid grid
// display: grid
// grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	background-color: var(--color-800);
	color: var(--color-200);
`;
