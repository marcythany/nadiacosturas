// Define valid icon names
export const gameIcons = [
	'game-icons:sewing-needle',
	'game-icons:measure-tape',
	'game-icons:scissors',
	'game-icons:ruler',
	'game-icons:thread',
	'game-icons:sewing-machine',
	'game-icons:button',
] as const;

export const brandIcons = [
	'simple-icons:whatsapp',
	'simple-icons:instagram',
	'simple-icons:facebook',
] as const;

export const lucideIcons = [
	'lucide:ruler',
	'lucide:scissors',
	'lucide:needle',
] as const;

// Create union types
export type GameIconName = (typeof gameIcons)[number];
export type BrandIconName = (typeof brandIcons)[number];
export type LucideIconName = (typeof lucideIcons)[number];

export type IconName = GameIconName | BrandIconName | LucideIconName;

// Type guard function
export function isIconName(value: string): value is IconName {
	const allIcons: readonly string[] = [
		...gameIcons,
		...brandIcons,
		...lucideIcons,
	];
	return allIcons.includes(value);
}

// Service item type
export interface ServiceItem {
	title: string;
	description: string;
	icon: IconName;
}

// Contact types
export type ContactType =
	| 'phone'
	| 'email'
	| 'instagram'
	| 'whatsapp'
	| 'facebook';

export interface ContactItem {
	type: ContactType;
	value: string;
	icon: BrandIconName;
}
