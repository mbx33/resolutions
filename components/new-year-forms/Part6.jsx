import React from 'react';

import { Form } from '../../styles/styled_components/form';

// 				signature: newYearResponses.signature,
// 				date: newYearResponses.date,

const Part6 = ({ handleChange, newYearResponses, prevForm, nextForm }) => {
	return (
		<main>
			<h1>Six wishes for the New Year</h1>

			<Form>
				<fieldset>
					<legend>My word for the Future Year</legend>
					<p>
						Choose a word that would symbolize or define your new year. This
						word will be a source of second wind for you so that you do not
						give up, or give up on your dreams
					</p>

					<input
						onChange={handleChange}
						value={newYearResponses.nyWord}
						type="text"
						name="nyWord"
						id="nyWord"
					/>
				</fieldset>

				<fieldset>
					<legend>My Secret Wish</legend>
					<p>
						Let your imagination run wild, what is your secret wish for the
						next year?
					</p>
					<textarea
						onChange={handleChange}
						value={newYearResponses.secretWish}
						cols="30"
						rows="10"
						type="text"
						name="secretWish"
						id="secretWish"
					/>
				</fieldset>

				<h5>You have finished planning your Year!</h5>

				<div className="button-group">
					<button onClick={prevForm}>Back</button>
					<button onClick={nextForm}>Continue</button>
				</div>
			</Form>
		</main>
	);
};

export default Part6;
