// Styles
import { Form } from '../../styles/styled_components/form';

const Part6 = ({ handleChange, userResponses, nextStep, prevForm }) => {
	return (
		<div>
			<h1>Three Biggest Acheivements</h1>

			<Form>
				<label htmlFor="biggest_ach">
					Write your 3 biggest achievements from the past year.
				</label>
				<input
					onChange={handleChange}
					value={userResponses.biggestAch}
					type="text"
					name="biggestAch"
					id="biggest_ach"
				/>
				<label htmlFor="how">What have you done to achieve these?</label>
				<input
					onChange={handleChange}
					value={userResponses.how}
					type="text"
					name="how"
					id="how"
				/>
				<label htmlFor="who">Who helped you with this? How?</label>
				<input
					onChange={handleChange}
					value={userResponses.who}
					type="text"
					name="who"
					id="who"
				/>
				<label htmlFor="challenges">
					Write your 3 biggest challenges of the past year.
				</label>
				<input
					onChange={handleChange}
					value={userResponses.challenges}
					type="text"
					name="challenges"
					id="challenges"
				/>
				<label htmlFor="overcame">
					Who or what helped you overcome these challenges?
				</label>
				<input
					onChange={handleChange}
					value={userResponses.overcame}
					type="text"
					name="overcame"
					id="overcame"
				/>
				<label htmlFor="learned">
					What did you learn about yourself going through these trials?
				</label>
				<input
					onChange={handleChange}
					value={userResponses.learned}
					type="text"
					name="learned"
					id="learned"
				/>
				<div className="button-group">
					<button onClick={prevForm}>Back</button>
					<button onClick={nextStep}>Continue</button>
				</div>
			</Form>
		</div>
	);
};

export default Part6;
