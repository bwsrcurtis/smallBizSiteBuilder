'use client';
import Image from 'next/image.js';
import { useState } from 'react';
import Link from 'next/link.js';

const Card = ({ src, alt, title, description, url }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<div className='relative w-5/6 lg:w-[20rem] group'>
				<div className='bg-primary mx-4 w-full hidden lg:flex
			group-hover:bg-primary transition group-hover:translate-x-4
			h-full absolute top-[-.5rem] left-[-1rem] rounded-lg'></div>
				<div className='h-full mx-4 w-full relative bg-background rounded-lg
			  transition group-hover:-translate-y-4 group-hover:scale-105 border-background border-8'>
					<Image src={src} alt={alt} width={320} height={192}
						className="h-48 w-full rounded-t-lg object-cover object-top cursor-pointer"
						onClick={() => setShowModal(!showModal)}>

					</Image>
					<div className='flex-col content-between justify-between'>
						<Link href={url} >
							<p
								className='min-h-[6rem] text-left pl-2 pt-2 text-2xl w-full mb-2 text-primary
							hover:underline'>
								{title}
							</p>
						</Link>
						<p className='pl-2 text-text w-full place-self-end'>{description}</p>
					</div>
				</div>
			</div>
			{showModal ?
				(<div className="flex justify-center items-center overflow-x-hidden
		cursor-pointer overflow-y-auto fixed inset-0 z-50 focus:outline-none
		 bg-text/50 backdrop-blur-sm"
					onClick={() => setShowModal(!showModal)}>
					<div className="relative w-auto mx-auto max-w-4xl">
						<div className="border-8 border-background shadow-lg rounded-lg
						relative flex flex-col outline-none focus:outline-none">
							<div className="relative items-start justify-between">
								<Image className="object-cover w-full"
									src={src} alt={alt} width={320} height={192}></Image>

							</div>
						</div>

					</div>
				</div>) : null}
		</>
	);
};

export default Card;
