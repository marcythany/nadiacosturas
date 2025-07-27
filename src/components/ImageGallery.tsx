'use client';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

export default function ImageGallery({
	images,
}: {
	images: { src: string; alt: string }[];
}) {
	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: { perView: 1.2, spacing: 16 },
	});

	return (
		<div ref={sliderRef} className='keen-slider'>
			{images.map((img, index) => (
				<div key={index} className='keen-slider__slide'>
					<Image
						src={img.src}
						alt={img.alt}
						width={600}
						height={400}
						sizes='(max-width: 640px) 90vw, 600px'
						className='rounded-xl object-cover h-full'
						placeholder='blur'
						blurDataURL='data:image/svg+xml;base64,...'
					/>
				</div>
			))}
		</div>
	);
}
