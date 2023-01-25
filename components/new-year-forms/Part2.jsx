import React from 'react';

// Styles
import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part2 = ({ handleChange, newYearResponses, nextStep, prevForm }) => {
	return (
		<main>
			<h1>This is what my next year will be</h1>
			<p>
				What will be the most important for you in the listed areas in the new
				Year? What events will be the most significant? Describe them briefly
			</p>
			<Form>
				<label htmlFor="family">Family & Personal Life</label>
				<input
					onChange={handleChange}
					value={newYearResponses.family}
					type="text"
					name="family"
					id="family"
				/>
				<label htmlFor="material">Materialistic (house, other things)</label>
				<input
					onChange={handleChange}
					value={newYearResponses.material}
					type="text"
					name="material"
					id="material"
				/>
				<label htmlFor="friends">Friends, and Community</label>
				<input
					onChange={handleChange}
					value={newYearResponses.friends}
					type="text"
					name="friends"
					id="friends"
				/>
				<label htmlFor="intellectual">Intellectual</label>
				<input
					onChange={handleChange}
					value={newYearResponses.intellectual}
					type="text"
					name="intellectual"
					id="intellectual"
				/>
				<label htmlFor="financial">Finances</label>
				<input
					onChange={handleChange}
					value={newYearResponses.financial}
					type="text"
					name="financial"
					id="financial"
				/>
				<label htmlFor="work_study">Work, Study, Profession</label>
				<input
					onChange={handleChange}
					value={newYearResponses.workStudy}
					type="text"
					name="workStudy"
					id="work_study"
				/>
				<label htmlFor="vacation_hobby">Holiday, Hobbies, Creativity</label>
				<input
					onChange={handleChange}
					value={newYearResponses.vacationHobby}
					type="text"
					name="vacationHobby"
					id="vacation_hobby"
				/>
				<label htmlFor="health_sport">Health, Sport</label>
				<input
					onChange={handleChange}
					value={newYearResponses.healthSport}
					type="text"
					name="healthSport"
					id="health_sport"
				/>
				<label htmlFor="emotional">Emotional, Spiritual</label>
				<input
					onChange={handleChange}
					value={newYearResponses.emotional}
					type="text"
					name="emotional"
					id="emotional"
				/>
				<label htmlFor="achievements">Significant Achievements</label>
				<input
					onChange={handleChange}
					value={newYearResponses.achievements}
					type="text"
					name="achievements"
					id="achievements"
				/>
				<div className="button-group">
					<Button primary onClick={prevForm}>
						Back
					</Button>
					<Button primary onClick={nextStep}>
						Continue
					</Button>
				</div>
			</Form>
		</main>
	);
};

export default Part2;
