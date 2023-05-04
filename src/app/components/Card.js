import React from 'react';
import Image from 'next/image';

const Card = ({ src, alt, title, description }) => {

	return (
		<div className='relative w-full xl:w-[20rem]'>
			<div className='bg-primary/75 mx-auto invisible lg:visible xl:w-[20rem] h-96 w-[calc(full-2rem)] absolute top-[-.5rem] left-[-1rem] rounded-lg'></div>
			<div className='h-96 mx-auto xl:w-[20rem] relative bg-secondary rounded-lg'>
				<Image src={src} alt={alt} width={320} height={192} className="h-48 w-full rounded-t-lg"></Image>
				<p className='text-left pl-2 pt-2 text-2xl text-primary mb-6'>{title}</p>
				<p className='pl-2 text-text'>{description}</p>
			</div>
		</div>
	);
};

export default Card;
