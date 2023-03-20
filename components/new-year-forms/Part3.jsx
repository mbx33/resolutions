import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part3 = ({ handleChange, newYearResponses, nextForm, prevStep }) => {
	return (
		<main>
			<Form>
				<h1 className="form-title">The Magic three of the coming year</h1>
				<div className="form-container">
					<div className="form-group">
						<label htmlFor="love">
							The 3 things I will love about myself
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.love}
							type="text"
							name="love"
							id="love"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="let_go">
							The 3 things I am ready to let go and move on
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.let_go}
							type="text"
							name="let_go"
							id="let_go"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="achieve">
							The 3 things I want to achieve the most
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.achieve}
							type="text"
							name="achieve"
							id="achieve"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="support">
							These 3 people will be my support in difficult times
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.support}
							type="text"
							name="support"
							id="support"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="try">These 3 things I would like try</label>
						<input
							onChange={handleChange}
							value={newYearResponses.try}
							type="text"
							name="try"
							id="try"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="say_no">
							These 3 things I am ready to say no{' '}
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.say_no}
							type="text"
							name="say_no"
							id="say_no"
						/>
					</div>
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
		</main>
	);
};

export default Part3;
