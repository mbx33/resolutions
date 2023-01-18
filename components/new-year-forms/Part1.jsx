import React from 'react';

import { Form } from '../../styles/styled_components/form';

const Part1 = ({ handleChange, newYearResponses, nextForm }) => {
	return (
		<div>
			<h1>Your dreams for the upcoming Year!!</h1>
			<p>
				Look at your past calander, week to week. If you see an important event,
				meeting with freinds, or family, or important job, write it here.
			</p>
			<Form>
				<label htmlFor="list">Enter your answers here</label>
				<textarea
					onChange={handleChange}
					value={newYearResponses.dreams}
					rows="20"
					cols="100"
					type="text"
					name="list"
					id="list"
				/>
				<div className="button-group">
					{/* <button onClick={nextForm}>Start Over</button> */}

					<button onClick={nextForm}>Continue</button>
				</div>
			</Form>
		</div>
	);
};

export default Part1;
