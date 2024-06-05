import type { ItemStore } from '@/store/shippingCart.store'
import currencyFormat from '@/utils/currencyFormat'
import Link from 'next/link'

export default function OrderSumary({ items }: { items: ItemStore[] }) {
	const total = items.reduce((acc, item) => acc + item.price, 0)
	const originalPrice = items.reduce(
		(acc, item) => acc + item.originalPrice || item.price,
		0
	)
	const savings = originalPrice - total

	return (
		<div className='mx-auto mt-6 flex-1 space-y-6 lg:mt-0'>
			<div className='space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm'>
				<span className='text-lg text-center font-semibold block'>
					Order summary
				</span>

				<div className='space-y-4'>
					<div className='space-y-2'>
						<dl className='flex items-center justify-between gap-2'>
							<dt className='text-sm font-normal text-gray-500'>Subtotal</dt>
							<dd className='text-sm font-semibold'>
								{currencyFormat(originalPrice)}
							</dd>
						</dl>

						<dl className='flex items-center justify-between gap-4'>
							<dt className='text-sm font-normal text-gray-500'>Ahorrado</dt>
							<dd className='text-sm font-semibold text-green-600'>
								{currencyFormat(savings)}
							</dd>
						</dl>
					</div>

					<dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 '>
						<dt className='text-base font-bold'>Total</dt>
						<dd className='text-base font-bold'>{currencyFormat(total)}</dd>
					</dl>
				</div>

				<div>
					<button
						disabled
						type='button'
						className='rounded w-full bg-cyan-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-cyan-950 transition-colors outline-none cursor-not-allowed'
					>
						Ir al checkout
					</button>
					<span className='text-xs text-gray-600 text-center block mt-1'>
						Este botón no está habilitado, esta aplicación es solo un demo.
					</span>
				</div>

				<div className='flex items-center justify-center gap-2'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500'
					>
						Continuar comprando
						<svg
							className='size-4'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
						>
							<path
								stroke='currentColor'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M19 12H5m14 0-4 4m4-4-4-4'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	)
}
