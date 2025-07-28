import type { ContactItem, IconName, ServiceItem } from '@/types';
import { brandIcons, gameIcons, lucideIcons } from '@/types';

export function getIconName(name: string): IconName {
	const allIcons = [...gameIcons, ...brandIcons, ...lucideIcons] as const;

	if (allIcons.includes(name as IconName)) {
		return name as IconName;
	}
	console.warn(`Invalid icon name: ${name}. Using fallback.`);
	return 'game-icons:sewing-needle';
}

export const SERVICES: ServiceItem[] = [
	{
		title: 'Reparos',
		description: 'Conserto de roupas com qualidade e precisão',
		icon: 'game-icons:sewing-needle',
	},
	{
		title: 'Ajustes',
		description: 'Ajustes de roupas para caimento perfeito',
		icon: 'game-icons:measure-tape',
	},
];

export const CONTACT_INFO: ContactItem[] = [
	{
		type: 'whatsapp',
		value: '+55 51 9 9925-9394',
		icon: 'simple-icons:whatsapp',
	},
	{
		type: 'instagram',
		value: 'https://www.instagram.com/nadiasauthier/',
		icon: 'simple-icons:instagram',
	},
	{
		type: 'facebook',
		value: 'https://www.facebook.com/profile.php?id=61577986590000',
		icon: 'simple-icons:facebook',
	},
];
