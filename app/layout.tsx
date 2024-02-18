import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Akash Patel',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div
					className="max-w-8xl
         m-auto py-4  px-4 sm:px-5 md:px-10 "
				>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
