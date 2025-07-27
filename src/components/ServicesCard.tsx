// src/components/ServiceCard.tsx
'use client';
import { iconMap, type IconName } from '@/types';
import { motion } from 'framer-motion';

interface ServiceCardProps {
	title: string;
	description: string;
	icon: IconName;
	delayIndex?: number;
}

export default function ServiceCard({
	title,
	description,
	icon,
	delayIndex = 0,
}: ServiceCardProps) {
	const IconComponent = iconMap[icon];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: delayIndex * 0.1,
				duration: 0.5,
				type: 'spring',
				stiffness: 400,
			}}
			className='bg-white rounded-xl p-6 shadow-md border border-amber-100'
			whileHover={{
				scale: 1.03,
				boxShadow: '0 10px 25px -5px rgba(251, 191, 36, 0.3)',
			}}
		>
			<div className='bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-amber-700 mb-4'>
				{IconComponent && <IconComponent className='w-6 h-6' />}
			</div>
			<h3 className='text-xl font-bold mb-2 text-gray-800'>{title}</h3>
			<p className='text-gray-600'>{description}</p>
		</motion.div>
	);
}
