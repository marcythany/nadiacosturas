// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://nadiacosturas.vercel.app/',
			lastModified: new Date(),
		},
		{
			url: 'https://nadiacosturas.vercel.app/contato',
			lastModified: new Date(),
		},
		{
			url: 'https://nadiacosturas.vercel.app/servicos',
			lastModified: new Date(),
		},
		{
			url: 'https://nadiacosturas.vercel.app/quem-somos',
			lastModified: new Date(),
		},
	];
}
