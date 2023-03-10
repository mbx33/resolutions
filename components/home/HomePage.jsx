import { useState } from 'react';
import Head from 'next/head';

// components
// import Layout from '../Layout';
import Hero from './Hero';
import Navbar from '../navigation/Navbar';
import HowTo from './HowTo';
import Why from './Why';
import Footer from '../Footer';
import Modal from '../Modal';

// styles
import { NavbarWrapper } from '../../styles/styled_components/home';

const HomePage = () => {
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
				<title>Resolutions for a great year</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<NavbarWrapper>
				<Navbar openLogin={openModalLogin} openSignup={openModalSignup} />
			</NavbarWrapper>
			<Hero openSignup={openModalSignup} />
			<div className="line" />
			<HowTo />
			<Why openSignup={openModalSignup} />
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				setShowSignup={setShowSignup}
				showSignup={showSignup}
			/>
			<Footer />
		</>
	);
};

export default HomePage;
