'use client';

interface Quote {
	text: string;
	author: string;
}

export function Testimonials({ quotes }: { quotes: Quote[] }) {
	return (
		<section id='testimonials' className='py-16 bg-[var(--color-background)]'>
			<div className='max-w-3xl mx-auto space-y-8 px-4'>
				{quotes.map((q, i) => (
					<blockquote
						key={i}
						className='p-6 bg-[var(--color-card-bg)] text-white rounded-lg shadow-lg'
					>
						“{q.text}”
						<footer className='mt-2 text-sm opacity-80'>— {q.author}</footer>
					</blockquote>
				))}
			</div>
		</section>
	);
}
