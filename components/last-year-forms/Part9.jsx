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
				<fieldset>
					<legend>Last Year in 3 words:</legend>
					<input
						type="text"
						id="wordOne"
						name="wordOne"
						onChange={handleChange}
						value={userResponses.wordOne}
					/>
					<input
						type="text"
						id="wordTwo"
						name="wordTwo"
						onChange={handleChange}
						value={userResponses.wordTwo}
					/>
					<input
						type="text"
						id="wordThree"
						name="wordThree"
						onChange={handleChange}
						value={userResponses.wordThree}
					/>
				</fieldset>
				<fieldset>
					<legend>Movie title about my year</legend>
					<p>What is the title of your movie?</p>
					<input
						type="text"
						id="movieTitle"
						name="movieTitle"
						onChange={handleChange}
						value={userResponses.movieTitle}
					/>
				</fieldset>
				<fieldset>
					<legend>Goodbye Last Year!</legend>
					<p>
						If you would like to write anything, or forgive someone, write it
						down here, now.
					</p>
					<textarea
						type="text"
						id="goodbye"
						name="goodbye"
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
			</Form>
			<div className="summary">
				<h2>You summed up the last Year.</h2>
				<p>You just finished the first part.</p>
				<p>Take a deep breath Take a break</p>
				<Button
					next
					primary
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
