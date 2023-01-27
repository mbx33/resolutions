import React from 'react';

// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part1 = ({ handleChange, nextForm, userResponses }) => {
	return (
		<div>
			<h1>List of your last year</h1>
			<p>
				Look at your past calander, week to week. If you see an important event,
				meeting with freinds, or family, or important job, write it here.
			</p>
			<Form>
				<div className="form-contianer">
					<div className="form-group">
						<label htmlFor="list">Enter your answers here</label>
						<textarea
							onChange={handleChange}
							value={userResponses.list}
							rows="10"
							cols="70"
							type="text"
							name="list"
							id="list"
						/>
					</div>
					<div className="button-group">
						{/* <button onClick={nextForm}>Start Over</button> */}

						<Button next primary onClick={nextForm}>
							Continue
						</Button>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default Part1;
