import styled from 'styled-components';
import { BsArrowUpSquare, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';

// * Styles for main container ////////////////
export const Main = styled.main`
	background-color: var(--color-dark);

	.error {
		font-size: 1.2rem;
		color: red;
		text-align: center;
	}
`;
/////////////////////////////////////////////////////////////////////////

// * Styles for a container that centers all of it's text and children
export const CenterContainer = styled.main`
	font-size: 1.2rem;
	display: grid;
	place-items: center;
	gap: 1.9rem;
	color: var(--color-light);
	max-width: 60%;
	margin: 0 auto;

	a {
		color: var(--color-600);
		font-size: 2.2rem;
		text-decoration: none;
	}

	a:hover {
		color: var(--color-400);
	}
`;
/////////////////////////////////////////////////////////////////////////

// * Styles for an error container ////////////////
export const ErrorContainer = styled.main`
	height: 80vh;
	background-color: var(--color-dark);
	color: var(--color-light);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;
/////////////////////////////////////////////////////////////////////////

export const Button = ({ children, ...props }) => {
	return (
		<ButtonContainer {...props}>
			<div className="group">
				{props.back && (
					<>
						<span>
							<BsArrowLeftShort />
						</span>
						{children}
					</>
				)}
				{props.next && (
					<>
						{children}
						<span>
							<BsArrowRightShort />
						</span>
					</>
				)}
				{props.submit && (
					<>
						{children}
						<span>
							<BsArrowUpSquare />
						</span>
					</>
				)}
				{props.create && (
					<>
						{children}
						<span>
							<AiOutlineUserAdd />
						</span>
					</>
				)}
			</div>
		</ButtonContainer>
	);
};

// * Styles for the general button ////////////////
export const ButtonContainer = styled.button`
	background-color: ${(props) =>
		props.primary ? 'var(--color-600)' : 'var(--color-900)'};
	color: ${(props) => (props.primary ? 'var(--color-dark)' : 'var(--color-light)')};
	font-size: 1.3rem;
	border: ${(props) => (props.primary ? '2px solid var(--color-dark)' : 'none')};
	border-radius: 3px;
	border: none;
	padding: 0.2rem 1rem;
	text-transform: uppercase;
	margin-top: 1rem;

	&:hover {
		background-color: ${(props) =>
			props.primary ? 'var(--color-400)' : 'var(--color-400)'};
		color: ${(props) => (props.primary ? 'var(--color-dark)' : 'var(--color-dark)')};
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

	.group {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	span {
		font-size: 1.3em;
		display: inline-block;
	}
`;
/////////////////////////////////////////////////////////////////////////
