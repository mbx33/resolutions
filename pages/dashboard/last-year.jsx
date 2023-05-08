import Link from 'next/link';
import { useResponse } from '../../contexts/ResponseContext';

// Components
import Responses from '../../components/dashboard/Responses';
import Layout from '../../components/Layout';

// Labels
import { titles, labels } from '../../components/dashboard/lastYearLabels';

// Styles
import { ErrorContainer } from '../../styles/styled_components/utils';
import { MainAnswerContainer } from '../../styles/styled_components/main-answers';

const branches = ['ly_branch_one', 'ly_branch_two', 'ly_branch_three', 'ly_branch_four'];

const LastYearPage = () => {
	const { user, userResponses, newYearResponses } = useResponse();

	const responses = [userResponses, newYearResponses];
	const [oldYear, newYear] = responses;

	//access the key for each item in oldyear object
	const oldYearKeys = Object.keys(oldYear);

	if (!user)
		return (
			<ErrorContainer>
				<h3>Not logged in</h3>
				<Link href="/">Homepage</Link>
			</ErrorContainer>
		);

	return (
		<Layout darkNav={true} title="Last Year">
			<MainAnswerContainer>
				<h1>Last Year Review</h1>
				<Responses
					table={branches[0]}
					description={oldYear.list}
					label={labels.list}
					column={oldYearKeys[0]}
				/>
				<h2>This is what last year was about</h2>
				<h3>{titles.part2}</h3>
				<Responses
					table={branches[0]}
					description={oldYear.family}
					label={labels.family}
					column={oldYearKeys[1]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.material}
					label={labels.material}
					column={oldYearKeys[2]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.friends}
					label={labels.friends}
					column={oldYearKeys[3]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.intellectual}
					label={labels.intellectual}
					column={oldYearKeys[4]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.financial}
					label={labels.financial}
					column={oldYearKeys[5]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.work_study}
					label={labels.work}
					column={oldYearKeys[6]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.vacation_hobby}
					label={labels.hobby}
					column={oldYearKeys[7]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.health_sport}
					label={labels.health}
					column={oldYearKeys[8]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.emotional}
					label={labels.emotional}
					column={oldYearKeys[9]}
				/>
				<Responses
					table={branches[0]}
					description={oldYear.achievements}
					label={labels.ach}
					column={oldYearKeys[10]}
				/>
				<h3>{titles.part3}</h3>
				<Responses
					table={branches[1]}
					description={oldYear.smartest}
					label={labels.smartest}
					column={oldYearKeys[11]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.biggest}
					label={labels.biggest}
					column={oldYearKeys[12]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.risk}
					label={labels.risk}
					column={oldYearKeys[13]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.surprise}
					label={labels.surprise}
					column={oldYearKeys[14]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.others}
					label={labels.others}
					column={oldYearKeys[15]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.completed}
					label={labels.completed}
					column={oldYearKeys[16]}
				/>
				<h3>{titles.part4}</h3>
				<Responses
					table={branches[1]}
					description={oldYear.proud}
					label={labels.proud}
					column={oldYearKeys[17]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.influenced_you}
					label={labels.influenced}
					column={oldYearKeys[18]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.you_influenced}
					label={labels.youInfluenced}
					column={oldYearKeys[19]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.unable}
					label={labels.unable}
					column={oldYearKeys[20]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.discovered}
					label={labels.discovered}
					column={oldYearKeys[21]}
				/>
				<Responses
					table={branches[1]}
					description={oldYear.grateful}
					label={labels.grateful}
					column={oldYearKeys[22]}
				/>
				<h3>Best Moments</h3>
				<Responses
					table={branches[2]}
					description={oldYear.best_moments}
					label={labels.bestMoments}
					column={oldYearKeys[23]}
				/>
				<h3>Three Biggest Acheivements</h3>
				<Responses
					table={branches[2]}
					description={oldYear.biggest_ach}
					label={labels.biggestAch}
					column={oldYearKeys[24]}
				/>
				<Responses
					table={branches[2]}
					description={oldYear.how}
					label={labels.how}
					column={oldYearKeys[25]}
				/>
				<Responses
					table={branches[2]}
					description={oldYear.who}
					label={labels.who}
					column={oldYearKeys[26]}
				/>
				<Responses
					table={branches[2]}
					description={oldYear.challenges}
					label={labels.challenges}
					column={oldYearKeys[27]}
				/>
				<Responses
					table={branches[2]}
					description={oldYear.overcame}
					label={labels.overcame}
					column={oldYearKeys[28]}
				/>
				<Responses
					table={branches[2]}
					description={oldYear.learned}
					label={labels.learned}
					column={oldYearKeys[29]}
				/>
				<h3>Forgiveness</h3>
				<Responses
					table={branches[3]}
					description={oldYear.forgiveness}
					label={labels.forgiveness}
					column={oldYearKeys[30]}
				/>
				<h3>Release, Letting go</h3>
				<Responses
					table={branches[3]}
					description={oldYear.release}
					label={labels.release}
					column={oldYearKeys[31]}
				/>
				<h3>{titles.part5}</h3>
				<Responses
					column={oldYearKeys[32]}
					table={branches[3]}
					description={oldYear.word_one}
				/>
				<Responses
					column={oldYearKeys[33]}
					table={branches[3]}
					description={oldYear.word_two}
				/>
				<Responses
					column={oldYearKeys[34]}
					table={branches[3]}
					description={oldYear.word_three}
				/>
				<h3>Movie Title of last year</h3>
				<Responses
					column={oldYearKeys[35]}
					table={branches[3]}
					description={oldYear.movie_title}
				/>
				<Responses
					column={oldYearKeys[36]}
					table={branches[3]}
					description={oldYear.goodbye}
					label={labels.goodbye}
				/>
			</MainAnswerContainer>
		</Layout>
	);
};

export default LastYearPage;
