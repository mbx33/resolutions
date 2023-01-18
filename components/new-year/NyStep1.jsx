import React from 'react';
import { useResponse } from '../../contexts/ResponseContext';

// Components
import Part1 from '../new-year-forms/Part1';
import Part2 from '../new-year-forms/Part2';

const NyStep1 = ({ nextForm, prevForm, nextStep, currentPart }) => {
	const { newYearResponses, handleNyChange } = useResponse();

	return (
		<div>
			{currentPart === 1 && (
				<Part1
					newYearResponses={newYearResponses}
					handleChange={handleNyChange}
					nextForm={nextForm}
				/>
			)}
			{currentPart === 2 && (
				<Part2
					prevForm={prevForm}
					newYearResponses={newYearResponses}
					handleChange={handleNyChange}
					nextStep={nextStep}
				/>
			)}
		</div>
	);
};

export default NyStep1;
