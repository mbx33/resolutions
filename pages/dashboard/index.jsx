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
		</Main>
	);
};

export default DashboardPage;
