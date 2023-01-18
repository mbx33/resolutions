import { useState } from 'react';

// Components
import Step1 from '../../components/last-year/Step1';
import Step2 from '../../components/last-year/Step2';
import Step3 from '../../components/last-year/Step3';
import Step4 from '../../components/last-year/Step4';

// Styles
import { FormContainer } from '../../styles/styled_components/form';

// Will have a total of 9 steps eventually,

const LastYearForms = () => {
	const [step, setStep] = useState(1);
	const [currentPart, setCurrentPart] = useState(1);

	const changeNextStep = (e) => {
		e.preventDefault();
		console.log(step, currentPart, 'clicking next step');
		if (step === 4) {
			return;
		}
		setStep((prevStep) => prevStep + 1);
		setCurrentPart((prevPart) => prevPart + 1);
	};

	const changePrevStep = (e) => {
		e.preventDefault();
		console.log(step, currentPart, 'clicking prev step');
		if (step === 1) {
			return;
		}
		setStep((prevStep) => prevStep - 1);
		setCurrentPart((prevPart) => prevPart - 1);
	};

	const nextForm = (e) => {
		e.preventDefault();
		console.log(step, currentPart, 'clicking next form');
		if (currentPart === 4) {
			return;
		}
		setCurrentPart((prevPart) => prevPart + 1);
	};

	const prevForm = (e) => {
		e.preventDefault();
		console.log(step, currentPart, 'clicking prev form');
		if (currentPart === 1) {
			return;
		}
		setCurrentPart((prevPart) => prevPart - 1);
	};

	return (
		<FormContainer>
			{step === 1 && (
				<Step1
					nextForm={nextForm}
					prevForm={prevForm}
					nextStep={changeNextStep}
					currentPart={currentPart}
				/>
			)}
			{step === 2 && (
				<Step2
					nextStep={changeNextStep}
					prevStep={changePrevStep}
					nextForm={nextForm}
					prevForm={prevForm}
					currentPart={currentPart}
				/>
			)}
			{step === 3 && (
				<Step3
					nextStep={changeNextStep}
					prevStep={changePrevStep}
					nextForm={nextForm}
					prevForm={prevForm}
					currentPart={currentPart}
				/>
			)}
			{step === 4 && (
				<Step4
					nextStep={changeNextStep}
					prevStep={changePrevStep}
					nextForm={nextForm}
					prevForm={prevForm}
					currentPart={currentPart}
				/>
			)}
		</FormContainer>
	);
};

export default LastYearForms;