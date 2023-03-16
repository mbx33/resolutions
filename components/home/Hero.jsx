import React from 'react';

// styles
import { HeroContainer, ContentContainer } from '../../styles/styled_components/hero';
import StartButton from '../buttons/StartButton';

const Hero = ({ openSignup }) => {
	return (
		<HeroContainer>
			<ContentContainer>
				<h1>
					<span className="headline">Resolutions</span> Begin Here
				</h1>
				<h2>
					<span className="sub-headline">Plan</span>{' '}
					<span className="sub-headline">Track</span>{' '}
					<span className="sub-headline">Achieve</span>
				</h2>
				<p>Maintain your goals with our easy to use platform.</p>
				<div className="cta-btn">
					<StartButton
						openSignup={openSignup}
						isPrimary={true}
						isSecondary={false}
					/>
				</div>
			</ContentContainer>
		</HeroContainer>
	);
};

export default Hero;
