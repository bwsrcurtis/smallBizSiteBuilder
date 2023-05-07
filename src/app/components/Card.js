import React from 'react';
import Image from 'next/image';

const Card = ({ src, alt, title, description }) => {

	return (
		<div className='relative w-5/6 lg:w-[20rem] group cursor-pointer'>
			<div className='bg-primary mx-4 w-full
			group-hover:bg-primary transition group-hover:translate-x-4
			h-full absolute top-[-.5rem] left-[-1rem] rounded-lg'></div>
			<div className='h-full mx-4 w-full relative bg-background rounded-lg
			  transition group-hover:-translate-y-4 group-hover:scale-105 border-background border-8'>
				<Image src={src} alt={alt} width={320} height={192}
					className="h-48 w-full rounded-t-lg object-cover object-top">

				</Image>
				<div className='flex-col content-between justify-between'>
					<p className='min-h-[6rem] text-left pl-2 pt-2 text-2xl w-full mb-2 text-primary'>{title}</p>
					<p className='pl-2 text-text w-full place-self-end'>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
