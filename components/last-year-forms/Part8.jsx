import React from 'react';

// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part8 = ({ handleChange, userResponses, prevForm, nextForm }) => {
	return (
		<div>
			<h1>Release, Letting Go</h1>
			<p>
				Is there something else you are holding on to? Something you need to get
				rid of before the start of the new year? Write it down, think over it and
				let it go.
			</p>
			<Form>
				<textarea
					onChange={handleChange}
					value={userResponses.release}
					rows="20"
					cols="100"
					type="text"
					name="release"
					id="release"
				/>
				<div className="button-group">
					<Button onClick={prevForm}>Back</Button>

					<Button onClick={nextForm}>Continue</Button>
				</div>
			</Form>
		</div>
	);
};

export default Part8;
