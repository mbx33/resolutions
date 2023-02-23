import { useResponse } from '../../contexts/ResponseContext';
import Link from 'next/link';

// Components
import Layout from '../../components/Layout';

// Styles
import {
	ErrorContainer,
	Button,
	CenterContainer,
} from '../../styles/styled_components/utils';

const DashboardPage = () => {
	const { user } = useResponse();

	if (!user)
		return (
			<ErrorContainer>
				<h3>Not logged in</h3>
				<Link href="/login">Go to Login </Link>
			</ErrorContainer>
		);

	const username = user.user_metadata.username;

	// TODO: Add a check to see if the user has already answered the questions
	// TODO: Add a button to take them to start the questions

	return (
		<Layout title="Dashboard">
			<CenterContainer>
				<h1>You can see your answers saved</h1>
				<p>Your answers for Last Year 2022</p>
				<Link href={`/dashboard/last-year/`}>Last Year</Link>
				<p>Your answers for the New Year 2023</p>
				<Link href={`/dashboard/new-year/`}>New Year</Link>
			</CenterContainer>
		</Layout>
	);
};

export default DashboardPage;
