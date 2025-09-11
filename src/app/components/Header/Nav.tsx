import NavLeft from './NavLeft';
import NavMiddle from './NavMiddle';
import NavRight from './NavRight';

const Nav = () => {
	return (
		<div className='d-flex align-items-center justify-content-between header'>
			<NavLeft />

			<NavMiddle />

			<NavRight />
		</div>
	);
};

export default Nav;
