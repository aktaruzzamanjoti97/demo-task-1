import Image from 'next/image';

const HeroEco = () => {
	return (
		<>
			<div className='ecosystem-icon-animation'>
				{[1, 2, 3, 4, 5, 6].map((i) => (
					<div key={i} className={`ecosystem-icon ecosystem-icon-${i}`}>
						<Image
							src={`/assets/images/icon/${i}.png`}
							alt={`Icon ${i}`}
							width={50}
							height={50}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default HeroEco;
