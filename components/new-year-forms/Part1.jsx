import React from 'react';

import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part1 = ({ handleChange, newYearResponses, nextForm }) => {
	return (
		<div>
			<h1>Dream Big!</h1>
			<p>
				How does the coming year look? What would be your ideal development? Why
				is this year going to be great? Write and let go of expectations and do
				not be afraid to dream
			</p>
			<Form>
				<label htmlFor="dreams">Enter your answers here</label>
				<textarea
					onChange={handleChange}
					value={newYearResponses.dreams}
					rows="20"
					cols="100"
					type="text"
					name="dreams"
					id="dreams"
				/>
				<div className="button-group">
					{/* <button onClick={nextForm}>Start Over</button> */}

					<Button next primary onClick={nextForm}>
						Continue
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default Part1;
