import React from 'react'
import Image from 'next/image'

const Card = ({ src, title }) => {
	return (
		<div className='h-96 w-80 bg-secondary rounded-lg'>
			<Image src={src} width={320} height={160}></Image>
			<p className='text-left pl-2 pt-2 text-xl text-primary'>{title}</p>
		</div>
	)
}

export default Card