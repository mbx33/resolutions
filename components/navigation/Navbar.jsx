import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
					<Image
						className="logo"
						src="https://res.cloudinary.com/high-desert-development/image/upload/v1675828591/ResLogo-removebg-preview_tgnrhy.png"
						alt="logo"
						width={125}
						height={125}
						priority={true}
					></Image>
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
								<li>New</li>
							</Link>
							<Link href="/dashboard">
								<li>Dashboard</li>
							</Link>
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
