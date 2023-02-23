import React from 'react';
import Router from 'next/router';

import { Button } from '../../styles/styled_components/utils';

const StartButton = ({ isSecondary, isPrimary }) => {
	const router = Router;

	return (
		<Button
			primary={isPrimary}
			cta={true}
			secondary={isSecondary}
			onClick={() => {
				router.push('/signup');
			}}
		>
			Start Now
		</Button>
	);
};

export default StartButton;
