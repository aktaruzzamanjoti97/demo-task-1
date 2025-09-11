const HeroContainer = () => {
	return (
		<div className='container'>
			<div className='hero-content'>
				<div className='style-2'>
					<div className='row'>
						<div className='col-xxl-10 offset-xxl-1 col-lg-10 offset-lg-1'>
							<div className='hero-title reveal-wrapper'>
								<h1>
									Architecting the Future of Digital Commerce
									MetaFusion Labs
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div className='style-3'>
					<div className='row'>
						<div className='col-lg-8 offset-lg-2'>
							<div className='hero-title reveal-wrapper'>
								<p className='text-center mt-5'>
									Powering ECM Coin and its ecosystem—delivering
									scalable, low-cost, blockchain infrastructure for
									e-commerce, trading and beyond.
								</p>
							</div>
						</div>
					</div>
					<div className='hero-btn-wrapper position-relative mt-5'>
						<a href='#' className='hero-btn'>
							<div className='light-particle'></div>
							<div className='light-particle'></div>
							<div className='light-particle'></div>
							<span>
								Start Exploring
								<i className='fa-solid fa-arrow-right'></i>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroContainer;
