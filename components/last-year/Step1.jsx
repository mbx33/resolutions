import { useState } from 'react';
import styled from 'styled-components';

// Components
import Part1 from '../last-year-parts/Part1';
import Part2 from '../last-year-parts/Part2';

const Step1 = () => {
	const [step, setStep] = useState(1);
	const [userResponses, setUserResponses] = useState({
		list: '',
		family: '',
		material: '',
		friends: '',
		intellectual: '',
		financial: '',
		work_study: '',
		vacation_hobby: '',
		health_sport: '',
		emotional: '',
		achievements: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserResponses({ ...userResponses, [name]: value });
		console.log(userResponses);
	};

	const changeStep = (e) => {
		e.preventDefault();
		if (step === 1) {
			setStep((prevStep) => prevStep + 1);
		} else if (step === 2) {
			setStep((prevStep) => prevStep - 1);
		}
	};

	return (
		<StepOneMain>
			<h1>First Form for the resolutions</h1>
			{step === 1 ? (
				<Part1
					userResponses={userResponses}
					handleChange={handleChange}
					nextStep={changeStep}
				/>
			) : (
				<Part2
					prevStep={changeStep}
					userResponses={userResponses}
					handleChange={handleChange}
				/>
			)}
		</StepOneMain>
	);
};

export default Step1;

const StepOneMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
`;
