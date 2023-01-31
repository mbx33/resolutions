import React from 'react';
import { useRouter } from 'next/router';
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import Login from '../../components/signup-login/Login';

function timeOut(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const LoginPage = () => {
	const user = useUser();
	const supabase = useSupabaseClient();
	const session = useSession();
	const router = useRouter();

	if (!user) {
		return <Login supabase={supabase} session={session} timeOut={timeOut} />;
	} else {
		router.push('/dashboard');
		return <div>Redirecting...</div>;
	}
};

export default LoginPage;
