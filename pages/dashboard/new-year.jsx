import Link from 'next/link';

import { useResponse } from '../../contexts/ResponseContext';

// Components
import Layout from '../../components/Layout';
import Responses from '../../components/dashboard/Responses';

// Labels
import { nyTitles, nyLabels } from '../../components/dashboard/newYearLabels';

// Styles
import { ErrorContainer } from '../../styles/styled_components/utils';
import { MainAnswerContainer } from '../../styles/styled_components/main-answers';

const branches = ['ny_branch_one', 'ny_branch_two', 'ny_branch_three'];

const NewYearPage = () => {
	const { user, userResponses, newYearResponses } = useResponse();

	if (!user)
		return (
			<ErrorContainer>
				<h3>Not logged in</h3>
				<Link href="/">Homepage </Link>
			</ErrorContainer>
		);

	const responses = [userResponses, newYearResponses];
	const [oldYear, newYear] = responses;

	const newYearKeys = Object.keys(newYear);
	console.log(newYearKeys);

	return (
		<Layout darkNav={true} title="New Year Answers">
			<MainAnswerContainer>
				<h1>The New Year Stuff</h1>
				<h3>{nyTitles.part1}</h3>
				<Responses
					column={newYearKeys[0]}
					table={branches[0]}
					description={newYear.dreams}
				/>
				<h3>{nyTitles.part2}</h3>
				<Responses
					column={newYearKeys[1]}
					table={branches[0]}
					description={newYear.family}
					label={nyLabels.family}
				/>
				<Responses
					column={newYearKeys[2]}
					table={branches[0]}
					description={newYear.material}
					label={nyLabels.material}
				/>
				<Responses
					column={newYearKeys[3]}
					table={branches[0]}
					description={newYear.friends}
					label={nyLabels.friends}
				/>
				<Responses
					column={newYearKeys[4]}
					table={branches[0]}
					description={newYear.intellectual}
					label={nyLabels.intellectual}
				/>
				<Responses
					column={newYearKeys[5]}
					table={branches[0]}
					description={newYear.financial}
					label={nyLabels.financial}
				/>
				<Responses
					column={newYearKeys[6]}
					table={branches[0]}
					description={newYear.work_study}
					label={nyLabels.work}
				/>
				<Responses
					column={newYearKeys[7]}
					table={branches[0]}
					description={newYear.vacation_hobby}
					label={nyLabels.hobby}
				/>
				<Responses
					column={newYearKeys[8]}
					table={branches[0]}
					description={newYear.health_sport}
					label={nyLabels.health}
				/>
				<Responses
					column={newYearKeys[9]}
					table={branches[0]}
					description={newYear.emotional}
					label={nyLabels.emotional}
				/>
				<Responses
					column={newYearKeys[10]}
					table={branches[0]}
					description={newYear.achievements}
					label={nyLabels.ach}
				/>
				<h3>{nyTitles.part3}</h3>
				{/* Continue here adding from section 3 with love label  */}
				<Responses
					column={newYearKeys[11]}
					table={branches[1]}
					description={newYear.love}
					label={nyLabels.love}
				/>
				<Responses
					column={newYearKeys[12]}
					table={branches[1]}
					description={newYear.let_go}
					label={nyLabels.letGo}
				/>
				<Responses
					column={newYearKeys[13]}
					table={branches[1]}
					description={newYear.achieve}
					label={nyLabels.achieve}
				/>
				<Responses
					column={newYearKeys[14]}
					table={branches[1]}
					description={newYear.support}
					label={nyLabels.support}
				/>
				<Responses
					column={newYearKeys[15]}
					table={branches[1]}
					description={newYear.try}
					label={nyLabels.try}
				/>
				<Responses
					column={newYearKeys[16]}
					table={branches[1]}
					description={newYear.say_no}
					label={nyLabels.sayNo}
				/>
				<Responses
					column={newYearKeys[17]}
					table={branches[1]}
					description={newYear.comfort}
					label={nyLabels.comfort}
				/>
				<Responses
					column={newYearKeys[18]}
					table={branches[1]}
					description={newYear.morning}
					label={nyLabels.morning}
				/>
				<Responses
					column={newYearKeys[19]}
					table={branches[1]}
					description={newYear.indulge}
					label={nyLabels.indulge}
				/>
				<Responses
					column={newYearKeys[20]}
					table={branches[1]}
					description={newYear.visit}
					label={nyLabels.visit}
				/>
				<Responses
					column={newYearKeys[21]}
					table={branches[1]}
					description={newYear.relationships}
					label={nyLabels.relationships}
				/>
				<Responses
					column={newYearKeys[22]}
					table={branches[1]}
					description={newYear.gifts}
					label={nyLabels.gifts}
				/>
				<h3>{nyTitles.part4}</h3>
				<Responses
					column={newYearKeys[23]}
					table={branches[2]}
					description={newYear.procrastinate}
					label={nyLabels.procrastinate}
				/>
				<Responses
					column={newYearKeys[24]}
					table={branches[2]}
					description={newYear.energy}
					label={nyLabels.energy}
				/>
				<Responses
					column={newYearKeys[25]}
					table={branches[2]}
					description={newYear.bravest}
					label={nyLabels.bravest}
				/>
				<Responses
					column={newYearKeys[26]}
					table={branches[2]}
					description={newYear.say_yes}
					label={nyLabels.sayYes}
				/>
				<Responses
					column={newYearKeys[27]}
					table={branches[2]}
					description={newYear.advise}
					label={nyLabels.advise}
				/>
				<Responses
					column={newYearKeys[28]}
					table={branches[2]}
					description={newYear.special}
					label={nyLabels.special}
				/>
				<h3>{nyLabels.nyWord}</h3>
				<Responses
					column={newYearKeys[29]}
					table={branches[2]}
					description={newYear.ny_word}
				/>
				<h3>Secret Wish</h3>
				<Responses
					column={newYearKeys[30]}
					table={branches[2]}
					description={newYear.secret_wish}
				/>
			</MainAnswerContainer>
		</Layout>
	);
};

export default NewYearPage;
