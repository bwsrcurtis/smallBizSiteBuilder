import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='flex justify-between items-center px-12 py-1 bg-teal'>
			<Link href='/' className='flex items-center space-x-2'>
				<Image src='logo.svg' alt="logo" width={50} height={50}></Image>
				<h1 className='text-white text-3xl'>Eastwise Design</h1>
			</Link>
			<h1 className='text-white'>Header</h1>
		</header>
	)
}

export default Header