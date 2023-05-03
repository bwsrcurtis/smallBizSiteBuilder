import React from 'react'
import Image from 'next/image'

const Card = ({ src, alt, title, description }) => {
	return (
		<div className='h-96 w-80 bg-secondary rounded-lg'>
			<Image src={src} alt={alt} width={320} height={160} className="h-40"></Image>
			<p className='text-left pl-2 pt-2 text-xl text-primary mb-6'>{title}</p>
			<p className='pl-2 text-text'>{description}</p>
		</div>
	)
}

export default Card