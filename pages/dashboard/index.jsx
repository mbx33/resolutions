import { useState, useEffect } from 'react';
import { useResponse } from '../../contexts/ResponseContext';
import Link from 'next/link';

// Components
import Responses from '../../components/dashboard/Responses';
import LastYear from './LastYear';
import NewYear from './NewYear';

// Labels
import { titles, labels } from '../../components/dashboard/lastYearLabels';
import { nyTitles, nyLabels } from '../../components/dashboard/newYearLabels';

// Styles
import { Main } from '../../styles/styled_components/dashboard';
import { ErrorContainer, Button } from '../../styles/styled_components/utils';

const DashboardPage = () => {
	const { user, userResponses, newYearResponses } = useResponse();
	const [isEditing, setIsEditing] = useState(false);

	const responses = [userResponses, newYearResponses];
	const [oldYear, newYear] = responses;

	if (!user)
		return (
			<ErrorContainer>
				<h3>Not logged in</h3>
				<Link href="/login">Go to Login </Link>
			</ErrorContainer>
		);

	const username = user.user_metadata.username;

	console.log(oldYear);
	console.log(isEditing);

	return (
		<Main>
			<h1>Last Year Review</h1>

			<h3>{titles.list}</h3>
			<Responses description={oldYear.list} />

			<h1>This is what last year was about</h1>
			<h3>{titles.part2}</h3>
			<Responses description={oldYear.family} label={labels.family} />
			<Responses description={oldYear.material} label={labels.material} />
			<Responses description={oldYear.friends} label={labels.friends} />
			<Responses description={oldYear.intellectual} label={labels.intellectual} />
			<Responses description={oldYear.financial} label={labels.financial} />
			<Responses description={oldYear.work_study} label={labels.work} />
			<Responses description={oldYear.vacation_hobby} label={labels.hobby} />
			<Responses description={oldYear.health_sport} label={labels.health} />
			<Responses description={oldYear.emotional} label={labels.emotional} />
			<Responses description={oldYear.achievements} label={labels.ach} />

			<h3>{titles.part3}</h3>
			<Responses description={oldYear.smartest} label={labels.smartest} />
			<Responses description={oldYear.biggest} label={labels.biggest} />
			<Responses description={oldYear.risk} label={labels.risk} />
			<Responses description={oldYear.surprise} label={labels.surprise} />
			<Responses description={oldYear.others} label={labels.others} />
			<Responses description={oldYear.completed} label={labels.completed} />

			<h3>{titles.part4}</h3>
			<Responses description={oldYear.proud} label={labels.proud} />
			<Responses description={oldYear.influenced_you} label={labels.influenced} />
			<Responses
				description={oldYear.you_influenced}
				label={labels.youInfluenced}
			/>
			<Responses description={oldYear.unable} label={labels.unable} />
			<Responses description={oldYear.discovered} label={labels.discovered} />
			<Responses description={oldYear.grateful} label={labels.grateful} />

			<h3>Best Moments</h3>
			<Responses description={oldYear.best_moments} label={labels.bestMoments} />

			<h3>Three Biggest Acheivements</h3>
			<Responses description={oldYear.biggest_ach} label={labels.biggestAch} />
			<Responses description={oldYear.how} label={labels.how} />
			<Responses description={oldYear.who} label={labels.who} />
			<Responses description={oldYear.challenges} label={labels.challenges} />
			<Responses description={oldYear.overcame} label={labels.overcame} />
			<Responses description={oldYear.learned} label={labels.learned} />

			<h3>Forgiveness</h3>
			<Responses description={oldYear.forgiveness} label={labels.forgiveness} />

			<h3>Release, Letting go</h3>
			<Responses description={oldYear.release} label={labels.release} />

			<h3>{titles.part5}</h3>
			<Responses description={oldYear.word_one} />
			<Responses description={oldYear.word_two} />
			<Responses description={oldYear.word_three} />

			<h3>Movie Title of last year</h3>
			<Responses description={oldYear.movie_title} />

			<Responses description={oldYear.goodbye} label={labels.goodbye} />

			{/*  To do for the new year stuff */}
			<h1>The New Year Stuff</h1>
			<h3>{nyTitles.part1}</h3>
			<Responses description={newYear.dreams} />

			<h3>{nyTitles.part2}</h3>
			<Responses description={newYear.family} label={nyLabels.family} />
			<Responses description={newYear.friends} label={nyLabels.friends} />
			<Responses description={newYear.material} label={nyLabels.material} />
			<Responses description={newYear.intellectual} label={nyLabels.intellectual} />
			<Responses description={newYear.financial} label={nyLabels.financial} />
			<Responses description={newYear.work_study} label={nyLabels.work} />
			<Responses description={newYear.vacation_hobby} label={nyLabels.hobby} />
			<Responses description={newYear.health_sport} label={nyLabels.health} />
			<Responses description={newYear.emotional} label={nyLabels.emotional} />
			<Responses description={newYear.achievements} label={nyLabels.ach} />

			<h3>{nyTitles.part3}</h3>
			{/* Continue here adding from section 3 with love label  */}
			<Responses description={newYear.love} label={nyLabels.love} />
			<Responses description={newYear.let_go} label={nyLabels.letGo} />
			<Responses description={newYear.achieve} label={nyLabels.achieve} />
			<Responses description={newYear.support} label={nyLabels.support} />
			<Responses description={newYear.try} label={nyLabels.try} />
			<Responses description={newYear.say_no} label={nyLabels.sayNo} />

			<Responses description={newYear.comfort} label={nyLabels.comfort} />
			<Responses description={newYear.morning} label={nyLabels.morning} />
			<Responses description={newYear.indulge} label={nyLabels.indulge} />
			<Responses description={newYear.visit} label={nyLabels.visit} />
			<Responses
				description={newYear.relationships}
				label={nyLabels.relationships}
			/>
			<Responses description={newYear.gifts} label={nyLabels.gifts} />

			<h3>{nyTitles.part4}</h3>
			<Responses
				description={newYear.procrastinate}
				label={nyLabels.procrastinate}
			/>
			<Responses description={newYear.energy} label={nyLabels.energy} />
			<Responses description={newYear.bravest} label={nyLabels.bravest} />
			<Responses description={newYear.say_yes} label={nyLabels.sayYes} />
			<Responses description={newYear.advise} label={nyLabels.advise} />
			<Responses description={newYear.special} label={nyLabels.special} />

			<h3>{nyLabels.nyWord}</h3>
			<Responses description={newYear.ny_word} />

			<h3>{nyLabels.secret}</h3>
			<Responses description={newYear.secret_wish} />
		</Main>
	);
};

export default DashboardPage;
