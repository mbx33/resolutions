import React from 'react';
import Head from 'next/head';

// components
// import Layout from '../Layout';
import Hero from './Hero';
import Navbar from '../navigation/Navbar';

// styles
import { NavbarWrapper } from '../../styles/styled_components/home';

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Resolutions for a great year</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<NavbarWrapper>
				<Navbar />
			</NavbarWrapper>
			<Hero />
		</>
	);
};

export default HomePage;
