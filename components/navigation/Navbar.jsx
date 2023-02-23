import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

// components
import StartButton from '../buttons/StartButton';

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

	// ! Need to redo the logo design

	return (
		<NavContainer>
			<div className="logo">
				<Link href="/">
					<Image
						className="logo"
						src="https://res.cloudinary.com/high-desert-development/image/upload/v1677113695/gold-logo-removebg-preview_ktm3gv.png"
						alt="logo"
						width={325}
						height={125}
						priority={true}
					></Image>
				</Link>
			</div>
			{user && <p style={{ fontSize: '1rem' }}>Welcome {username}</p>}
			<div className="nav">
				{session ? (
					<>
						<div className="btn-group">
							<Link href="/last-year">Last</Link>
							<Link href="/new-year">New</Link>
							<Link href="/dashboard">Dashboard</Link>
							<Button primary back onClick={handleLogout}>
								Logout
							</Button>
						</div>
					</>
				) : (
					<>
						<div className="btn-group">
							<StartButton isPrimary={true} isSecondary={false} />
							<Link href="/login">Login</Link>
							<Link href="/about">About</Link>
						</div>
					</>
				)}
			</div>
		</NavContainer>
	);
};

export default Navbar;
