import Image from 'next/image';

const HeroLine = () => {
	return (
		<>
			<div className='hero-line hero-line1'>
				<div style={{ position: 'relative', width: '100%', height: 20 }}>
					<Image
						src='/assets/images/bg/line.png'
						alt='line'
						fill
						style={{ objectFit: 'contain' }}
					/>
				</div>
			</div>

			<div className='hero-line hero-line2'>
				<div style={{ position: 'relative', width: '100%', height: 20 }}>
					<Image
						src='/assets/images/bg/line.png'
						alt='line'
						fill
						style={{ objectFit: 'contain' }}
					/>
				</div>
			</div>
		</>
	);
};

export default HeroLine;
