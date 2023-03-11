import { useState } from 'react';
import Head from 'next/head';

// components
import Navbar from './navigation/Navbar';
import Footer from './Footer';
import Modal from './Modal';

// styles
import { MainContainer } from '../styles/styled_components/utils';

const Layout = ({ children, title }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showSignup, setShowSignup] = useState(true);

	function openModalLogin() {
		setShowSignup(false);
		openModal();
	}

	function openModalSignup() {
		setShowSignup(true);
		openModal();
	}

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainContainer>
				<header className="header">
					<Navbar openLogin={openModalLogin} openSignup={openModalSignup} />
				</header>
				<main>{children}</main>
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					setShowSignup={setShowSignup}
					showSignup={showSignup}
				/>
				<footer>
					<Footer />
				</footer>
			</MainContainer>
		</>
	);
};

export default Layout;
