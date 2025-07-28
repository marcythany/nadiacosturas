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
		<html
			lang='pt-BR'
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body>
				<div className='bg-pattern' />
				{children}
			</body>
		</html>
	);
}
