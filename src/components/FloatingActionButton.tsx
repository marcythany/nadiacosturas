'use client';

import DynamicIcon from '@/components/ui/Icon';
import type { ContactItem } from '@/types';
import { MotionWrapper } from './MotionWrapper'; // ajuste o caminho

interface FloatingActionButtonProps {
	contactInfo: ContactItem[];
}

export default function FloatingActionButton({
	contactInfo,
}: FloatingActionButtonProps) {
	const phoneContact = contactInfo.find((item) => item.type === 'phone');

	if (!phoneContact) return null;

	return (
		<MotionWrapper
			as='a'
			href={`tel:${phoneContact.value}`}
			className='fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full sunset-gradient flex items-center justify-center shadow-lg'
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			animate={{
				boxShadow: [
					'0 10px 25px -5px rgba(249, 115, 22, 0.5)',
					'0 20px 40px -5px rgba(249, 115, 22, 0.7)',
					'0 10px 25px -5px rgba(249, 115, 22, 0.5)',
				],
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
			}}
			aria-label='Contato telefônico'
		>
			<DynamicIcon icon='lucide:phone' className='text-white' size={32} />
		</MotionWrapper>
	);
}
