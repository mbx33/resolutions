import React from 'react';
import Link from 'next/link';

import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

// Styles
import { NavContainer } from '../../styles/styled_components/navigation';
import { Button } from '../../styles/styled_components/utils';

const Navbar = () => {
	const supabase = useSupabaseClient();
	const session = useSession();
	const user = useUser();

	const handleLogout = () => {
		supabase.auth.signOut();
	};

	let username;

	if (user) {
		username = user.user_metadata.username;
	}

	return (
		<NavContainer>
			<div className="logo">
				<Link href="/">
					<h1>Logo</h1>
				</Link>
			</div>
			{user && <p style={{ fontSize: '1rem' }}>Welcome {username}</p>}
			<div className="nav">
				<ul>
					{session ? (
						<>
							<Link href="/last-year">
								<li>Last</li>
							</Link>
							<Link href="/new-year">
								<li>New </li>
							</Link>
							<Link href="/dashboard">
								<li>Dashboard</li>
							</Link>
							{/* <li onClick={handleLogout} style={{ cursor: 'pointer' }}>
								<button>Logout</button>
							</li> */}
						</>
					) : (
						<>
							<Link href="/">
								<li>Home</li>
							</Link>
							<Link href="/login">
								<li>Login</li>
							</Link>
						</>
					)}
					{user && (
						<div className="btn-group">
							<button onClick={handleLogout}>Logout</button>
						</div>
					)}
				</ul>
			</div>
		</NavContainer>
	);
};

export default Navbar;
