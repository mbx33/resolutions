import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useResponse } from '../../contexts/ResponseContext';
import axios from 'axios';

// Components
import Responses from '../../components/dashboard/Responses';

// Labels
import { titles, labels } from '../../components/dashboard/lastYearLabels';

// Styles
import { Main } from '../../styles/styled_components/dashboard';
import { Button, ErrorContainer } from '../../styles/styled_components/utils';

const LastYearPage = () => {
	const { user, userResponses, newYearResponses } = useResponse();

	const responses = [userResponses, newYearResponses];
	const [oldYear, newYear] = responses;

	if (!user)
		return (
			<ErrorContainer>
				<h3>Not logged in</h3>
				<Link href="/login">Go to Login </Link>
			</ErrorContainer>
		);

	//update the response in the database
	//update the response in the state
	const handleEdit = async (oldText, newText, user) => {
		const { data } = await axios.post('/api/edit', {
			oldText,
			newText,
			user,
		});
		console.log(data);
	};

	return (
		<Main>
			<h1>Last Year Review</h1>

			<Responses description={oldYear.list} label={labels.list} edit={handleEdit} />

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
		</Main>
	);
};

export default LastYearPage;
