import { useState } from 'react';
import { useUser } from '@supabase/auth-helpers-react';

import { Button } from '../../styles/styled_components/utils';
import { Form, FormContainer } from '../../styles/styled_components/form';

function timer(ms) {
	return new Promise((res) => setTimeout(res, ms));
}

const EditResponse = ({ description, table, values, column, updateResponse }) => {
	const user = useUser();
	const { edit, setEdit } = values;
	const [response, setResponse] = useState(description);
	const [isLoading, setIsLoading] = useState(false);

	const handleChanges = (e) => {
		setResponse(e.target.value);
	};

	async function handleSubmit(e, table, column, value) {
		e.preventDefault();
		console.log({
			table,
			column,
			value,
		});
		updateResponse(table, column, value);
		setIsLoading(true);
		await timer(2500);
		setIsLoading(false);
		setEdit(!edit);
	}

	return (
		<FormContainer>
			<Form onSubmit={(e) => handleSubmit(e, table, column, response)}>
				<textarea
					onChange={handleChanges}
					name={description}
					id={description}
					value={response}
					cols="60"
					rows="5"
				></textarea>
				{!isLoading ? (
					<div className="btn-group">
						<Button primary submit>
							Save
						</Button>
						<Button
							style={{ marginLeft: '2rem' }}
							primary
							submit
							onClick={() => setEdit(!edit)}
						>
							Cancel
						</Button>
					</div>
				) : (
					<p>Updating...</p>
				)}
			</Form>
		</FormContainer>
	);
};

export default EditResponse;
