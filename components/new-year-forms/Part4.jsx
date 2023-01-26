import React from 'react';

import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part4 = ({ handleChange, newYearResponses, prevForm, nextStep }) => {
	return (
		<main>
			<h1>The Magic three of the coming year</h1>

			<Form>
				<label htmlFor="comfort">
					These 3 things will create comfort around me
				</label>
				<input
					onChange={handleChange}
					value={newYearResponses.comfort}
					type="text"
					name="comfort"
					id="comfort"
				/>
				<label htmlFor="morning">These 3 things I will do every morning</label>
				<input
					onChange={handleChange}
					value={newYearResponses.morning}
					type="text"
					name="morning"
					id="morning"
				/>
				<label htmlFor="indulge">
					These 3 things I will indulge in on a regular basis.
				</label>
				<input
					onChange={handleChange}
					value={newYearResponses.indulge}
					type="text"
					name="indulge"
					id="indulge"
				/>
				<label htmlFor="visit">I will visit these 3 places</label>
				<input
					onChange={handleChange}
					value={newYearResponses.visit}
					type="text"
					name="visit"
					id="visit"
				/>
				<label htmlFor="relationships">
					In these 3 ways, I will build and continue relationships with those
					close to me.
				</label>
				<input
					onChange={handleChange}
					value={newYearResponses.relationships}
					type="text"
					name="relationships"
					id="relationships"
				/>
				<label htmlFor="gifts">
					With these 3 things I will gift myself for success.
				</label>
				<input
					onChange={handleChange}
					value={newYearResponses.gifts}
					type="text"
					name="gifts"
					id="gifts"
				/>
				<div className="button-group">
					<Button back primary onClick={prevForm}>
						Back
					</Button>
					<Button next primary onClick={nextStep}>
						Continue
					</Button>
				</div>
			</Form>
		</main>
	);
};

export default Part4;
