import React from 'react';

import { Form } from '../../styles/styled_components/form';

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
					value={userResponses.influenced_you}
					type="text"
					name="influenced_you"
					id="influenced_you"
				/>
				<label htmlFor="you_influenced">
					What 3 people did you influence the most?
				</label>
				<input
					onChange={handleChange}
					value={userResponses.you_influenced}
					type="text"
					name="you_influenced"
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
					<button onClick={prevForm}>Back</button>
					<button onClick={nextStep}>Continue</button>
				</div>
			</Form>
		</main>
	);
};

export default Part4;
