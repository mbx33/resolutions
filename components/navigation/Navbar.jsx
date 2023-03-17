import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import { useResponse } from '../../contexts/ResponseContext';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

// components
import StartButton from '../buttons/StartButton';

// Styles
import { NavContainer } from '../../styles/styled_components/navigation';
import { Button, OpenLink } from '../../styles/styled_components/utils';

const Navbar = ({ openSignup, openLogin, dark }) => {
	const supabase = useSupabaseClient();
	const session = useSession();
	const user = useUser();
	const { resetResponses } = useResponse();
	const [isOpen, setIsOpen] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const handleLogout = () => {
		supabase.auth.signOut();
		resetResponses();
	};

	function toggleNav() {
		setIsOpen(!isOpen);
		setIsActive(!isActive);
	}

	const navStyles = {
		transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
		transition: 'transform .3s ease-in-out',
		opacity: 0.95,
	};

	const hamburgerStyles = {
		opacity: isOpen ? 0 : 1,
		transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
		transition: 'transform 0.3s ease-in-out',
	};

	const closeStyles = {
		opacity: isOpen ? 1 : 0,
		transform: isOpen ? 'rotate(0)' : 'rotate(90deg)',
		transition: 'transform 0.3s ease-in-out',
	};

	//create a function that toggles the menu to closed when a user clicks a link
	function closeMenu() {
		setIsOpen(false);
	}

	let username;

	if (user) {
		username = user.user_metadata.username;
	}

	// ! Need to redo the logo design

	return (
		<NavContainer dark={dark}>
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
						<div className="desktop-view">
							<div className="btn-group">
								<Link onClick={closeMenu} href="/last-year">
									Last
								</Link>
								<Link onClick={closeMenu} href="/new-year">
									New
								</Link>
								<Link onClick={closeMenu} href="/dashboard">
									Dashboard
								</Link>
								<Button primary back onClick={handleLogout}>
									Logout
								</Button>
							</div>
						</div>
						<div className="mobile-view">
							<div className="hamburger-nav">
								<GiHamburgerMenu
									style={hamburgerStyles}
									onClick={toggleNav}
								/>
							</div>
							<nav style={navStyles} className="mobile-nav">
								<div className="hamburger-nav close">
									<AiOutlineClose
										style={closeStyles}
										onClick={toggleNav}
									/>
								</div>
								<div className="btn-group mobile">
									<Link href="/last-year">Last</Link>
									<Link href="/new-year">New</Link>
									<Link href="/dashboard">Dashboard</Link>
									<Button primary back onClick={handleLogout}>
										Logout
									</Button>
								</div>
							</nav>
						</div>
					</>
				) : (
					<>
						<nav className="desktop-view">
							<div className="btn-group">
								<StartButton
									openSignup={openSignup}
									isPrimary={true}
									isSecondary={false}
								/>
								<div onClick={openLogin}>
									<Link href="">Login</Link>
								</div>
								<Link href="/about">About</Link>
							</div>
						</nav>
						<div className="mobile-view">
							<div style={hamburgerStyles} className="hamburger-nav">
								<GiHamburgerMenu onClick={toggleNav} />
							</div>
							<div style={navStyles} className="mobile-nav">
								<div className="hamburger-nav close">
									<AiOutlineClose
										style={closeStyles}
										onClick={toggleNav}
									/>
								</div>
								<div className="btn-group mobile">
									<div
										onClick={() => {
											setIsOpen(false);
										}}
									>
										<StartButton
											openSignup={openSignup}
											isPrimary={true}
											isSecondary={false}
										/>
									</div>
									<div onClick={openLogin}>
										<Link
											onClick={() => {
												setIsOpen(false);
											}}
											href=""
										>
											Login
										</Link>
									</div>
									<Link
										onClick={() => {
											setIsOpen(false);
										}}
										href="/about"
									>
										About
									</Link>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</NavContainer>
	);
};

export default Navbar;
