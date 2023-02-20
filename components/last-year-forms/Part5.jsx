// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part5 = ({ handleChange, userResponses, prevStep, nextForm }) => {
	return (
		<div>
			<h1>Best Moments</h1>
			<p>
				Describe your best, unforgettable and pleasant moments of the past year.
				Describe them. What did you feel then? Who was with you? What
				were you doing? What smells, sounds or tastes do you remember?
			</p>
			<Form>
				<div className="form-container">
					<textarea
						onChange={handleChange}
						value={userResponses.best_moments}
						rows="10"
						cols="60"
						type="text"
						name="best_moments"
						id="best_moments"
					/>
					<div className="button-group">
						<Button back primary onClick={prevStep}>
							Back
						</Button>

						<Button next primary onClick={nextForm}>
							Continue
						</Button>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default Part5;
