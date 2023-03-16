import { useResponse } from '../../contexts/ResponseContext';
import Link from 'next/link';

// Components
import Layout from '../../components/Layout';
import Preparing from '../../components/introduction/Preparing';

// Styles
import { ErrorContainer, CenterContainer } from '../../styles/styled_components/utils';
import { MainDashboard } from '../../styles/styled_components/main-forms';
import { FormContainer } from '../../styles/styled_components/form';

const DashboardPage = () => {
	const { user } = useResponse();

	if (!user)
		return (
			<ErrorContainer>
				<h3>Not logged in</h3>
				<Link href="/">Homepage</Link>
			</ErrorContainer>
		);

	const username = user.user_metadata.username;

	// TODO: Add a check to see if the user has already answered the questions

	return (
		<Layout darkNav={false} title="Dashboard">
			<MainDashboard>
				<FormContainer>
					<Preparing user={user} />
					<CenterContainer>
						<div className="last-year">
							<p>Last Year 2022</p>
							<Link href={`/dashboard/last-year/`}>Last Year</Link>
						</div>
						<div className="new-year">
							<p>New Year 2023</p>
							<Link href={`/dashboard/new-year/`}>New Year</Link>
						</div>
					</CenterContainer>
				</FormContainer>
			</MainDashboard>
		</Layout>
	);
};

export default DashboardPage;
