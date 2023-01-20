import React from 'react';
import Head from 'next/head';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import Signup from '../../components/signup-login/Signup';

function timeOut(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const SignupPage = () => {
	const supabase = useSupabaseClient();
	const session = useSession();

	return (
		<div>
			<Signup supabase={supabase} session={session} timeOut={timeOut} />
		</div>
	);
};

export default SignupPage;
