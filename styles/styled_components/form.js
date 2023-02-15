import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--color-600);
	border-radius: 0 0 10px 10px;
	padding: 20px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	min-height: calc(100vh - 165px);

	.error {
		font-size: 1.2rem;
		color: red;
	}
	.success {
		font-size: 1.2rem;
		color: hsl(100, 100%, 0%);
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	padding: 1rem 2rem;
	border-radius: 10px;
	background-color: var(--color-200);
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

	fieldset {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 10px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

		legend {
			font-size: 1.5rem;
			font-weight: bold;
			color: var(--color-900);
		}

		input {
			border-radius: 5px;
			border: 1px solid var(--color-800);
			padding: 0.2rem 0.5rem;
			width: 100%;
		}
	}

	label {
		font-size: 1.2rem;
		color: #000;
	}

	textarea {
		border-radius: 5px;
		border: 1px solid #000;
		padding: 0.8rem;
		font-size: 1.2rem;
	}

	input {
		border-radius: 5px;
		border: 1px solid #000;
		font-size: 1.2rem;
		padding: 0.2rem 0.5rem;
		color: #000;
	}

	.button-group {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.form-container {
		display: grid;
		width: 100%;
		gap: 1.5rem;
		grid-template-columns: 1fr;
		padding: 1.3rem 2rem;
	}

	.form-group {
		display: grid;
		gap: 0.5rem;

		.future {
			width: 60%;
			margin: 0 auto;
		}
	}

	.account-btn {
		border-radius: 5px;
		padding: 0.5rem;
		font-size: 1.1rem;
		color: var(--color-light);
		background-color: var(--color-600);
		border: none;
		margin-top: 1rem;

		cursor: pointer;
		transition: background-color 0.2s ease-in-out;

		&:hover {
			background-color: var(--color-900);
		}

		&:active {
			background-color: var(--color-900);
		}
	}
`;
