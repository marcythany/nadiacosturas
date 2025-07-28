import AnimatedHero from '@/components/AnimatedHero';
import AnimatedService from '@/components/AnimatedService';
import FloatingActionButton from '@/components/FloatingActionButton';
import { CONTACT_INFO } from '@/lib/conts';
import { Metadata } from 'next';
import { Dancing_Script } from 'next/font/google';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Nadia Costuras',
	description: 'Reparos e ajustes com perfeição.',
	keywords: ['costura sob medida', 'ajustes de roupas', 'reparos de vestuário'],
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
};

const dancingScript = Dancing_Script({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dancing-script',
});

export default function Home() {
	return (
		<main
			className={`min-h-screen bg-gradient-to-b from-amber-700/70 to-orange-200/80 ${dancingScript.variable}`}
		>
			{/* Full-width container with frills */}
			<div className='relative w-full min-h-screen'>
				{/* Main content container */}
				<div className='pt-16 mx-auto '>
					<Suspense fallback={<div className='h-40' />}>
						<AnimatedHero />
					</Suspense>
				</div>
			</div>

			<Suspense>
				<FloatingActionButton contactInfo={CONTACT_INFO} />
			</Suspense>

			<Suspense>
				<AnimatedService />
			</Suspense>
		</main>
	);
}
