import React from 'react';
import Router from 'next/router';

import { Button } from '../../styles/styled_components/utils';

const StartButton = ({ isSecondary, isPrimary, openModal }) => {
	const router = Router;

	return (
		<Button
			primary={isPrimary}
			cta={true}
			secondary={isSecondary}
			onClick={openModal}
		>
			Start Now
		</Button>
	);
};

export default StartButton;
