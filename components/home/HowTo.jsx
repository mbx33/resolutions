import React from 'react';
import Image from 'next/image';

import { FaUserAlt, FaCoffee, FaKeyboard } from 'react-icons/fa';

// styles
import { HowToContainer } from '../../styles/styled_components/home';

const HowTo = () => {
	return (
		<HowToContainer>
			<div className="how-to-steps">
				<div className="step">
					<FaUserAlt />
					<h2>1</h2>
					<p>Create a Free Account It only takes a minute</p>
				</div>
				<div className="step">
					<FaCoffee />
					<h2>2</h2>
					<p>Prepare yourself to plan and think out your Last & New Year</p>
				</div>
				<div className="step">
					<FaKeyboard />
					<h2>3</h2>
					<p>
						Follow the prompts and input your answers to each of the questions
					</p>
				</div>
			</div>
			<Image src="/wavesNegative.svg" alt="My SVG" width={1500} height={100} />
		</HowToContainer>
	);
};

export default HowTo;
