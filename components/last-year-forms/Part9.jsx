import Router from 'next/router';

// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const disableBtn = {
	pointerEvents: 'disabled',
	opacity: '0.5',
};

const Part9 = ({ handleChange, userResponses, prevForm, isSaved, saveLastYear }) => {
	const router = Router;

	return (
		<div>
			<Form>
				<div className="form-container">
					<fieldset className="fieldsets">
						<legend>Last Year in 3 words:</legend>
						<input
							type="text"
							id="word_one"
							name="word_one"
							onChange={handleChange}
							value={userResponses.word_one}
							className="fieldset-input"
						/>
						<input
							type="text"
							id="word_two"
							name="word_two"
							onChange={handleChange}
							value={userResponses.word_two}
							className="fieldset-input"
						/>
						<input
							type="text"
							id="word_three"
							name="word_three"
							onChange={handleChange}
							value={userResponses.word_three}
							className="fieldset-input"
						/>
					</fieldset>
					<fieldset className="fieldsets">
						<legend>Movie title of last year</legend>
						<input
							type="text"
							id="movie_title"
							name="movie_title"
							onChange={handleChange}
							value={userResponses.movie_title}
							className="fieldset-input"
						/>
					</fieldset>
					<fieldset className="fieldsets">
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
							className="fieldset-textarea"
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
				<p>
					*** Make sure to save your answers before continuing to the new year
					***
				</p>
				{isSaved ? (
					<Button
						continue
						accent
						onClick={() => {
							router.push('/new-year');
						}}
					>
						Continue to Next Year
					</Button>
				) : (
					<Button
						style={disableBtn}
						notAllowed
						continue
						onClick={() => {
							router.push('/new-year');
						}}
						disabled
					>
						Save to Continue
					</Button>
				)}
			</div>
		</div>
	);
};

export default Part9;
