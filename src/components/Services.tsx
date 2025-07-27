'use client';

import { motion } from 'Framer-motion';

const services = [
	{
		id: '1',
		icon: '🧵',
		title: 'Consertos',
		desc: 'Reparos rápidos e precisos',
	},
	{
		id: '2',
		icon: '✂️',
		title: 'Costura Customizada',
		desc: 'Peças exclusivas sob medida',
	},
	{
		id: '3',
		icon: '🔧',
		title: 'Ajustes Rápidos',
		desc: 'Pequenos ajustes no mesmo dia',
	},
];

export function Services() {
	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.15 },
		}),
	};

	return (
		<section id='services' className='py-16 bg-[var(--color-background)]'>
			<div className='max-w-4xl mx-auto grid gap-8 md:grid-cols-3 px-4'>
				{services.map((svc, i) => (
					<motion.div
						key={svc.id}
						custom={i}
						initial='hidden'
						whileInView='visible'
						variants={variants}
						className='bg-[var(--color-card-bg)] text-white p-6 rounded-lg shadow'
					>
						<div className='text-4xl mb-4'>{svc.icon}</div>
						<h3 className='text-xl font-medium mb-2'>{svc.title}</h3>
						<p>{svc.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
