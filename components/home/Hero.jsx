import React from 'react';

// styles
import { HeroContainer } from '../../styles/styled_components/hero';
import StartButton from '../buttons/StartButton';

const Hero = () => {
	return (
		<HeroContainer>
			<h1>Resolutions are great & More</h1>
			<p>
				This will be the subtitle with some relevant benefits for the app. This is
				more stuff and just writitn random things and other stuff.
			</p>
			<StartButton />
		</HeroContainer>
	);
};

export default Hero;
