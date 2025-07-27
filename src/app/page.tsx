// src/app/page.tsx
import { BusinessCard } from '@/components/BusinessCard';
import { ContactForm } from '@/components/ContactForm';
import { Gallery } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { motion } from 'Framer-motion';

export default function HomePage() {
	// Substitua por seus dados reais
	const photos = [
		{ url: '/gallery/before1.jpg', width: 800, height: 600, alt: 'Antes 1' },
		{ url: '/gallery/after1.jpg', width: 800, height: 600, alt: 'Depois 1' },
		{ url: '/gallery/before2.jpg', width: 800, height: 600, alt: 'Antes 2' },
		{ url: '/gallery/after2.jpg', width: 800, height: 600, alt: 'Depois 2' },
	];

	const quotes = [
		{ text: 'Excelente trabalho, recomendo demais!', author: 'Maria S.' },
		{ text: 'Agilidade e perfeição nos ajustes.', author: 'João P.' },
	];

	return (
		<main className='flex flex-col gap-24'>
			{/* Hero */}
			<section
				id='hero'
				className='h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-center px-4'
			>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-5xl font-handwriting text-[var(--color-primary)] mb-6'
				>
					Bem-vinda à Nádia Costuras
				</motion.h1>
				<motion.div whileHover={{ scale: 1.05 }} className='inline-block'>
					<Button>Agende agora</Button>
				</motion.div>
			</section>

			{/* Services */}
			<Services />

			{/* Gallery */}
			<Gallery photos={photos} />

			{/* Testimonials */}
			<Testimonials quotes={quotes} />

			{/* Contact Form */}
			<ContactForm />

			{/* Footer com Virtual Card */}
			<footer className='py-16 bg-[var(--color-background)] flex justify-center'>
				<BusinessCard />
			</footer>
		</main>
	);
}
