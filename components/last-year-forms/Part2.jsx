import React from 'react';

// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part2 = ({ handleChange, userResponses, nextStep, prevForm }) => {
	return (
		<main>
			<h1>This is what last year was about</h1>
			<p>
				Write your most important things that transpired from last year. What
				moments stood out the most and meant something to you?
			</p>
			<Form>
				<div className="form-container">
					<div className="form-group">
						<label htmlFor="family">Family & Personal Life</label>
						<input
							onChange={handleChange}
							value={userResponses.family}
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
							value={userResponses.material}
							type="text"
							name="material"
							id="material"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="friends">Friends, and Community</label>
						<input
							onChange={handleChange}
							value={userResponses.friends}
							type="text"
							name="friends"
							id="friends"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="intellectual">Intellectual</label>
						<input
							onChange={handleChange}
							value={userResponses.intellectual}
							type="text"
							name="intellectual"
							id="intellectual"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="financial">Finances</label>
						<input
							onChange={handleChange}
							value={userResponses.financial}
							type="text"
							name="financial"
							id="financial"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="work_study">Work, Study, Profession</label>
						<input
							onChange={handleChange}
							value={userResponses.work_study}
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
							value={userResponses.vacation_hobby}
							type="text"
							name="vacation_hobby"
							id="vacation_hobby"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="health_sport">Health, Sport</label>
						<input
							onChange={handleChange}
							value={userResponses.health_sport}
							type="text"
							name="health_sport"
							id="health_sport"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="emotional">Emotional, Spiritual</label>
						<input
							onChange={handleChange}
							value={userResponses.emotional}
							type="text"
							name="emotional"
							id="emotional"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="achievements">Significant Achievements</label>
						<input
							onChange={handleChange}
							value={userResponses.achievements}
							type="text"
							name="achievements"
							id="achievements"
						/>
					</div>
					<div className="button-group">
						<Button back primary onClick={prevForm}>
							Back
						</Button>
						<Button next primary onClick={nextStep}>
							Continue
						</Button>
					</div>
				</div>
			</Form>
		</main>
	);
};

export default Part2;
