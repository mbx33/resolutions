import Head from 'next/head';

// components
import Navbar from './navigation/Navbar';
import Footer from './Footer';

const Layout = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Layout;
