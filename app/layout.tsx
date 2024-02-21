import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Contact from '@/components/contact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Akash Patel',
	description:
		'Hi, I am Akash Patel. I am a Full-stack Developer And Freelancer Who Enjoy Turning Problems And Ideas Into Software',
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
					<Contact />
				</div>
			</body>
		</html>
	);
}
