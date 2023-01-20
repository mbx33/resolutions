import React from 'react';

import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part3 = ({ handleChange, newYearResponses, nextForm, prevStep }) => {
	return (
		<main>
			<h1>The Magic three of the coming year</h1>

			<Form>
				<label htmlFor="love">The 3 things I will love about myself</label>
				<input
					onChange={handleChange}
					value={newYearResponses.love}
					type="text"
					name="love"
					id="love"
				/>
				<label htmlFor="letGo">
					The 3 things I am ready to let go and move on
				</label>
				<input
					onChange={handleChange}
					value={newYearResponses.letGo}
					type="text"
					name="letGo"
					id="letGo"
				/>
				<label htmlFor="achieve">The 3 things I want to achieve the most</label>
				<input
					onChange={handleChange}
					value={newYearResponses.achieve}
					type="text"
					name="achieve"
					id="achieve"
				/>
				<label htmlFor="support">
					These 3 people will be my support in difficult times
				</label>
				<input
					onChange={handleChange}
					value={newYearResponses.support}
					type="text"
					name="support"
					id="support"
				/>
				<label htmlFor="try">These 3 things I would like try</label>
				<input
					onChange={handleChange}
					value={newYearResponses.try}
					type="text"
					name="try"
					id="try"
				/>
				<label htmlFor="sayNo">These 3 things I am ready to say no </label>
				<input
					onChange={handleChange}
					value={newYearResponses.sayNo}
					type="text"
					name="sayNo"
					id="sayNo"
				/>
				<div className="button-group">
					<Button onClick={prevStep}>Back</Button>
					<Button onClick={nextForm}>Continue</Button>
				</div>
			</Form>
		</main>
	);
};

export default Part3;
