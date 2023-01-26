import React from 'react';
import { useResponse } from '../../contexts/ResponseContext';

// Styles
import { Main } from '../../styles/styled_components/utils';

const DashboardPage = () => {
	const { user } = useResponse();

	if (!user) return <div>Not logged in</div>;

	const username = user.user_metadata.username;

	// console.log(user);

	return (
		<Main>
			<div>Thanks for being here {username}!</div>

			<p>Check out your plans for 2023</p>
			{/* A link will go here to show the data from the database */}
		</Main>
	);
};

export default DashboardPage;
