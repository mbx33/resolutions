import Router from 'next/router';
import Head from 'next/head';
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react';

//Quote: Be Curious not Judgmental

// Components
import HomePage from '../components/home/HomePage';

// Styles
import { Main } from '../styles/styled_components/utils';

export default function Home() {
	const user = useUser();
	const session = useSession();
	const router = Router;

	if (session && user) {
		// redirect to dashboard page
		router.push('/dashboard');
	}

	return (
		<>
			<Head>
				<title>Resolutions</title>
				<meta
					name="description"
					content="Keep track of your future year while keeping track of past experiences"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main>
				<HomePage />
			</Main>
		</>
	);
}
