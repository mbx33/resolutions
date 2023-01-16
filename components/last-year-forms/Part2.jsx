import React from 'react';

// Styles
import { Form } from '../../styles/styled_components/form';

const Part2 = ({ handleChange, userResponses, nextStep, prevForm }) => {
	return (
		<main>
			<h1>This is what last year was about</h1>
			<p>
				Write your most important things that transpired from last year. What
				moments stood out the most and meant something to you?
			</p>
			<Form>
				<label htmlFor="family">Family & Personal Life</label>
				<input
					onChange={handleChange}
					value={userResponses.family}
					type="text"
					name="family"
					id="family"
				/>
				<label htmlFor="material">Materialistic (house, other things)</label>
				<input
					onChange={handleChange}
					value={userResponses.material}
					type="text"
					name="material"
					id="material"
				/>
				<label htmlFor="friends">Friends, and Community</label>
				<input
					onChange={handleChange}
					value={userResponses.friends}
					type="text"
					name="friends"
					id="friends"
				/>
				<label htmlFor="intellectual">Intellectual</label>
				<input
					onChange={handleChange}
					value={userResponses.intellectual}
					type="text"
					name="intellectual"
					id="intellectual"
				/>
				<label htmlFor="financial">Finances</label>
				<input
					onChange={handleChange}
					value={userResponses.financial}
					type="text"
					name="financial"
					id="financial"
				/>
				<label htmlFor="work_study">Work, Study, Profession</label>
				<input
					onChange={handleChange}
					value={userResponses.work_study}
					type="text"
					name="work_study"
					id="work_study"
				/>
				<label htmlFor="vacation_hobby">Holiday, Hobbies, Creativity</label>
				<input
					onChange={handleChange}
					value={userResponses.vacation_hobby}
					type="text"
					name="vacation_hobby"
					id="vacation_hobby"
				/>
				<label htmlFor="health_sport">Health, Sport</label>
				<input
					onChange={handleChange}
					value={userResponses.health_sport}
					type="text"
					name="health_sport"
					id="health_sport"
				/>
				<label htmlFor="emotional">Emotional, Spiritual</label>
				<input
					onChange={handleChange}
					value={userResponses.emotional}
					type="text"
					name="emotional"
					id="emotional"
				/>
				<label htmlFor="achievements">Significant Achievements</label>
				<input
					onChange={handleChange}
					value={userResponses.achievements}
					type="text"
					name="achievements"
					id="achievements"
				/>
				<div className="button-group">
					<button onClick={prevForm}>Back</button>
					<button onClick={nextStep}>Continue</button>
				</div>
			</Form>
		</main>
	);
};

export default Part2;
