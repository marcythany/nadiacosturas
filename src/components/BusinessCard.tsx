'use client';

import { motion } from 'Framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import QRCode from 'react-qr-code';

export function BusinessCard() {
	return (
		<div className='w-64 h-[360px] rounded-lg shadow-md overflow-hidden flex flex-col'>
			{/* Frente */}
			<div className='flex-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] flex flex-col items-center justify-center p-4'>
				<Image
					src='/logo-needle-heart.svg'
					alt='Logo Nádia Costura'
					width={80}
					height={80}
					priority
				/>
				<h2 className='mt-4 text-2xl font-handwriting text-white'>
					Nádia Costura
				</h2>
				<p className='text-white'>Seamstress &amp; Clothing Repairs</p>
			</div>

			{/* Verso */}
			<div className='flex-1 bg-[var(--color-background)] p-4 flex flex-col justify-between'>
				<div className='flex justify-center mb-4'>
					<QRCode size={96} value='https://nadia-costuras.com' />
				</div>
				<ul className='space-y-2 text-[var(--color-foreground)]'>
					<li className='flex items-center'>
						<Phone className='size-5 mr-2' /> +55 12 3456‑7890
					</li>
					<li className='flex items-center'>
						<Mail className='size-5 mr-2' /> nadia@example.com
					</li>
					<li className='flex items-center'>
						<Instagram className='size-5 mr-2' /> @nadia.costura
					</li>
				</ul>
				<motion.button
					whileHover={{
						scale: 1.05,
						backgroundColor: 'var(--color-secondary-dark)',
					}}
					className='mt-4 px-4 py-2 bg-[var(--color-accent)] text-white rounded'
				>
					Book your custom fitting today!
				</motion.button>
			</div>
		</div>
	);
}
