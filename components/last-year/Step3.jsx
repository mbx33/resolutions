import { useResponse } from '../../contexts/ResponseContext';

import Part5 from '../last-year-forms/Part5';
import Part6 from '../last-year-forms/Part6';

const Step3 = ({ nextForm, prevForm, nextStep, prevStep, currentPart }) => {
	const { userResponses, handleChange } = useResponse();

	return (
		<div>
			{currentPart === 5 && (
				<Part5
					userResponses={userResponses}
					handleChange={handleChange}
					prevStep={prevStep}
					nextForm={nextForm}
				/>
			)}
			{currentPart === 6 && (
				<Part6
					nextStep={nextStep}
					prevForm={prevForm}
					userResponses={userResponses}
					handleChange={handleChange}
				/>
			)}
		</div>
	);
};

export default Step3;
