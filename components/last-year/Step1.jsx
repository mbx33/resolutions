import { useState } from 'react';
import { useResponse } from '../../contexts/ResponseContext';

// Components
import Part1 from '../last-year-forms/Part1';
import Part2 from '../last-year-forms/Part2';

// Styles

const Step1 = ({ nextForm, prevForm, nextStep, currentPart }) => {
	// const [userResponses, setUserResponses] = useState({
	// 	list: '',
	// 	family: '',
	// 	material: '',
	// 	friends: '',
	// 	intellectual: '',
	// 	financial: '',
	// 	work_study: '',
	// 	vacation_hobby: '',
	// 	health_sport: '',
	// 	emotional: '',
	// 	achievements: '',
	// });

	const { userResponses, handleChange } = useResponse();

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setUserResponses({ ...userResponses, [name]: value });
	// 	console.log(userResponses);
	// };

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
