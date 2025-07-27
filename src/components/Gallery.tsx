'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

interface Photo {
	url: string;
	width: number;
	height: number;
	alt: string;
}

export function Gallery({ photos }: { photos: Photo[] }) {
	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: { perView: 1, spacing: 16 },
	});

	return (
		<section id='gallery' className='py-16'>
			<div ref={sliderRef} className='keen-slider px-4'>
				{photos.map((photo, idx) => (
					<div key={idx} className='keen-slider__slide'>
						<Image
							src={photo.url}
							alt={photo.alt}
							width={photo.width}
							height={photo.height}
							className='rounded-lg'
							priority={idx === 0}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
