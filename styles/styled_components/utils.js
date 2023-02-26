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

export const MainContainer = styled.main`
	/* background-image: url('https://res.cloudinary.com/high-desert-development/image/upload/v1677281717/starry_ev16p6.jpg'); */
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	/* height: 100vh; */

	/* .header {
		background-color: rgb(0, 0, 0, 0.5);
	} */
`;

// * Styles for a container that centers all of it's text and children
export const CenterContainer = styled.main`
	font-size: 1.2rem;
	display: grid;
	place-items: center;
	gap: 1.9rem;
	color: var(--color-light);
	max-width: 60%;
	margin: 0 auto;
	height: 100vh;

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
				{props.cta && <>{children}</>}
			</div>
		</ButtonContainer>
	);
};

// * Styles for the general button ////////////////
export const ButtonContainer = styled.button`
	/* background-color: ${(props) =>
		props.primary ? 'var(--color-600)' : 'var(--color-900)'}; */
	background-color: ${(props) =>
		props.primary
			? 'var(--color-600)'
			: props.secondary
			? 'var(--color-dark)'
			: 'var(--color-900)'};

	color: ${(props) =>
		props.primary
			? 'var(--color-light)'
			: props.secondary
			? 'var(--color-light)'
			: 'var(--color-dark)'};

	font-size: 1.3rem;
	border: ${(props) => (props.primary ? '2px solid var(--color-dark)' : 'none')};
	border-radius: ${(props) => (props.cta ? '.5rem' : '3px')};
	border: none;
	padding: ${(props) => (props.cta ? '0.5rem 2.5rem;' : '0.2rem 1rem')};
	font-size: 1.2rem;
	font-weight: 700;
	cursor: pointer;

	&:focus {
		outline: none;
	}

	&:hover {
		background-color: ${(props) =>
			props.primary
				? 'var(--color-400)'
				: props.secondary
				? 'var(--color-900)'
				: 'var(--color-dark)'};
		color: ${(props) =>
			props.primary
				? 'var(--color-light)'
				: props.secondary
				? 'var(--color-light)'
				: 'var(--color-dark)'};
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
