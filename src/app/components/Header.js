import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='flex justify-between items-center px-12 py-1 bg-primary'>
			<Link href='/' className='flex items-center space-x-2'>
				<Image src='logo.svg' alt="logo" width={50} height={50}></Image>
				<h1 className='text-white text-3xl'>Beachside Design</h1>
			</Link>
			<div className='space-x-10 hidden md:inline text-lg'>
				<Link href='#work' className="hover:underline">Our Work</Link>
				<Link href='#aboutus' className="hover:underline">Who We Are</Link>
				<Link href='/contact'>
					<button className='w-30 hover:bg-background bg-secondary p-2 rounded-lg'>Build Now</button>
				</Link>
			</div>
		</header>
	)
}

export default Header