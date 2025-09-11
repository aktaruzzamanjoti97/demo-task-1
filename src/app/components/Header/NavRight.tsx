import Image from 'next/image';

const NavRight = () => {
	return (
		<div className='header-btn d-lg-block d-none'>
			<div className='d-flex align-items-center'>
				<a href='#' className='btn-1 fade-in-right btn-animate'>
					Contact Us
				</a>
				<div className='dropdown fade-in-right dropdown-item-animate'>
					<div className='position-relative'>
						<span
							className='btn btn-secondary dropdown-toggle'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							<Image src='assets/images/icon/world.svg' alt='photos' width={10} height={10} />
							EN
						</span>
						<ul className='dropdown-menu country-dropdown'>
							<li>
								<a className='dropdown-item active' href='#'>
									EN
								</a>
							</li>
							<li>
								<a className='dropdown-item' href='#'>
									BN
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavRight;
