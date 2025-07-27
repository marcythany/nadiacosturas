'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ImageGallery = dynamic(() => import('@/components/ImageGallery'), {
	ssr: false,
	loading: () => <div className='h-64 bg-gray-100 rounded-xl animate-pulse' />,
});

export default function GallerySection() {
	return (
		<section className='my-16'>
			<h2 className='text-3xl font-bold text-center mb-12 text-[#D97706]'>
				Trabalhos Recentes
			</h2>
			<Suspense
				fallback={<div className='h-64 bg-gray-100 rounded-xl animate-pulse' />}
			>
				<ImageGallery images={[]} />
			</Suspense>
		</section>
	);
}
