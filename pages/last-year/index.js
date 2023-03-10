import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { Lavishly_Yours } from '@next/font/google';

const lavish = Lavishly_Yours({
	subsets: ['latin'],
	weight: '400',
});

// Components
import Layout from '../../components/Layout';
import Step1 from '../../components/last-year/Step1';
import Step2 from '../../components/last-year/Step2';
import Step3 from '../../components/last-year/Step3';
import Step4 from '../../components/last-year/Step4';

// Styles
import { FormContainer } from '../../styles/styled_components/form';
import { ErrorContainer } from '../../styles/styled_components/utils';

import {
	Main,
	ImageContainer,
	BorderContainer,
	WaterMark,
} from '../../styles/styled_components/main-forms';

// Will have a total of 9 steps eventually,

const LastYearForms = () => {
	const [step, setStep] = useState(1);
	const [currentPart, setCurrentPart] = useState(1);
	const user = useUser();
	const session = useSession();

	const changeNextStep = (e) => {
		e.preventDefault();
		if (step === 4) {
			return;
		}
		setStep((prevStep) => prevStep + 1);
		setCurrentPart((prevPart) => prevPart + 1);
	};

	const changePrevStep = (e) => {
		e.preventDefault();
		if (step === 1) {
			return;
		}
		setStep((prevStep) => prevStep - 1);
		setCurrentPart((prevPart) => prevPart - 1);
	};

	const nextForm = (e) => {
		e.preventDefault();
		if (currentPart === 4) {
			return;
		}
		setCurrentPart((prevPart) => prevPart + 1);
	};

	const prevForm = (e) => {
		e.preventDefault();
		if (currentPart === 1) {
			return;
		}
		setCurrentPart((prevPart) => prevPart - 1);
	};

	if (!user || !session) {
		return (
			<ErrorContainer>
				<h1>Not logged in</h1>
				<Link href="/">Homepage</Link>
			</ErrorContainer>
		);
	}

	return (
		<>
			<Layout title="Last Year">
				<Main>
					<ImageContainer />
					<BorderContainer>
						<Image
							src="/wavesNegative.svg"
							alt="My SVG"
							width={1500}
							height={70}
						/>
					</BorderContainer>
					<WaterMark className={`${lavish.className}`}>
						<p>Aries</p>
					</WaterMark>
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
				</Main>
			</Layout>
		</>
	);
};

export default LastYearForms;
