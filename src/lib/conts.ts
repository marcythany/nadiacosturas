import type { ContactItem, IconName } from '@/types';

export const SERVICES: {
	title: string;
	description: string;
	icon: IconName;
}[] = [
	{
		title: 'Consertos',
		description:
			'Conserto rápido e profissional de roupas com garantia de qualidade',
		icon: 'Ruler',
	},
	{
		title: 'Ajustes',
		description: 'Personalização de roupas para melhor caimento e conforto',
		icon: 'Scissors',
	},
];

export const CONTACT_INFO: ContactItem[] = [
	{ type: 'phone', value: '51999259394' },
	{ type: 'instagram', value: '@nadiasauthier' },
	{ type: 'email', value: 'contato@nadiacosturas.com' },
];
