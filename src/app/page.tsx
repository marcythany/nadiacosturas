import BusinessCard from '@/components/BusinessCard';
import ServiceCard from '@/components/ServicesCard';
import { CONTACT_INFO, SERVICES } from '@/lib/conts';
import dynamic from 'next/dynamic';
import { Dancing_Script } from 'next/font/google';
import { Suspense } from 'react';

// Dynamic imports for code splitting
const ImageGallery = dynamic(() => import('@/components/ImageGallery'), {
	ssr: false,
	loading: () => <div className='bg-gray-100 rounded-xl h-64 animate-pulse' />,
});

// Font loading with swap
const dancingScript = Dancing_Script({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dancing-script',
});

export default function Home() {
	return (
		<main
			className={`min-h-screen bg-[#fefaf5] p-4 md:p-8 ${dancingScript.variable}`}
		>
			<div className='max-w-6xl mx-auto'>
				{/* Hero Section */}
				<section className='text-center py-12'>
					<h1 className='text-4xl md:text-5xl font-bold text-[#EA580C] mb-4 font-dancing-script'>
						Nadia Costuras
					</h1>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Reparos, ajustes e costura sob medida com perfeição e carinho
					</p>
				</section>

				{/* Business Card */}
				<section className='flex justify-center my-12'>
					<BusinessCard contactInfo={CONTACT_INFO} />
				</section>

				{/* Services */}
				<section className='my-16'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#D97706]'>
						Serviços
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{SERVICES.map((service, index) => (
							<ServiceCard
								key={index}
								title={service.title}
								description={service.description}
								icon={service.icon}
								delayIndex={index}
							/>
						))}
					</div>
				</section>

				{/* Gallery */}
				<section className='my-16'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#D97706]'>
						Trabalhos Recentes
					</h2>
					<Suspense
						fallback={
							<div className='h-64 bg-gray-100 rounded-xl animate-pulse' />
						}
					>
						<ImageGallery images={[]} /> {/* Populate with actual images */}
					</Suspense>
				</section>

				{/* About */}
				<section className='my-16 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm'>
					<h2 className='text-3xl font-bold text-center mb-6 text-[#D97706]'>
						Sobre Mim
					</h2>
					<div className='prose prose-amber'>
						<p>
							Olá! Sou Nadia Sauthier, profissional especializada em reparos e
							ajustes sob encomenda. Com mais de 10 anos de experiência,
							transformo peças de roupa dando nova vida a tecidos e garantindo o
							caimento perfeito.
						</p>
						<p>
							Minhas cores favoritas são amarelo e laranja, que refletem minha
							personalidade hospitaleira e alegre. Sou conhecida pelo trabalho
							dedicado e atenção aos detalhes.
						</p>
						<p>
							Quando não estou costurando, adoro passar tempo com minha família
							e cuidar dos animais.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
