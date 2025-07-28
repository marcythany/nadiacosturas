import AnimatedHero from '@/components/AnimatedHero';
import AnimatedService from '@/components/AnimatedService';
import FloatingActionButton from '@/components/FloatingActionButton';
import { CONTACT_INFO } from '@/lib/conts';
import { Metadata } from 'next';
import { Dancing_Script } from 'next/font/google';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Nadia Costuras | Reparos e ajustes com perfeição',
	description:
		'Serviços profissionais de costura, ajustes e reparos de roupas com qualidade e perfeição.',
	keywords: [
		'costura sob medida',
		'ajustes de roupas',
		'reparos de vestuário',
		'costureira profissional',
		'reforma de roupas',
	],
	authors: [{ name: 'Marcel Sobral' }],
	creator: 'Nadia Costuras',
	publisher: 'Nadia Costuras',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		title: 'Nadia Costuras',
		description: 'Reparos e ajustes com perfeição',
		url: 'https://nadiacosturas.com',
		siteName: 'Nadia Costuras',
		images: [
			{
				url: 'https://nadiacosturas.com/opengraph-image.png',
				width: 1200,
				height: 630,
			},
		],
		locale: 'pt_BR',
		type: 'website',
	},
};

const dancingScript = Dancing_Script({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dancing-script',
	weight: ['400', '500', '600', '700'],
});

export default function Home() {
	return (
		<main
			className={`min-h-screen bg-gradient-to-b from-amber-700/70 to-orange-200/80 ${dancingScript.variable}`}
		>
			{/* Conteúdo principal */}
			<div className='relative z-10 min-h-screen flex flex-col'>
				<div className='pt-16 mx-auto w-full max-w-7xl px-4'>
					<Suspense
						fallback={
							<div className='h-40 flex items-center justify-center'>
								<div className='animate-pulse bg-amber-200 rounded-full w-24 h-24' />
							</div>
						}
					>
						<AnimatedHero />
					</Suspense>
				</div>

				<div className='flex-1 pt-8'>
					<Suspense
						fallback={
							<div className='max-w-4xl mx-auto px-4'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
									{[1, 2, 3].map((item) => (
										<div
											key={item}
											className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-amber-200 animate-pulse'
										>
											<div className='h-6 bg-amber-100 rounded w-3/4 mb-4' />
											<div className='h-4 bg-amber-100 rounded w-full mb-2' />
											<div className='h-4 bg-amber-100 rounded w-5/6 mb-2' />
											<div className='h-4 bg-amber-100 rounded w-4/6 mb-4' />
											<div className='h-10 bg-amber-300 rounded-lg w-32' />
										</div>
									))}
								</div>
							</div>
						}
					>
						<AnimatedService />
					</Suspense>
				</div>
			</div>

			<Suspense>
				<FloatingActionButton contactInfo={CONTACT_INFO} />
			</Suspense>
		</main>
	);
}
