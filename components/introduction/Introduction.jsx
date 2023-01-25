import { useState } from 'react';

// components

// Styles
import { Button } from '../../styles/styled_components/utils';

import Preparing from './Preparing';

const Introduction = ({ user }) => {
	const [showNext, setShowNext] = useState(false);

	const handleClick = () => {
		setShowNext(true);
	};

	if (showNext) {
		return <Preparing user={user} onClick={handleClick} />;
	}

	return (
		<div>
			<h1>Year Planner</h1>
			<p className="title">What is this?</p>
			<p>
				This planner will help you take in what happened this last year and help
				you prepare for the upcoming year.
			</p>
			<p className="title">Why is this good for me?</p>
			<p>
				Creating a plan for the new Year is a good habit. It will help you better
				understand all the successes and failures, and understand how much can
				happen in just a year. By learning from the mistakes of the past, you will
				be able to plan your future so that you don’t repeat them and can manage
				your life better.
			</p>
			<p className="title">What do I need?</p>
			<ul>
				<li>about 3 hours to summarize the past year</li>
				<li>about 1 hour to plan the New Year</li>
				<li>calendar for the previous year</li>
				<li>Be sincere and open</li>
			</ul>
			<Button primary={false} onClick={handleClick}>
				Continue
			</Button>
		</div>
	);
};

export default Introduction;
