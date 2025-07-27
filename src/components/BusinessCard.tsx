// src/components/BusinessCard.tsx
'use client';
import type { ContactItem, ContactType } from '@/types'; // Import shared types
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import { formatPhone } from './ContactFormatter';
import BrandIcon from './ui/BrandsIcons';

export default function BusinessCard({
	flipOnHover = true,
	qrData = 'https://wa.me/5551999259394',
	contactInfo,
}: {
	flipOnHover?: boolean;
	qrData?: string;
	contactInfo: ContactItem[];
}) {
	const [isFlipped, setIsFlipped] = useState(false);

	const flipHandlers = flipOnHover
		? {
				onHoverStart: () => setIsFlipped(true),
				onHoverEnd: () => setIsFlipped(false),
		  }
		: {
				onClick: () => setIsFlipped(!isFlipped),
		  };

	const renderIcon = (type: ContactType) => {
		const icons = {
			phone: <Phone className='w-5 h-5' />,
			email: <Mail className='w-5 h-5' />,
			instagram: <BrandIcon name='instagram' className='w-5 h-5' />,
			whatsapp: <BrandIcon name='whatsapp' className='w-5 h-5' />,
			facebook: <BrandIcon name='facebook' className='w-5 h-5' />,
		};

		return icons[type] || null;
	};

	return (
		<div className='perspective-1000 w-full max-w-md h-[400px]'>
			<motion.div
				{...flipHandlers}
				className='relative w-full h-full preserve-3d transition-all duration-500 cursor-pointer'
				animate={{ rotateY: isFlipped ? 180 : 0 }}
				initial={false}
				whileHover={flipOnHover ? undefined : { scale: 1.05 }}
				tabIndex={0}
				aria-label={
					isFlipped
						? 'Cartão de visitas - Informações de contato'
						: 'Cartão de visitas - Apresentação'
				}
			>
				{/* Front Side */}
				<div className='absolute w-full h-full backface-hidden bg-gradient-to-br from-[#FBBF24] to-[#F97316] rounded-2xl p-8 flex flex-col justify-center items-center shadow-lg'>
					<motion.div
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<div className='bg-white/20 p-6 rounded-full mb-6'>
							<div className='bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16' />
						</div>
						<h1 className='text-4xl font-bold text-white font-dancing-script text-center'>
							Nadia Sauthier
						</h1>
						<p className='text-white/90 text-center mt-2'>
							Reparos e ajustes sob medida
						</p>
					</motion.div>
				</div>

				{/* Back Side */}
				<div className='absolute w-full h-full backface-hidden bg-white rounded-2xl p-8 flex flex-col rotateY-180 shadow-lg'>
					<h2 className='text-2xl font-bold text-center mb-6 text-[#D97706] font-dancing-script'>
						Contato
					</h2>

					<div className='space-y-4 mb-8'>
						{contactInfo.map((item, index) => (
							<div key={index} className='flex items-center gap-3'>
								<div className='bg-amber-100 p-2 rounded-full text-amber-700'>
									{renderIcon(item.type)}
								</div>
								<span className='text-gray-700'>
									{item.type === 'phone' ? formatPhone(item.value) : item.value}
								</span>
							</div>
						))}
					</div>

					<motion.div
						className='mx-auto mt-auto'
						animate={{
							scale: [1, 1.05, 1],
							transition: { repeat: Infinity, duration: 2 },
						}}
						aria-label='QR Code para contato via WhatsApp'
					>
						<QRCode
							value={qrData}
							size={120}
							bgColor='transparent'
							fgColor='#D97706'
						/>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
