import type React from 'react'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nustore',
	description:
		'Explora una amplia selección de productos online. Electrónica, moda, hogar y más. Descubre y compara productos en Nustore y disfruta de una experiencia de navegación única.',
	icons: '/favicon.svg'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es'>
			<body
				className={`flex min-h-screen flex-col ${onest.className} text-gray-800`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
