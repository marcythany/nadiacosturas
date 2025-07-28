// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: '/private/',
			},
		],
		sitemap: 'https://nadiacosturas.vercel.app/sitemap.xml',
	};
}
