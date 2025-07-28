import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
});

export const metadata = {
	title: 'Nadia Costuras',
	description: 'Cartão Virtual para contato com a costureira nadia!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className='antialiased text-gray-900'>
				<div className="fixed top-0 left-0 w-full h-full bg-[url('/zig-zag.svg')] bg-repeat bg-[length:40px_12px] opacity-30 -z-50 pointer-events-none" />
				{children}
			</body>
		</html>
	);
}
