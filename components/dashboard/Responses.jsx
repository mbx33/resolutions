import { useState } from 'react';
import { useResponse } from '../../contexts/ResponseContext';

import { Button } from '../../styles/styled_components/utils';
import {
	Wrapper,
	ResponseWrapper,
	EditWrapper,
} from '../../styles/styled_components/textDisplay';

import EditResponse from '../edit/EditResponse';

const Responses = ({ description, label, table, column }) => {
	const [edit, setEdit] = useState(false);
	const { user, updateResponse, message } = useResponse();
	return (
		<Wrapper>
			{message && <p>{message}</p>}
			{edit ? (
				<EditWrapper>
					<EditResponse
						table={table}
						description={description}
						column={column}
						values={{ edit, setEdit }}
						updateResponse={updateResponse}
						toggleEdit={setEdit}
					/>
				</EditWrapper>
			) : (
				<ResponseWrapper>
					{label && <h5>{label}</h5>}
					<p>{description}</p>
					<Button primary submit onClick={() => setEdit(!edit)}>
						Edit
					</Button>
				</ResponseWrapper>
			)}
		</Wrapper>
	);
};

export default Responses;
