'use client';

import { getIconName } from '@/lib/conts';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { MotionWrapper } from './MotionWrapper';

interface ServiceCardProps {
	title: string;
	description: string;
	icon: string;
	delay?: number;
	className?: string;
}

export default function ServiceCard({
	title,
	description,
	icon,
	delay = 0,
	className = '',
}: ServiceCardProps) {
	const iconName = getIconName(icon);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100 + (delay || 0) * 100);

		return () => clearTimeout(timer);
	}, [delay]);

	return (
		<MotionWrapper
			as='article'
			initial={{ opacity: 0, y: 20 }}
			animate={isVisible ? { opacity: 1, y: 0 } : {}}
			transition={{ delay, duration: 0.4 }}
			className={`group relative flex flex-col items-center text-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-200/80 to-orange-200/60 dark:from-gray-800/80 dark:to-gray-900/90 backdrop-blur-sm p-6 border-2 border-amber-700/80 dark:border-amber-800/30 shadow-lg shadow-amber-400/50 hover:shadow-xl transition-all duration-300 ${className}`}
		>
			{/* Efeito de brilho no hover */}
			<div className='absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-300 to-orange-400/0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10' />

			{/* Container do ícone */}
			<div className='mb-4 p-3 inline-flex rounded-full bg-gradient-to-br from-amber-300/30 to-orange-400/30 group-hover:from-amber-300/50 group-hover:to-orange-400/50 transition-all duration-300'>
				<Icon
					icon={iconName}
					className='text-4xl text-amber-700 dark:text-amber-300/90'
					aria-hidden='true'
				/>
			</div>

			<h3 className='text-xl font-bold text-amber-800 dark:text-amber-200 mb-2 group-hover:text-amber-900 dark:group-hover:text-amber-100 transition-colors'>
				{title}
			</h3>

			<p className='text-gray-700 dark:text-amber-100/80 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-amber-100 transition-colors'>
				{description}
			</p>

			{/* Efeito de borda animada */}
			<div className='absolute inset-0 border-2 border-transparent group-hover:border-amber-300/70 dark:group-hover:border-amber-600/50 rounded-2xl transition-all duration-300 pointer-events-none' />
		</MotionWrapper>
	);
}
