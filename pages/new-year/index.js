import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react';

// Components
import Layout from '../../components/Layout';
import NyStep1 from '../../components/new-year/NyStep1';
import NyStep2 from '../../components/new-year/NyStep2';
import NyStep3 from '../../components/new-year/NyStep3';

// Styles
import { FormContainer } from '../../styles/styled_components/form';
import { ErrorContainer } from '../../styles/styled_components/utils';
import {
	Main,
	ImageContainer,
	BorderContainer,
} from '../../styles/styled_components/main-forms';

// Will have a total of 9 steps eventually,

const NewYearForms = () => {
	const user = useUser();
	const session = useSession();

	const [step, setStep] = useState(1);
	const [currentPart, setCurrentPart] = useState(1);

	const changeNextStep = (e) => {
		e.preventDefault();
		if (step === 3) {
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
		if (currentPart === 7) {
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
			<Layout darkNav={false} title="New Year">
				<Main>
					<FormContainer>
						{step === 1 && (
							<NyStep1
								currentPart={currentPart}
								nextStep={changeNextStep}
								nextForm={nextForm}
								prevForm={prevForm}
							/>
						)}
						{step === 2 && (
							<NyStep2
								currentPart={currentPart}
								nextStep={changeNextStep}
								prevStep={changePrevStep}
								nextForm={nextForm}
								prevForm={prevForm}
							/>
						)}
						{step === 3 && (
							<NyStep3
								currentPart={currentPart}
								prevStep={changePrevStep}
								prevForm={prevForm}
								nextForm={nextForm}
							/>
						)}
					</FormContainer>
				</Main>
			</Layout>
		</>
	);
};

export default NewYearForms;
