import Image from 'next/image';

const NavLeft = () => {
	return (
		<div className='logo fade-in-left'>
			<a href='#'>
				<Image
					src='/assets/images/logo.png'
					alt='logo'
					width={150}
					height={50}
				/>
			</a>
			<button className='mobile-bars d-lg-none d-block'>
				<i className='fa-solid fa-bars-staggered'></i>
			</button>
		</div>
	);
};

export default NavLeft;
