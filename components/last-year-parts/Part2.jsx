import React from 'react';
import styled from 'styled-components';

const Part2 = ({ handleChange, userResponses, prevStep }) => {
	return (
		<Container>
			<h1>This is what last year was about</h1>
			<p>
				Write your most important things that transpired from last year. What
				moments stood out the most and meant something to you?
			</p>
			<FormContainer>
				<form>
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
				</form>
			</FormContainer>

			<button onClick={prevStep}>Back</button>
		</Container>
	);
};

export default Part2;

const Container = styled.section`
	text-align: center;
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0 2rem;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		padding: 0 2rem;

		label {
			font-size: 1.5rem;
			margin: 1rem 0;
		}

		input {
			width: 100%;
			height: 2rem;
			font-size: 1.5rem;
			padding: 0.5rem;
			margin: 0.5rem 0;
		}
	}
`;
