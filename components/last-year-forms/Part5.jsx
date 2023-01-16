// Styles
import { Form } from '../../styles/styled_components/form';

const Part5 = ({ handleChange, userResponses, prevStep, nextForm }) => {
	return (
		<div>
			<h1>Best Moments</h1>
			<p>
				Describe your best, unforgettable and pleasant moments of the past year.
				Draw them on this page. What did you feel then? Who was with you? What
				were you doing? What smells, sounds or tastes do you remember?
			</p>
			<Form>
				<textarea
					onChange={handleChange}
					value={userResponses.bestMoments}
					rows="20"
					cols="100"
					type="text"
					name="bestMoments"
					id="list"
				/>
				<div className="button-group">
					<button onClick={prevStep}>Back</button>

					<button onClick={nextForm}>Continue</button>
				</div>
			</Form>
		</div>
	);
};

export default Part5;
