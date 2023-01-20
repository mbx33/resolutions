import React from 'react';

import { Form } from '../../styles/styled_components/form';
import { Button } from '../../styles/styled_components/utils';

const Part4 = ({ handleChange, userResponses, nextStep, prevForm }) => {
	return (
		<main>
			<h1>6 questions about last year</h1>

			<Form>
				<label htmlFor="proud">What I am most proud of?</label>
				<input
					onChange={handleChange}
					value={userResponses.proud}
					type="text"
					name="proud"
					id="proud"
				/>
				<label htmlFor="influenced_you">
					What 3 people influenced you the most?
				</label>
				<input
					onChange={handleChange}
					value={userResponses.influencedYou}
					type="text"
					name="influencedYou"
					id="influenced_you"
				/>
				<label htmlFor="you_influenced">
					What 3 people did you influence the most?
				</label>
				<input
					onChange={handleChange}
					value={userResponses.youInfluenced}
					type="text"
					name="youInfluenced"
					id="you_influenced"
				/>
				<label htmlFor="unable">What were you unable to complete?</label>
				<input
					onChange={handleChange}
					value={userResponses.unable}
					type="text"
					name="unable"
					id="unable"
				/>
				<label htmlFor="discovered">
					What is the best thing you discovered about yourself?
				</label>
				<input
					onChange={handleChange}
					value={userResponses.discovered}
					type="text"
					name="discovered"
					id="discovered"
				/>
				<label htmlFor="grateful">What are you most grateful for?</label>
				<input
					onChange={handleChange}
					value={userResponses.grateful}
					type="text"
					name="grateful"
					id="grateful"
				/>
				<div className="button-group">
					<Button onClick={prevForm}>Back</Button>
					<Button onClick={nextStep}>Continue</Button>
				</div>
			</Form>
		</main>
	);
};

export default Part4;
