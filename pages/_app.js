import '../styles/globals.css';
import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { ResponseProvider } from '../contexts/ResponseContext';

// import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
	const [supabase] = useState(() => createBrowserSupabaseClient());

	return (
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}
		>
			<ResponseProvider>
				<Component {...pageProps} />
			</ResponseProvider>
		</SessionContextProvider>
	);
}
