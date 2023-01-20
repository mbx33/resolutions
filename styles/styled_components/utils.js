import styled from 'styled-components';

// * Styles for the general button ////////////////
export const Button = styled.button`
	background-color: ${(props) => (props.primary ? 'hsl(300, 100%, 37%)' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'hsl(300, 100%, 37%)')};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid hsl(300, 100%, 37%);
	border-radius: 3px;

	&:hover {
		background-color: ${(props) => (props.primary ? 'white' : 'hsl(300, 100%, 37%)')};
		color: ${(props) => (props.primary ? 'hsl(300, 100%, 37%)' : 'white')};
	}

	&:active {
		background-color: ${(props) => (props.primary ? 'white' : 'hsl(300, 100%, 37%)')};
		color: ${(props) => (props.primary ? 'hsl(300, 100%, 37%)' : 'white')};
	}

	&:focus {
		background-color: ${(props) => (props.primary ? 'white' : 'hsl(300, 100%, 37%)')};
		color: ${(props) => (props.primary ? 'hsl(300, 100%, 37%)' : 'white')};
	}
`;
/////////////////////////////////////////////////////////////////////////
