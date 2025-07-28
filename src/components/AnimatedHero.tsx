'use client';
import DynamicIcon from '@/components/ui/Icon';
import { CONTACT_INFO } from '@/lib/conts';
import { MotionWrapper } from './MotionWrapper';
export default function AnimatedHero() {
	return (
		<MotionWrapper
			as='section'
			className='relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center overflow-visible'
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
					className='text-amber-400/80 '
					size={80}
					aria-label='Máquina de costura'
				/>
			</MotionWrapper>
			<MotionWrapper
				as='h1'
				className='text-4xl md:text-5xl font-bold mb-4 text-gradient bg-gradient-to-r from-amber-300 via-orange-300/80 to-amber-300 bg-clip-text text-transparent'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
			>
				Nadia Costuras
			</MotionWrapper>

			{/* Container de conteúdo com efeito glass */}
			<div className='glass bg-amber-50/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-4xl w-full mx-auto border border-amber-200/50 dark:border-amber-800/30 shadow-lg text-center'>
				<div className='flex flex-col items-center'>
					<MotionWrapper
						as='p'
						className='max-w-xl text-base md:text-lg text-gray-700 dark:text-amber-100 mb-8 leading-relaxed text-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						Reparos e ajustes com perfeição, carinho e aquele toque artesanal
						que faz cada peça única. Transforme suas roupas em novas histórias.
					</MotionWrapper>
				</div>

				{/* Botões de contato */}
				<MotionWrapper
					as='div'
					className='flex flex-wrap justify-center gap-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7, duration: 0.4 }}
				>
					{CONTACT_INFO.map((info) => {
						const isWhats = info.type === 'whatsapp';
						const label =
							info.type.charAt(0).toUpperCase() + info.type.slice(1);
						const href = isWhats
							? `https://wa.me/${info.value.replace(/\D/g, '')}`
							: /^\w+:\/\//.test(info.value)
							? info.value
							: `https://${info.value}`;
						return (
							<a
								key={info.type}
								href={href}
								className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
									isWhats
										? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-md hover:shadow-lg'
										: 'bg-[#fde0a0]/90 dark:bg-gray-800 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700/50 hover:bg-amber-100/80 dark:hover:bg-amber-900/30'
								}`}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={`Contato via ${label}`}
							>
								<DynamicIcon
									icon={info.icon}
									size={24}
									className={
										isWhats
											? 'text-white'
											: 'text-amber-600 dark:text-amber-400'
									}
								/>
								<span
									className={`font-medium ${isWhats ? '' : 'hidden sm:inline'}`}
								>
									{label}
								</span>
							</a>
						);
					})}
				</MotionWrapper>
			</div>
		</MotionWrapper>
	);
}
