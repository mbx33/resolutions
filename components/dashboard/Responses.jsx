import React from 'react';
import { Wrapper } from '../../styles/styled_components/textDisplay';

const Responses = ({ description, label }) => {
	return (
		<Wrapper>
			{label && <h5>{label}</h5>}
			<p>{description}</p>
		</Wrapper>
	);
};

export default Responses;
