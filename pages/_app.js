import '../styles/globals.css';
import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { ResponseProvider } from '../contexts/ResponseContext';

import Navbar from '../components/navigation/Navbar';

export default function App({ Component, pageProps }) {
	const [supabase] = useState(() => createBrowserSupabaseClient());

	return (
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}
		>
			<ResponseProvider>
				<Navbar />

				<Component {...pageProps} />
			</ResponseProvider>
		</SessionContextProvider>
	);
}

// export default function App({ Component, pageProps }) {
// 	return <Component {...pageProps} />;
// }
