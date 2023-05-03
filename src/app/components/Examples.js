import React from 'react'
import Card from './Card'

const Examples = () => {
	return (
		<>
			<p id='work' className='w-full text-center text-5xl pt-6 pb-12'>Our Work</p>
			<div className='px-12 grid grid-cols-3 w-full my-0 mx-auto gap-6 place-items-center'>
				<Card src="/photosite.JPG" title="Photography Site"></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>

			</div>
		</>
	)
}

export default Examples