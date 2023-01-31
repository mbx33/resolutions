import { useState, useEffect } from 'react';
import { useResponse } from '../../contexts/ResponseContext';
import Link from 'next/link';

// Styles
import { Main } from '../../styles/styled_components/dashboard';
import { ErrorContainer } from '../../styles/styled_components/utils';

const DashboardPage = () => {
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

	function handleEdit(key) {
		console.log(key);
	}

	const username = user.user_metadata.username;

	console.log(oldYear);

	return (
		<Main>
			<h1>Last Year Review</h1>
			{/* // loop through the old year object and display the answers */}
			{oldYear &&
				Object.keys(oldYear).map((key) => {
					return (
						<div key={key}>
							<h3>{key}</h3>
							<p>{oldYear[key]}</p>
						</div>
					);
				})}
		</Main>
	);
};

export default DashboardPage;
