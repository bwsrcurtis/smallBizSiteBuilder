import React from 'react'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className="relative w-screen h-[860px]">
			<div className='-z-10'>
				<Image src="/Hero.jpg" fill={true} alt="Beach Image" className="filter saturate-[.25]"></Image>
			</div>
			<div className='relative flex flex-col items-center justify-center h-[860px] space-y-2'>
				<h1 className='text-5xl md:text-7xl lg:text-8xl text-primary translate-y-[-113px]'>Beachside Design</h1>
				<p className='text-xl md:text-4xl text-white translate-y-[-113px]'>We Help Small Businesses Get Online</p>
			</div>
		</div>
	)
}

export default Hero