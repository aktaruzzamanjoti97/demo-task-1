import Image from "next/image";

const EmpowerTop = () => {
	return (
		<div className='row empower-top'>
			<div className='col-lg-6 col-xl-6'>
				<div className='empower-head-text text-center text-lg-start'>
					<h2>Empowering the Future of Blockchain</h2>
					<p>
						MetaFusion Labs is a blockchain solutions company officially
						registered in Panama, serving as the parent organization
						behind the ECM Ecosystem. With a strong focus on developing
						decentralized infrastructure, MetaFusion Labs partners
						strategically with BlockVerse Solutions LLC—an industry leader
						in token issuance and blockchain development—to deliver
						scalable, innovative Web3 solutions.
					</p>
				</div>
			</div>
			<div className='col-lg-6 col-xl-5'>
				<div className='logo-thumbnails'>
					<div className='logo-thumbnails-set' id='target-box'></div>
				</div>
				<div className='empower-image-flip d-block d-xl-none'>
					<div
						style={{ position: 'relative', width: '100%', height: 400 }}>
						<Image
							src='/assets/images/bg/empower.png'
							alt='Empower Image'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmpowerTop;
