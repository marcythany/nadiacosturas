'use client';

import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/lib/conts';
import { motion } from 'framer-motion';

export default function AnimatedService() {
	return (
		<div className='relative w-full bg-amber-700/70 pt-16 pb-20 overflow-hidden'>
			{/* Top frill animado: “costura” da esquerda → direita */}
			<motion.div
				className='absolute top-0 left-0 right-0 h-12 bg-repeat-x'
				style={{
					backgroundImage: 'url(/pattern.svg)',
					backgroundSize: '200px 100%',
					transform: 'scaleY(-1)',
				}}
				animate={{
					backgroundPositionX: ['-200px', '0px', '-200px'],
				}}
				transition={{
					duration: 4,
					ease: 'linear',
					repeat: Infinity,
				}}
			/>

			{/* Conteúdo */}
			<div className='max-w-7xl mx-auto px-4'>
				<motion.h2
					className='text-4xl font-bold text-center mb-12 text-amber-300'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					Serviços
				</motion.h2>
				<div className='flex justify-center'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl'>
						{SERVICES.slice(0, 2).map((service, i) => (
							<ServiceCard
								key={service.title}
								title={service.title}
								description={service.description}
								icon={service.icon}
								delay={i * 0.1}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Bottom frill animado: “costura” da direita → esquerda */}
			<motion.div
				className='absolute bottom-0 left-0 right-0 h-12 bg-repeat-x'
				style={{
					backgroundImage: 'url(/pattern.svg)',
					backgroundSize: '200px 100%',
				}}
				animate={{
					backgroundPositionX: ['200px', '0px', '200px'],
				}}
				transition={{
					duration: 4,
					ease: 'linear',
					repeat: Infinity,
				}}
			/>
		</div>
	);
}
