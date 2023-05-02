import React from 'react'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className="relative w-screen h-5/6">
			<div className='-z-10'>
				<Image src="/Hero.jpg" fill={true} alt="Beach Image" className="filter saturate-[.25]"></Image>
			</div>
			<div className='relative flex flex-col items-center justify-center h-5/6 space-y-6'>
				<h1 className='text-4xl md:text-7xl lg:text-8xl text-primary'>Beachside Design</h1>
				<p className='text-lg md:text-4xl text-white'>We Help Small Businesses Get Online</p>
			</div>
		</div>
	)
}

export default Hero