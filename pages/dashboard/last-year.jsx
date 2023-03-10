import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useResponse } from '../../contexts/ResponseContext';

// Components
import Responses from '../../components/dashboard/Responses';
import Layout from '../../components/Layout';

// Labels
import { titles, labels } from '../../components/dashboard/lastYearLabels';

// Styles
import { Main } from '../../styles/styled_components/dashboard';
import { Button, ErrorContainer } from '../../styles/styled_components/utils';

const branches = ['ly_branch_one', 'ly_branch_two', 'ly_branch_three', 'ly_branch_four'];

const LastYearPage = () => {
	const { user, userResponses, newYearResponses } = useResponse();

	const responses = [userResponses, newYearResponses];
	const [oldYear, newYear] = responses;

	//access the key for each item in oldyear object
	const oldYearKeys = Object.keys(oldYear);
	// console.log(oldYearKeys);

	if (!user)
		return (
			<ErrorContainer>
				<h3>Not logged in</h3>
				<Link href="/">Homepage</Link>
			</ErrorContainer>
		);

	return (
		<Layout title="Last Year">
			<h1>Last Year Review</h1>

			<Responses
				branch={branches[0]}
				description={oldYear.list}
				label={labels.list}
				column={oldYearKeys[0]}
			/>

			<h1>This is what last year was about</h1>
			<h3>{titles.part2}</h3>
			<Responses
				branch={branches[0]}
				description={oldYear.family}
				label={labels.family}
				column={oldYearKeys[1]}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.material}
				label={labels.material}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.friends}
				label={labels.friends}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.intellectual}
				label={labels.intellectual}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.financial}
				label={labels.financial}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.work_study}
				label={labels.work}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.vacation_hobby}
				label={labels.hobby}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.health_sport}
				label={labels.health}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.emotional}
				label={labels.emotional}
			/>
			<Responses
				branch={branches[0]}
				description={oldYear.achievements}
				label={labels.ach}
			/>

			<h3>{titles.part3}</h3>
			<Responses
				branch={branches[1]}
				description={oldYear.smartest}
				label={labels.smartest}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.biggest}
				label={labels.biggest}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.risk}
				label={labels.risk}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.surprise}
				label={labels.surprise}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.others}
				label={labels.others}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.completed}
				label={labels.completed}
			/>

			<h3>{titles.part4}</h3>
			<Responses
				branch={branches[1]}
				description={oldYear.proud}
				label={labels.proud}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.influenced_you}
				label={labels.influenced}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.you_influenced}
				label={labels.youInfluenced}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.unable}
				label={labels.unable}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.discovered}
				label={labels.discovered}
			/>
			<Responses
				branch={branches[1]}
				description={oldYear.grateful}
				label={labels.grateful}
			/>

			<h3>Best Moments</h3>
			<Responses
				branch={branches[2]}
				description={oldYear.best_moments}
				label={labels.bestMoments}
			/>

			<h3>Three Biggest Acheivements</h3>
			<Responses
				branch={branches[2]}
				description={oldYear.biggest_ach}
				label={labels.biggestAch}
			/>
			<Responses
				branch={branches[2]}
				description={oldYear.how}
				label={labels.how}
			/>
			<Responses
				branch={branches[2]}
				description={oldYear.who}
				label={labels.who}
			/>
			<Responses
				branch={branches[2]}
				description={oldYear.challenges}
				label={labels.challenges}
			/>
			<Responses
				branch={branches[2]}
				description={oldYear.overcame}
				label={labels.overcame}
			/>
			<Responses
				branch={branches[2]}
				description={oldYear.learned}
				label={labels.learned}
			/>

			<h3>Forgiveness</h3>
			<Responses
				branch={branches[3]}
				description={oldYear.forgiveness}
				label={labels.forgiveness}
			/>

			<h3>Release, Letting go</h3>
			<Responses
				branch={branches[3]}
				description={oldYear.release}
				label={labels.release}
			/>

			<h3>{titles.part5}</h3>
			<Responses branch={branches[3]} description={oldYear.word_one} />
			<Responses branch={branches[3]} description={oldYear.word_two} />
			<Responses branch={branches[3]} description={oldYear.word_three} />

			<h3>Movie Title of last year</h3>
			<Responses branch={branches[3]} description={oldYear.movie_title} />

			<Responses
				branch={branches[3]}
				description={oldYear.goodbye}
				label={labels.goodbye}
			/>
		</Layout>
	);
};

export default LastYearPage;
