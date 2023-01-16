import { useResponse } from '../../contexts/ResponseContext';

// Components
import Part3 from '../last-year-forms/Part3';
import Part4 from '../last-year-forms/Part4';

const Step2 = ({ nextForm, prevForm, nextStep, prevStep, currentPart }) => {
	const { userResponses, handleChange } = useResponse();

	return (
		<div>
			{currentPart === 3 && (
				<Part3
					userResponses={userResponses}
					handleChange={handleChange}
					prevStep={prevStep}
					nextForm={nextForm}
				/>
			)}
			{currentPart === 4 && (
				<Part4
					nextStep={nextStep}
					prevForm={prevForm}
					userResponses={userResponses}
					handleChange={handleChange}
				/>
			)}
		</div>
	);
};

export default Step2;
