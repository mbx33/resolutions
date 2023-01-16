import { useResponse } from '../../contexts/ResponseContext';

import Part7 from '../last-year-forms/Part7';
import Part8 from '../last-year-forms/Part8';
import Part9 from '../last-year-forms/Part9';

const Step4 = ({ nextForm, prevForm, nextStep, prevStep, currentPart }) => {
	const { userResponses, handleChange } = useResponse();

	return (
		<div>
			{currentPart === 7 && (
				<Part7
					userResponses={userResponses}
					handleChange={handleChange}
					prevStep={prevStep}
					nextForm={nextForm}
				/>
			)}
			{currentPart === 8 && (
				<Part8
					prevForm={prevForm}
					nextForm={nextForm}
					userResponses={userResponses}
					handleChange={handleChange}
				/>
			)}
			{currentPart === 9 && (
				<Part9
					nextStep={nextStep}
					prevForm={prevForm}
					userResponses={userResponses}
					handleChange={handleChange}
				/>
			)}
		</div>
	);
};

export default Step4;
