import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import Signup from '../../components/signup-login/Signup';

function timeOut(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const SignupPage = () => {
	const supabase = useSupabaseClient();
	const session = useSession();
	const user = useUser();

	const router = useRouter();

	if (!user) {
		return <Signup supabase={supabase} session={session} timeOut={timeOut} />;
	} else {
		router.push('/last-year');
		return <div>Redirecting...</div>;
	}
};

export default SignupPage;
