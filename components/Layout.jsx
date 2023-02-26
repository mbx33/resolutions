import Head from 'next/head';

// components
import Navbar from './navigation/Navbar';
import Footer from './Footer';

// styles
import { MainContainer } from '../styles/styled_components/utils';

const Layout = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainContainer>
				<header className="header">
					<Navbar />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</MainContainer>
		</>
	);
};

export default Layout;
