'use client';

import DynamicIcon from '@/components/ui/Icon';
import { CONTACT_INFO } from '@/lib/conts';
import { MotionWrapper } from './MotionWrapper'; // ajuste o caminho

export default function AnimatedHero() {
	return (
		<MotionWrapper
			as='section'
			className='relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-visible'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<div className='absolute inset-0 flex justify-center -z-10 overflow-visible'>
				{[...Array(5)].map((_, i) => (
					<MotionWrapper
						key={i}
						as='div'
						className='absolute rounded-full sunset-gradient opacity-20 w-[clamp(150px,20vw,256px)] h-[clamp(150px,20vw,256px)]'
						animate={{ scale: [1, 1.5, 1], rotate: [0, 360] }}
						transition={{
							duration: 15 + i * 3,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>

			<MotionWrapper
				as='div'
				className='mb-6'
				animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
				transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
			>
				<DynamicIcon
					icon='game-icons:sewing-machine'
					className='text-amber-300/55'
					size={80}
				/>
			</MotionWrapper>

			<MotionWrapper
				as='h1'
				className='text-5xl md:text-6xl font-extrabold mb-4 text-sunset-gradient'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
			>
				Nadia Costuras
			</MotionWrapper>

			<MotionWrapper
				as='p'
				className='max-w-xl text-lg md:text-xl text-gray-800 mb-8'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
			>
				Reparos, ajustes e costura sob medida com perfeição, carinho e aquele
				toque artesanal que faz cada peça única. Transforme suas roupas em novas
				histórias.
			</MotionWrapper>

			<MotionWrapper
				as='div'
				className='flex flex-col sm:flex-row items-center gap-6'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.4 }}
			>
				{CONTACT_INFO.map((info) => {
					const isWhats = info.type === 'whatsapp';
					const label = info.type.charAt(0).toUpperCase() + info.type.slice(1);
					const href = isWhats
						? `https://wa.me/${info.value.replace(/\D/g, '')}`
						: /^\w+:\/\//.test(info.value)
						? info.value
						: `https://${info.value}`;

					return (
						<a
							key={info.type}
							href={href}
							className={`flex items-center gap-2 ${
								isWhats
									? 'bg-primary text-white px-4 py-2 rounded-full shadow-lg'
									: 'text-gray-700 hover:text-primary transition'
							}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<DynamicIcon
								icon={info.icon}
								size={isWhats ? 28 : 24}
								className={isWhats ? 'text-white' : 'text-primary'}
							/>
							<span className={isWhats ? 'font-semibold' : ''}>{label}</span>
						</a>
					);
				})}
			</MotionWrapper>
		</MotionWrapper>
	);
}
