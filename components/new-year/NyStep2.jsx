import React from 'react';
import { useResponse } from '../../contexts/ResponseContext';

// Components
import Part3 from '../new-year-forms/Part3';
import Part4 from '../new-year-forms/Part4';

const NyStep2 = ({ currentPart, nextStep, prevStep, nextForm, prevForm }) => {
	const { newYearResponses, handleNyChange } = useResponse();

	return (
		<div>
			{currentPart === 3 && (
				<Part3
					handleChange={handleNyChange}
					newYearResponses={newYearResponses}
					prevStep={prevStep}
					nextForm={nextForm}
				/>
			)}
			{currentPart === 4 && (
				<Part4
					handleChange={handleNyChange}
					newYearResponses={newYearResponses}
					prevForm={prevForm}
					nextStep={nextStep}
				/>
			)}
		</div>
	);
};

export default NyStep2;
