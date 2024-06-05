import currencyFormat from '@/utils/currencyFormat'
import formatSlug from '@/utils/generateSlug'
import Link from 'next/link'

interface ProductProps {
	id: string
	thumbnail: string
	alt: string
	condition: string
	title: string
	free_shipping: boolean
	price: number
}

export default function ProductCard({
	id,
	alt,
	condition,
	price,
	free_shipping,
	thumbnail,
	title
}: ProductProps) {
	return (
		// <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
		<div className='bg-white rounded-lg shadow-sm h-fit w-auto min-h-64 flex flex-col gap-4 px-2 py-3 hover:scale-[1.02] transition-all'>
			<Link
				href={{
					pathname: `/${formatSlug.generateSlug(title)}`,
					query: { id }
				}}
			>
				<div className='flex justify-center'>
					<img
						title={title}
						src={thumbnail.replace('-I', '-C')}
						alt={alt}
						className='object-contain max-h-36 md:min-w-36 md:min-h-36 rounded-md'
					/>
				</div>
				<div className='flex flex-col gap-2 mt-2'>
					<div className='flex flex-col'>
						<span className='font-semibold text-lg'>
							{currencyFormat(price)}
						</span>
						<span title={title} className='font-medium text-sm truncate'>
							{title}
						</span>
					</div>
					<div className='flex gap-1'>
						<span
							className={`text-xs font-medium rounded px-2.5 py-0.5 w-fit bg-emerald-100 text-emerald-700 ${
								free_shipping ? 'block' : 'hidden'
							}`}
						>
							{free_shipping ? 'Envío gratis' : 'Envío no incluido'}
						</span>
						<span className='text-xs font-medium whitespace-nowrap rounded w-fit bg-emerald-100 px-2.5 py-0.5 text-emerald-700'>
							{condition}
						</span>
					</div>
				</div>
			</Link>
		</div>
	)
}
