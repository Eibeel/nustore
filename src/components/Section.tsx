import type React from 'react'

export default function Section({
	children,
	subtitle,
	mt
}: { children: React.ReactNode; subtitle?: string; mt?: string }) {
	return (
		<section className={`max-w-5xl container mx-auto ${mt} px-4 md:px-0`}>
			{subtitle && (
				<h2 className='text-xl font-bold text-gray-600 md:ml-2 mb-4'>
					{subtitle}
				</h2>
			)}
			{children}
		</section>
	)
}
