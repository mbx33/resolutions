// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part2 = ({ handleChange, newYearResponses, nextStep, prevForm }) => {
	return (
		<main>
			<Form>
				<h1 className="form-title">This is what next year will be</h1>
				<p>
					What will be the most important for you in the listed areas in the new
					Year? What events will be the most significant? Describe them briefly
				</p>
				<div className="grid">
					<div className="form-group">
						<label htmlFor="family">Family & Personal Life</label>
						<input
							onChange={handleChange}
							value={newYearResponses.family}
							type="text"
							name="family"
							id="family"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="material">
							Materialistic (house, other things)
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.material}
							type="text"
							name="material"
							id="material"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="friends">Friends, and Community</label>
						<input
							onChange={handleChange}
							value={newYearResponses.friends}
							type="text"
							name="friends"
							id="friends"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="intellectual">Intellectual</label>
						<input
							onChange={handleChange}
							value={newYearResponses.intellectual}
							type="text"
							name="intellectual"
							id="intellectual"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="financial">Finances</label>
						<input
							onChange={handleChange}
							value={newYearResponses.financial}
							type="text"
							name="financial"
							id="financial"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="work_study">Work, Study, Profession</label>
						<input
							onChange={handleChange}
							value={newYearResponses.work_study}
							type="text"
							name="work_study"
							id="work_study"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="vacation_hobby">
							Holiday, Hobbies, Creativity
						</label>
						<input
							onChange={handleChange}
							value={newYearResponses.vacation_hobby}
							type="text"
							name="vacation_hobby"
							id="vacation_hobby"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="health_sport">Health, Sport</label>
						<input
							onChange={handleChange}
							value={newYearResponses.health_sport}
							type="text"
							name="health_sport"
							id="health_sport"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="emotional">Emotional, Spiritual</label>
						<input
							onChange={handleChange}
							value={newYearResponses.emotional}
							type="text"
							name="emotional"
							id="emotional"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="achievements">Significant Achievements</label>
						<input
							onChange={handleChange}
							value={newYearResponses.achievements}
							type="text"
							name="achievements"
							id="achievements"
						/>
					</div>
				</div>
				<div className="button-group grid-buttons">
					<Button back primary onClick={prevForm}>
						Back
					</Button>
					<Button next primary onClick={nextStep}>
						Continue
					</Button>
				</div>
			</Form>
		</main>
	);
};

export default Part2;
