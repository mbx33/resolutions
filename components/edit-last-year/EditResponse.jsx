import { useState } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import axios from 'axios';
import { useResponse } from '../../contexts/ResponseContext';

import { Button } from '../../styles/styled_components/utils';

const EditResponse = ({ description, table, values, column }) => {
	const user = useUser();
	const { edit, setEdit } = values;
	const [response, setResponse] = useState(description);
	const [message, setMessage] = useState('');
	const { updateResponses } = useResponse();

	const handleChanges = (e) => {
		setResponse(e.target.value);
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
				<Button
					primary
					submit
					onClick={(e) => updateResponses(e, table, column, response)}
				>
					Save
				</Button>
				{message && <p>{message}</p>}
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
