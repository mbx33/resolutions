import { useResponse } from '../../contexts/ResponseContext';

// Components
import Part1 from '../last-year-forms/Part1';
import Part2 from '../last-year-forms/Part2';

// Styles

const Step1 = ({ nextForm, prevForm, nextStep, currentPart }) => {
	const { userResponses, handleChange } = useResponse();

	return (
		<div>
			{currentPart === 1 && (
				<Part1
					userResponses={userResponses}
					handleChange={handleChange}
					nextForm={nextForm}
				/>
			)}
			{currentPart === 2 && (
				<Part2
					prevForm={prevForm}
					userResponses={userResponses}
					handleChange={handleChange}
					nextStep={nextStep}
				/>
			)}
		</div>
	);
};

export default Step1;
