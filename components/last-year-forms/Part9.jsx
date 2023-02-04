import React from 'react';
import Router from 'next/router';
import { BsArrowUpSquare, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part9 = ({ handleChange, userResponses, nextStep, prevForm, saveLastYear }) => {
	const router = Router;

	return (
		<div>
			<Form>
				<div className="form-container">
					<fieldset>
						<legend>Last Year in 3 words:</legend>
						<input
							type="text"
							id="word_one"
							name="word_one"
							onChange={handleChange}
							value={userResponses.word_one}
						/>
						<input
							type="text"
							id="word_two"
							name="word_two"
							onChange={handleChange}
							value={userResponses.word_two}
						/>
						<input
							type="text"
							id="word_three"
							name="word_three"
							onChange={handleChange}
							value={userResponses.word_three}
						/>
					</fieldset>
					<fieldset>
						<legend>Movie title of last year</legend>
						<input
							type="text"
							id="movie_title"
							name="movie_title"
							onChange={handleChange}
							value={userResponses.movie_title}
						/>
					</fieldset>
					<fieldset>
						<legend>Goodbye Last Year!</legend>
						<p>
							If you would like to write anything, or forgive someone, write
							it down here, now.
						</p>
						<textarea
							type="text"
							id="goodbye"
							name="goodbye"
							rows="10"
							cols="60"
							onChange={handleChange}
							value={userResponses.goodbye}
						/>
					</fieldset>
					<div className="button-group">
						<Button back primary onClick={prevForm}>
							back
						</Button>

						<Button submit primary onClick={saveLastYear}>
							save
						</Button>
					</div>
				</div>
			</Form>
			<div className="summary">
				<h2>You summed up the last Year.</h2>
				<p>You just finished the first part.</p>
				<p>Take a deep breath Take a break</p>
				<Button
					next
					onClick={() => {
						router.push('/new-year');
					}}
				>
					Continue to Next Year
				</Button>
			</div>
		</div>
	);
};

export default Part9;
