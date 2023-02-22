import React from 'react';
import { Wrapper } from '../../styles/styled_components/textDisplay';
import { useResponse } from '../../contexts/ResponseContext';

const Responses = ({ description, label, edit }) => {
	const { user } = useResponse();
	return (
		<Wrapper>
			{label && <h5>{label}</h5>}
			<p>{description}</p>
			{edit && (
				<button onClick={() => edit(description, 'Updated text', user)}>
					Edit
				</button>
			)}
		</Wrapper>
	);
};

export default Responses;
