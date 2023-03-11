import { useState } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import axios from 'axios';

import { Button } from '../../styles/styled_components/utils';

const EditResponse = ({ description, branch, values, column }) => {
	const user = useUser();
	const supabase = useSupabaseClient();
	const { edit, setEdit } = values;
	const [response, setResponse] = useState(description);

	const handleChanges = (e) => {
		setResponse(e.target.value);
	};

	const updateResponse = async (e) => {
		e.preventDefault();
		console.log(column, branch, response);
		const res = await axios.post('/api/update-response', {
			user,
			column,
			branch,
			response,
		});
		console.log(res);

		if (res) setEdit(!edit);
	};

	return (
		<>
			<textarea
				onChange={handleChanges}
				name={description}
				id={description}
				value={response}
				cols="60"
				rows="5"
			></textarea>
			<div className="btn-group">
				<Button primary submit onClick={(e) => updateResponse(e)}>
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
		</>
	);
};

export default EditResponse;
