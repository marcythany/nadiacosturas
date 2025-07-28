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
			className={`service-card ${className}`}
		>
			<div className='service-card__bg' />
			<div className='service-card__content'>
				<div className='service-card__icon'>
					<Icon icon={iconName} />
				</div>
				<h3 className='service-card__title'>{title}</h3>
				<p className='service-card__desc'>{description}</p>
			</div>
			<div className='service-card__border' />
		</MotionWrapper>
	);
}
