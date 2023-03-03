import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useResponse } from '../../contexts/ResponseContext';

// Components
import Layout from '../../components/Layout';
import Responses from '../../components/dashboard/Responses';

// Labels
import { nyTitles, nyLabels } from '../../components/dashboard/newYearLabels';

// Styles
import { Main } from '../../styles/styled_components/dashboard';
import { Button, ErrorContainer } from '../../styles/styled_components/utils';

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

	return (
		<Layout title="New Year Answers">
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
		</Layout>
	);
};

export default NewYearPage;
