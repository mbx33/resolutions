import React from 'react';

const Part1 = ({ handleChange, nextStep, userResponses }) => {
	return (
		<div>
			<h1>List of your last year</h1>
			<p>
				Look at your past calander, week to week. If you see an important event,
				meeting with freinds, or family, or important job, write it here.
			</p>
			<form>
				<label htmlFor="list">Enter your answers here</label>
				<textarea
					onChange={handleChange}
					value={userResponses.list}
					rows="20"
					cols="100"
					type="text"
					name="list"
					id="list"
				/>
			</form>
			<button onClick={nextStep}>Continue</button>
		</div>
	);
};

export default Part1;
