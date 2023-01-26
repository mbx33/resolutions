import styled from 'styled-components';
import { BsArrowUpSquare, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// * Styles for main container ////////////////
export const Main = styled.main`
	background-color: var(--color-dark);
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
			</div>
		</ButtonContainer>
	);
};

// * Styles for the general button ////////////////
export const ButtonContainer = styled.button`
	background-color: ${(props) =>
		props.primary ? 'var(--color-900)' : 'var(--color-400)'};
	color: ${(props) => (props.primary ? 'var(--color-light)' : 'var(--color-light)')};
	font-size: 1em;
	margin: 1em;
	padding: 0.45em 1em;
	border: ${(props) => (props.primary ? '2px solid var(--color-dark)' : 'none')};
	border-radius: 3px;
	text-transform: uppercase;

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

	.group {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	span {
		font-size: 1.5em;
		display: inline-block;
	}
`;
/////////////////////////////////////////////////////////////////////////
