// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part6 = ({ handleChange, userResponses, nextStep, prevForm }) => {
	return (
		<div>
			<h1>Three Biggest Acheivements</h1>

			<Form>
				<div className="form-container">
					<div className="form-group">
						<label htmlFor="biggest_ach">
							Write your 3 biggest achievements from the past year.
						</label>
						<input
							onChange={handleChange}
							value={userResponses.biggest_ach}
							type="text"
							name="biggest_ach"
							id="biggest_ach"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="how">What have you done to achieve these?</label>
						<input
							onChange={handleChange}
							value={userResponses.how}
							type="text"
							name="how"
							id="how"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="who">Who helped you with this? How?</label>
						<input
							onChange={handleChange}
							value={userResponses.who}
							type="text"
							name="who"
							id="who"
						/>
					</div>
					<div className="form-group">
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
					</div>
					<div className="form-group">
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
					</div>
					<div className="form-group">
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
					</div>

					<div className="button-group">
						<Button primary back onClick={prevForm}>
							Back
						</Button>
						<Button primary next onClick={nextStep}>
							Continue
						</Button>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default Part6;
