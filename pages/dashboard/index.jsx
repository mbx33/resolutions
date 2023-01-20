import React from 'react';
import { useResponse } from '../../contexts/ResponseContext';

const DashboardPage = () => {
	const { user } = useResponse();

	if (!user) return <div>Not logged in</div>;

	const username = user.user_metadata.username;

	// console.log(user);

	return (
		<div>
			<div>Thanks for being here {username}!</div>
		</div>
	);
};

export default DashboardPage;
