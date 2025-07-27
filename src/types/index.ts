// src/types/index.ts
import { Ruler, Scissors } from 'lucide-react';

// Define the icon map
const iconMap = {
	Ruler: Ruler,
	Scissors: Scissors,
} as const;

export type IconName = keyof typeof iconMap;

export interface ServiceItem {
	title: string;
	description: string;
	icon: IconName;
}

// Add ContactType to match BrandIcon names
export type ContactType =
	| 'phone'
	| 'email'
	| 'instagram'
	| 'whatsapp'
	| 'facebook';

export interface ContactItem {
	type: ContactType;
	value: string;
}

export { iconMap };
