'use client';

import EmpowerBottom from './EmpowerBottom';
import EmpowerTop from './EmpowerTop';

const Main = () => {
	return (
		<main>
			<section className='empower-area section-link' id='about'>
				<div className='ellipse ellipse-3'></div>
				<div className='dots-background dotsBackground'></div>

				<div id='lottie-empower'></div>

				<div className='container empower-container'>
					<div className='empower-content'>
						<EmpowerTop />
						<EmpowerBottom />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Main;
