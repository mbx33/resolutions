import React from 'react';

import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part6 = ({ handleChange, newYearResponses, prevForm, nextForm }) => {
	return (
		<main>
			<Form>
				<h1 className="form-title">Six wishes for the New Year</h1>
				<div className="form-container">
					<div className="form-group">
						<fieldset className="future">
							<legend>My word for the Future Year</legend>
							<p>
								Choose a word that would symbolize or define your new
								year. This word will be a source of second wind for you so
								that you do not give up, or give up on your dreams
							</p>

							<input
								onChange={handleChange}
								value={newYearResponses.ny_word}
								type="text"
								name="ny_word"
								id="ny_word"
							/>
						</fieldset>
					</div>

					<div className="form-group">
						<fieldset>
							<legend>My Secret Wish</legend>
							<p>
								Let your imagination run wild, what is your secret wish
								for the next year?
							</p>
							<textarea
								onChange={handleChange}
								value={newYearResponses.secret_wish}
								rows="10"
								cols="70"
								type="text"
								name="secret_wish"
								id="secret_wish"
							/>
						</fieldset>
					</div>

					<h5>You have finished planning your Year!</h5>

					<div className="button-group">
						<Button back primary onClick={prevForm}>
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

export default Part6;
