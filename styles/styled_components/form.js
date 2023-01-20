import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: #f5ff;
	border-radius: 0 0 10px 10px;
	padding: 20px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

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
	width: 100%;
	height: 100%;
	padding: 1rem;
	border-radius: 10px;
	background-color: #f5ff;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

	fieldset {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		width: 100%;
		height: 100%;
		padding: 1rem;
		border-radius: 10px;
		background-color: #f5ff;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	}

	label {
		font-size: 1.2rem;
		color: #000;
	}

	textarea {
		width: 100%;
		height: 20rem;
		border-radius: 5px;
		border: 1px solid #000;
		padding: 0.8rem;
		font-size: 1.5rem;
	}

	input {
		width: 100%;
		height: 2rem;
		border-radius: 5px;
		border: 1px solid #000;
		padding: 1.2rem;
		font-size: 1.5rem;
		color: #000;
	}

	.button-group {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	/* button {
		width: 25%;
		border-radius: 5px;
		border: 1px solid #000;
		padding: 0.5rem;
		font-size: 1rem;
		color: #000;
		background-color: hsl(300, 100%, 77%);

		cursor: pointer;
		transition: background-color 0.2s ease-in-out;

		&:hover {
			background-color: hsl(300, 100%, 37%);
		}

		&:active {
			background-color: hsl(300, 100%, 37%);
		}
	} */
`;
