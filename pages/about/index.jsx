import Router from "next/router";
import styled from "styled-components";

import { useUser, useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

// components
import Layout from "../../components/Layout";

const AboutPage = () => {
	const user = useUser();
	const session = useSession();
	const router = Router;

	if (session && user) {
		// redirect to dashboard page
		router.push("/dashboard");
	}

	return (
		<Layout title="About Page">
			<Section>
				<header>
					<h1>Welcome to Resolutions</h1>
				</header>

				<section>
					<h2>Our Mission</h2>
					<p>
						At Resolutions, we are dedicated to helping you turn your
						aspirations into achievements. We believe in the power of setting
						and tracking goals to create positive and lasting changes in your
						life.
					</p>
				</section>

				<section>
					<h2>What Sets Us Apart</h2>
					<p>
						Resolutions&apos; journey to self-improvement. We provide a
						user-friendly interface journey to self-improvement. We provide a
						user-friendly interface to effortlessly set, monitor, and
						accomplish your New Year resolutions. Our focus is on simplicity,
						effectiveness, and your overall well-being.
					</p>
				</section>

				<section>
					<h2>Key Features</h2>
					<ul>
						<li>
							<strong>Goal Tracking:</strong> Easily set and track your
							resolutions throughout the year.
						</li>
						<li>
							<strong>Reflect & Learn:</strong> Analyze your progress, learn
							from setbacks, and plan for a better future.
						</li>
						<li>
							<strong>Community Support:</strong> Connect with like-minded
							individuals, share experiences, and motivate each other.
						</li>
					</ul>
				</section>

				<section>
					<h2>Join Us Today</h2>
					<p>
						Embark on a journey of self-discovery and personal growth. Join
						Resolutions today and take the first step towards a more
						fulfilling and accomplished life.
					</p>
				</section>
			</Section>
		</Layout>
	);
};

export default AboutPage;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 14rem 2rem;
	margin: 0 auto;
	width: 80%;

	header {
		text-align: center;
	}

	section {
		text-align: center;
	}

	ul {
		list-style: none;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 10rem 1rem;
	}
`;
