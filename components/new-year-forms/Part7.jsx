import { useState } from 'react';

import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part7 = ({ handleChange, newYearResponses, prevForm, uploadNewYear }) => {
	return (
		<main>
			<h1>I believe that nothing is impossible this year!</h1>

			<Form>
				<fieldset>
					<legend>Signature</legend>

					<input
						onChange={handleChange}
						value={newYearResponses.signature}
						type="text"
						name="signature"
						id="signature"
					/>
				</fieldset>

				<fieldset>
					<legend>Date</legend>

					<input
						onChange={handleChange}
						value={newYearResponses.date}
						type="date"
						name="date"
						id="date"
					/>
				</fieldset>

				<div className="button-group">
					<Button back primary onClick={prevForm}>
						Back
					</Button>
					<Button submit primary onClick={uploadNewYear}>
						Save
					</Button>
				</div>
			</Form>
		</main>
	);
};

export default Part7;
