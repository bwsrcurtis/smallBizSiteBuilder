import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='flex justify-between items-center px-12 py-1 relative bg-primary h-14'>
			<Link href='/' className='flex items-center space-x-2'>
				<Image src='logo.svg' alt="logo" width={50} height={50}></Image>
				<h1 className='text-white text-3xl'>Beachside Design</h1>
			</Link>
			<div className='space-x-10 hidden md:inline text-lg'>
				<Link href='#offerings' className="hover:underline">What We Offer</Link>
				<Link href='#work' className="hover:underline">Our Work</Link>
				<Link href='#aboutus' className="hover:underline">Who We Are</Link>

				<button className='w-30 z-10 hover:bg-background bg-secondary p-2 rounded-lg'>
					<Link href='/contact'>Build Now</Link>
				</button>

			</div>
		</header>
	)
}

export default Header