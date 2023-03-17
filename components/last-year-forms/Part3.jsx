import { useState } from 'react';

import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part3 = ({ handleChange, userResponses, prevStep, nextForm }) => {
	return (
		<main>
			<Form>
				<h1 className="form-title">Six important moments from last year</h1>
				<div className="form-container">
					<div className="form-group">
						<label htmlFor="smartest">Smartest decision I made</label>
						<input
							onChange={handleChange}
							value={userResponses.smartest}
							type="text"
							name="smartest"
							id="smartest"
						/>
						<label htmlFor="biggest">The biggest Lesson I learned</label>
					</div>
					<div className="form-group">
						<input
							onChange={handleChange}
							value={userResponses.biggest}
							type="text"
							name="biggest"
							id="biggest"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="risk">The biggest risk I took</label>
						<input
							onChange={handleChange}
							value={userResponses.risk}
							type="text"
							name="risk"
							id="risk"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="surprise">The biggest surprise of the year</label>
						<input
							onChange={handleChange}
							value={userResponses.surprise}
							type="text"
							name="surprise"
							id="surprise"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="others">
							The most important thing I did for others
						</label>
						<input
							onChange={handleChange}
							value={userResponses.others}
							type="text"
							name="others"
							id="others"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="completed">The biggest thing I completed</label>
						<input
							onChange={handleChange}
							value={userResponses.completed}
							type="text"
							name="completed"
							id="completed"
						/>
					</div>
					<div className="button-group">
						<Button back primary onClick={prevStep}>
							Back
						</Button>
						<Button next primary onClick={nextForm}>
							Continue
						</Button>
					</div>
				</div>
			</Form>
		</main>
	);
};

export default Part3;
