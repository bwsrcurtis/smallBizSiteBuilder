import React from 'react';
import Card from './Card';

const Examples = () => {
	return (
		<div className='pt-8 pb-8 w-5/6 mt-8 mx-auto'>
			<p id='work' className='w-[calc(full-2rem)] text-center text-4xl lg:text-5xl mb-12'>
				<span className='text-primary'>Our </span>
				Templates</p>
			<div
				className='px-6 flex justify-evenly flex-wrap
			w-full my-0 mx-auto gap-8 place-items-center items-stretch'>
				<Card
					src="/portfolio.png"
					alt="Design Portfolio Template"
					title="Design Portfolio Template"
					description="Site for designers to display their work."
					url='https://portfolio-template-static.netlify.app/'>
				</Card>
				<Card
					src="/bakery.png"
					alt="Bakery/Restaurant Template"
					title="Bakery/Restaurant Template"
					description="Site for restaurants, bakeries, and coffee shops."
					url='https://chrisbakerytemplate.netlify.app/'>
				</Card>
				{/* <Card
					src="/pokedex.JPG"
					alt="Pokedex Site"
					title="Pokedex Site"
					description="Site uses the Pokemon API to display information on different pokemon."
					url='https://pokedex-qtje.onrender.com/'>
				</Card> */}
			</div>
		</div>
	);
};

export default Examples;
