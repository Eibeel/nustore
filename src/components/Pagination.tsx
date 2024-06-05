'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Pagination({ offset: page }: { offset: number }) {
	const pathame = usePathname()
	const searchParams = useSearchParams()
	const currentPage = Number(searchParams.get('page')) || 0

	const handleSearch = (page: number | string): string => {
		const params = new URLSearchParams(searchParams)
		params.set('page', page.toString())
		return `${decodeURI(pathame)}?${params.toString()}`
	}

	return (
		<div className='inline-flex items-center justify-center gap-1 mx-auto w-full mt-12'>
			<Link
				href={handleSearch(currentPage - 1)}
				title='Página anterior'
				className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
					page === 0 ? 'pointer-events-none bg-slate-100' : 'cursor-pointer'
				}`}
			>
				<span className='sr-only'>Página anterior</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-3 w-3'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<title>Página anterior</title>
					<path
						fillRule='evenodd'
						d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
						clipRule='evenodd'
					/>
				</svg>
			</Link>

			<span className='h-8 px-5 flex items-center rounded border border-gray-100 bg-white text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'>
				{page + 1}
			</span>

			<Link
				href={handleSearch(currentPage + 1)}
				title='Siguiente página'
				className='inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180'
			>
				<span className='sr-only'>Siguiente página</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-3 w-3'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<title>Siguiente página</title>
					<path
						fillRule='evenodd'
						d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
						clipRule='evenodd'
					/>
				</svg>
			</Link>
		</div>
	)
}
