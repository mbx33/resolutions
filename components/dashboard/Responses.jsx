import { useState } from 'react';
import { Wrapper } from '../../styles/styled_components/textDisplay';
import { useResponse } from '../../contexts/ResponseContext';
import { Button } from '../../styles/styled_components/utils';

import EditResponse from '../edit-last-year/EditResponse';

const Responses = ({ description, label, branch, column }) => {
	const [edit, setEdit] = useState(false);
	const { user } = useResponse();
	return (
		<Wrapper>
			{edit ? (
				<>
					<EditResponse
						branch={branch}
						description={description}
						column={column}
						values={{ edit, setEdit }}
					/>
				</>
			) : (
				<>
					{label && <h5>{label}</h5>}
					<p>{description}</p>
					<Button primary submit onClick={() => setEdit(!edit)}>
						Edit
					</Button>
				</>
			)}
		</Wrapper>
	);
};

export default Responses;
