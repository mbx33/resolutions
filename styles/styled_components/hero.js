import styled from 'styled-components';

export const HeroContainer = styled.section`
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
		url('https://res.cloudinary.com/high-desert-development/image/upload/v1677091688/night-sky_eoeesq.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100vh;
	color: #fff;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 10rem;
	padding-top: 15rem;

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		letter-spacing: 1px;
	}

	.headline {
		font-size: 4rem;
		color: var(--color-200);
	}

	.sub-headline {
		font-size: 2.5rem;
		margin-right: 1rem;
		text-shadow: 1px 1px 1px var(--color-accent);
	}

	p {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		width: 65%;
		line-height: 2;
		letter-spacing: 1px;
	}

	.cta-btn {
		display: flex;
		align-items: center;
	}

	@media (max-width: 840px) {
		margin-left: 0;
		padding-top: 12rem;
		text-align: center;

		h1 {
			font-size: 2.5rem;
		}

		.headline {
			font-size: 3rem;
		}

		.sub-headline {
			font-size: 2rem;
		}

		p {
			width: 100%;
		}

		.cta-btn {
			justify-content: center;
		}
	}

	@media (max-width: 600px) {
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;
