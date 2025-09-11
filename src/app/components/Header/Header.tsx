'use client'; // necessary if using client-side features like dropdowns or state

import Nav from './Nav';

const Header = () => {
	return (
		<header className='header-area'>
			<div className='container extra-container'>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
