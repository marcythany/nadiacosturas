'use client';

import { getIconName } from '@/lib/conts';
import { Icon, loadIcons, type IconifyIcon } from '@iconify/react';
import { memo } from 'react';

const PRELOAD: string[] = [
	'game-icons:measure-tape',
	'game-icons:sewing-needle',
	'simple-icons:whatsapp',
	'simple-icons:instagram',
	'simple-icons:facebook',
];

loadIcons(PRELOAD);

interface DynamicIconProps {
	icon: string | IconifyIcon;
	className?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
	inline?: boolean;
	ariaHidden?: boolean;
}

const sizeMap = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 } as const;

function DynamicIcon({
	icon,
	className = '',
	size = 'md',
	inline = false,
	ariaHidden = true,
}: DynamicIconProps) {
	const iconSize = typeof size === 'number' ? size : sizeMap[size];
	const iconName = typeof icon === 'string' ? getIconName(icon) : icon;

	return (
		<Icon
			icon={iconName as string | IconifyIcon}
			className={`${
				inline ? 'inline-block align-middle' : 'block'
			} ${className}`}
			width={iconSize}
			height={iconSize}
			aria-hidden={ariaHidden}
		/>
	);
}

export default memo(DynamicIcon);
