import React from 'react'
import Card from './Card'

const Examples = () => {
	return (
		<div className='bg-secondary pb-8 w-3/4 my-0 mx-auto'>
			<p id='work' className='w-full text-center text-5xl pt-6 pb-12'>Our Work</p>
			<div className='px-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full my-0 mx-auto gap-6 place-items-center'>
				<Card src="/photosite.JPG" alt="Photography Site" title="Photography Site" description="Photography site built to showcase a local photographer's work."></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>

			</div>
		</div>
	)
}

export default Examples