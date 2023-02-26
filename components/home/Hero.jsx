import React from 'react';

// styles
import { HeroContainer, ContentContainer } from '../../styles/styled_components/hero';
import StartButton from '../buttons/StartButton';

const Hero = ({ openModal }) => {
	return (
		<HeroContainer>
			<ContentContainer>
				<h1>
					<span className="headline">Resolutions</span> are a Great Title to get
				</h1>
				<p>
					This will be the subtitle with some relevant benefits for the app.
					This is more stuff and just writitn random things and other stuff.
				</p>
				<div className="cta-btn">
					<StartButton
						openModal={openModal}
						isPrimary={true}
						isSecondary={false}
					/>
				</div>
			</ContentContainer>
		</HeroContainer>
	);
};

export default Hero;
