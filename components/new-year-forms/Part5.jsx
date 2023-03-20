import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part5 = ({ handleChange, newYearResponses, prevStep, nextForm }) => {
	return (
		<main>
			<Form>
				<h1 className="form-title">Six wishes for the New Year</h1>
				<div className="form-container">
					<div className="form-group">
						<label htmlFor="procrastinate">
							This year I will not procrastinate on...
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.procrastinate}
							type="text"
							name="procrastinate"
							id="procrastinate"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="energy">
							This year I will draw energy from...
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.energy}
							type="text"
							name="energy"
							id="energy"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="bravest">
							This year I will be bravest when...
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.bravest}
							type="text"
							name="bravest"
							id="bravest"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="say_yes">This year I will say yes when...</label>
						<input
							onChange={handleChange}
							value={newYearResponses.say_yes}
							type="text"
							name="say_yes"
							id="say_yes"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="advise">
							This year I will advise myself to..
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.advise}
							type="text"
							name="advise"
							id="advise"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="special">
							This year will be special for me because...
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.special}
							type="text"
							name="special"
							id="special"
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

export default Part5;
