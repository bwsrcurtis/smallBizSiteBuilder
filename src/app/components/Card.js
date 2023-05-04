import React from 'react';
import Image from 'next/image';

const Card = ({ src, alt, title, description }) => {
	return (
		<div className='relative'>
			<div className='bg-primary/75 h-96 w-[24rem] absolute top-[-.5rem] left-[-1rem]'></div>
			<div className='h-96 m-x-24 w-[24rem] relative bg-secondary rounded-lg'>
				<Image src={src} alt={alt} width={384} height={192} className="h-48 w-full"></Image>
				<p className='text-left pl-2 pt-2 text-2xl text-primary mb-6'>{title}</p>
				<p className='pl-2 text-text'>{description}</p>
			</div>
		</div>
	);
};

export default Card;
