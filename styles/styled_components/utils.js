import styled from 'styled-components';

// * Styles for main container ////////////////
export const Main = styled.main`
	background-color: var(--color-dark);
`;
/////////////////////////////////////////////////////////////////////////

// * Styles for the general button ////////////////
export const Button = styled.button`
	background-color: ${(props) =>
		props.primary ? 'var(--color-900)' : 'var(--color-400)'};
	color: ${(props) => (props.primary ? 'var(--color-light)' : 'var(--color-light)')};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: ${(props) => (props.primary ? '2px solid var(--color-dark)' : 'none')};
	border-radius: 3px;

	&:hover {
		background-color: ${(props) =>
			props.primary ? 'var(--color-400)' : 'var(--color-900)'};
		color: ${(props) => (props.primary ? 'var(--color-dark)' : 'var(--color-light)')};
		border: ${(props) => (props.primary ? '2px solid var(--color-900)' : 'none')};
		transition: all 0.2s ease-in-out;
	}

	&:active {
		background-color: ${(props) =>
			props.primary ? 'var(--color-400)' : 'var(--color-900)'};
		color: ${(props) => (props.primary ? 'var(--color-dark)' : 'var(--color-light)')};
	}

	&:focus {
		outline: none;
		background-color: ${(props) =>
			props.primary ? 'var(--color-400)' : 'var(--color-900)'};
		color: ${(props) => (props.primary ? 'var(--color-dark)' : 'var(--color-light)')};
	}
`;
/////////////////////////////////////////////////////////////////////////
