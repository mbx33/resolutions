import { useResponse } from '../../contexts/ResponseContext';

// Components
import Part5 from '../new-year-forms/Part5';
import Part6 from '../new-year-forms/Part6';
import Part7 from '../new-year-forms/Part7';

const NyStep3 = ({ currentPart, prevStep, prevForm, nextForm }) => {
	const { newYearResponses, handleNyChange, uploadNewYear, message } = useResponse();

	return (
		<div>
			{currentPart === 5 && (
				<Part5
					newYearResponses={newYearResponses}
					handleChange={handleNyChange}
					prevStep={prevStep}
					nextForm={nextForm}
				/>
			)}
			{currentPart === 6 && (
				<Part6
					prevForm={prevForm}
					nextForm={nextForm}
					newYearResponses={newYearResponses}
					handleChange={handleNyChange}
				/>
			)}
			{currentPart === 7 && (
				<Part7
					prevForm={prevForm}
					newYearResponses={newYearResponses}
					handleChange={handleNyChange}
					uploadNewYear={uploadNewYear}
					message={message}
				/>
			)}
		</div>
	);
};

export default NyStep3;
