// components
import StartButton from '../buttons/StartButton';

//styles
import { WhyContainer } from '../../styles/styled_components/home';

const Why = ({ openSignup }) => {
	return (
		<WhyContainer>
			<h1>Why is this good for me?</h1>
			<ul>
				<li>
					Creating a plan for the new year helps you track your successes and
					failures.
				</li>
				<li>It enables you to understand how much you can achieve in a year</li>
				<li>
					By learning from your past mistakes, you can plan for a better future
				</li>
				<li>
					A well-thought-out plan can help you avoid repeating past mistakes
				</li>
				<li>
					Planning your year ahead helps you manage your life more effectively
				</li>
			</ul>
			<div className="cta-btn">
				<StartButton
					openSignup={openSignup}
					isPrimary={false}
					isSecondary={true}
				/>
			</div>
		</WhyContainer>
	);
};

export default Why;
