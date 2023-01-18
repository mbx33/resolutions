import React from 'react';
import { Form } from '../../styles/styled_components/form';

const Part7 = ({ handleChange, userResponses, prevStep, nextForm }) => {
	return (
		<div>
			<h1>Forgiveness</h1>
			<p>
				Has anything happened in the last year that you could forgive? Are there
				any actions or words that still torment you? Maybe you are angry with
				yourself for something? Write it down. Be kind to yourself and forgive *
			</p>
			<Form>
				<textarea
					onChange={handleChange}
					value={userResponses.forgiveness}
					rows="20"
					cols="100"
					type="text"
					name="forgiveness"
					id="forgiveness"
				/>

				<div className="button-group">
					<button onClick={prevStep}>Back</button>

					<button onClick={nextForm}>Continue</button>
				</div>
			</Form>
			<p>
				* if your not ready to forgive, write about it anyway. Who knows, words
				can work wonders
			</p>
		</div>
	);
};

export default Part7;