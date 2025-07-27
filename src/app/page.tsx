import { BusinessCard } from '@/components/BusinessCard';
import { ContactForm } from '@/components/ContactForm';
import { Gallery } from '@/components/Gallery';
import { HeroSection } from '@/components/HeroSection';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
	// Example photos data
	const photos = [
		{ url: '/images/photo1.jpg', alt: 'Photo 1', width: 800, height: 600 },
		{ url: '/images/photo2.jpg', alt: 'Photo 2', width: 800, height: 600 },
		// Add more photo objects as needed
	];

	// Example quotes data
	const quotes = [
		{
			author: 'Jane Doe',
			text: 'Great service and beautiful work!',
		},
		{
			author: 'John Smith',
			text: 'Highly recommend Nadia for any tailoring needs.',
		},
		// Add more quote objects as needed
	];

	return (
		<main className='flex flex-col gap-24'>
			<HeroSection />
			<Services />
			<Gallery photos={photos} />
			<Testimonials quotes={quotes} />
			<ContactForm />
			<footer className='py-16 bg-[var(--color-background)] flex justify-center'>
				<BusinessCard />
			</footer>
		</main>
	);
}
