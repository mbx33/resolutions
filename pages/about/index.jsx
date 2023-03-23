import Router from 'next/router';

import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react';

// components
import Layout from '../../components/Layout';

const AboutPage = () => {
	const user = useUser();
	const session = useSession();
	const router = Router;

	if (session && user) {
		// redirect to dashboard page
		router.push('/dashboard');
	}

	return (
		<Layout title="About Page">
			<h1>About Page</h1>
		</Layout>
	);
};

export default AboutPage;
