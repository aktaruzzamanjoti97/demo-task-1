const NavRight = () => {
	return (
		<div className='nav'>
			<ul className='d-flex flex-lg-row flex-column align-items-center gx-4'>
				<li className='fade-in-left nav-item-1'>
					<a className='nav-link active' href='#home-section'>
						Home
					</a>
				</li>
				<li className='fade-in-left nav-item-2'>
					<a className='nav-link' href='#about'>
						About
					</a>
				</li>
				<li className='fade-in-left nav-item-3'>
					<a className='nav-link' href='#ecmcoin'>
						ECM Coin
					</a>
				</li>
				<li className='fade-in-left nav-item-4'>
					<a className='nav-link' href='#ecosystem'>
						Ecosystem
					</a>
				</li>
				<li className='fade-in-left nav-item-5 d-block d-lg-none'>
					<a href='#footer' className='btn-1 nav-link'>
						Contact Us
					</a>
				</li>
			</ul>
		</div>
	);
};

export default NavRight;
