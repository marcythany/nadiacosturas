'use client';

import { getIconName } from '@/lib/conts';
import { Icon } from '@iconify/react';
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

	return (
		<MotionWrapper
			as='div'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.4 }}
			className={`relative p-6 bg-white/30 backdrop-blur-lg border border-amber-200/50 shadow-lg hover:shadow-2xl transition-all rounded-[32px] overflow-hidden h-full flex flex-col justify-between group ${className}`}
		>
			<div className='absolute -inset-4 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 opacity-70 blur-3xl rounded-[48px] group-hover:opacity-90 transition-opacity duration-300' />
			<div className='relative flex flex-col items-center text-center z-10'>
				<div className='mb-4 text-5xl text-yellow-800 transition-transform duration-300 group-hover:scale-110'>
					<Icon icon={iconName} />
				</div>
				<h3 className='mb-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-yellow-800 to-orange-800'>
					{title}
				</h3>
				<p className='text-gray-900'>{description}</p>
			</div>
			<div className='absolute inset-0 border-2 border-dashed border-amber-300/30 rounded-[32px] pointer-events-none' />
		</MotionWrapper>
	);
}
