import React from 'react';

import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part5 = ({ handleChange, newYearResponses, prevStep, nextForm }) => {
	return (
		<main>
			<h1>Six wishes for the New Year</h1>

			<Form>
				<label htmlFor="procrastinate">
					This year I will not procrastinate on...
				</label>
				<input
					onChange={handleChange}
					value={newYearResponses.procrastinate}
					type="text"
					name="procrastinate"
					id="procrastinate"
				/>
				<label htmlFor="energy">This year I will draw energy from...</label>
				<input
					onChange={handleChange}
					value={newYearResponses.energy}
					type="text"
					name="energy"
					id="energy"
				/>
				<label htmlFor="bravest">This year I will be bravest when...</label>
				<input
					onChange={handleChange}
					value={newYearResponses.bravest}
					type="text"
					name="bravest"
					id="bravest"
				/>
				<label htmlFor="sayYes">This year I will say yes when...</label>
				<input
					onChange={handleChange}
					value={newYearResponses.sayYes}
					type="text"
					name="sayYes"
					id="sayYes"
				/>
				<label htmlFor="advise">This year I will advise myself to..</label>
				<input
					onChange={handleChange}
					value={newYearResponses.advise}
					type="text"
					name="advise"
					id="advise"
				/>
				<label htmlFor="special">
					This year will be special for me because...
				</label>
				<input
					onChange={handleChange}
					value={newYearResponses.special}
					type="text"
					name="special"
					id="special"
				/>
				<div className="button-group">
					<Button primary onClick={prevStep}>
						Back
					</Button>
					<Button primary onClick={nextForm}>
						Continue
					</Button>
				</div>
			</Form>
		</main>
	);
};

export default Part5;
