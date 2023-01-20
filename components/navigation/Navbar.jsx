import React from 'react';
import Link from 'next/link';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

// Styles
import { NavContainer } from '../../styles/styled_components/navigation';
import { Button } from '../../styles/styled_components/utils';

const Navbar = () => {
	const supabase = useSupabaseClient();
	const session = useSession();

	const handleLogout = () => {
		supabase.auth.signOut();
	};

	return (
		<NavContainer>
			<div className="logo">
				<h1>Logo</h1>
			</div>
			<div className="nav">
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					{session ? (
						<li onClick={handleLogout} style={{ cursor: 'pointer' }}>
							<button>Logout</button>
						</li>
					) : (
						<li>
							<Link href="/login">Login</Link>
						</li>
					)}
				</ul>
			</div>
		</NavContainer>
	);
};

export default Navbar;
