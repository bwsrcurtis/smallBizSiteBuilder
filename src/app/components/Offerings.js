import React from 'react';
import Feature from './Feature.js';

const Offerings = () => {
	return (
		<>
			<div className='flex w-5/6 mt-4 mx-auto pt-6 pb-12 justify-between'>
				<div className='text-left text-text'>
					<p id='offerings' className='text-5xl mb-4'>What We Offer</p>
					<p className='text-lg text-textSecondary'>
						Every business needs a website, but it can be overwhelming building one yourself.
						<br></br>
						That&apos;s where we come in.
						<br></br>
						We offer fast, responsive websites built from scratch for your business.
					</p>
				</div>
			</div>
			<div className='w-3/4 mx-auto flex flex-row justify-evenly flex-wrap'>
				<Feature></Feature>
				<Feature></Feature>
				<Feature></Feature>
				<Feature></Feature>
				<Feature></Feature>
			</div>
		</>
	);
};

export default Offerings;
