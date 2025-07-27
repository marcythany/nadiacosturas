'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export function HeroSection() {
	return (
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
	);
}
