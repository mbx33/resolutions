import { useState } from 'react';
import { useResponse } from '../../contexts/ResponseContext';

import { Button } from '../../styles/styled_components/utils';
import {
	Wrapper,
	ResponseWrapper,
	EditWrapper,
} from '../../styles/styled_components/textDisplay';

import EditResponse from '../edit-last-year/EditResponse';

const Responses = ({ description, label, table, column }) => {
	const [edit, setEdit] = useState(false);
	const { user } = useResponse();
	return (
		<Wrapper>
			<ResponseWrapper>
				{label && <h5>{label}</h5>}
				<p>{description}</p>
			</ResponseWrapper>
		</Wrapper>
	);
};

export default Responses;

//Add this when edit is working
{
	/* <Wrapper>
	{edit ? (
		<EditWrapper>
			<EditResponse
				table={table}
				description={description}
				column={column}
				values={{ edit, setEdit }}
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
</Wrapper>; */
}
