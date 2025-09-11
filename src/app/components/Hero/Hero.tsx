'use client'; // required if you plan to use client-side interactivity

import HeroCard from './HeroCard';
import HeroContainer from './HeroContainer';
import HeroEco from './HeroEco';
import HeroLine from './HeroLine';

const Hero = () => {
	return (
		<section className='hero-area section-link' id='home-section'>
			<HeroEco />

			<div className='ellipse ellipse-1'></div>
			<div className='ellipse ellipse-2'></div>
			<div className='toplight'>
				<span className='small-shadow'></span>
			</div>

			<HeroLine />

			<div className='dots-background dotsBackground'></div>

			<HeroCard />

			<HeroContainer />
		</section>
	);
};

export default Hero;
