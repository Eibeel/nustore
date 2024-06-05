'use client'
import Link from 'next/link'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import {
	useShippingCartStore,
	type ItemStore
} from '@/store/shippingCart.store'
import currencyFormat from '@/utils/currencyFormat'
import formatSlug from '@/utils/generateSlug'

export default function ShoppingCard({ item }: { item: ItemStore }) {
	const removeItem = useShippingCartStore((state) => state.removeItem)

	return (
		<div className='mx-auto w-full'>
			<div className='space-y-6'>
				<div className='rounded border border-gray-200  p-4 shadow-sm md:p-6'>
					<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
						<img
							className='h-20 w-20'
							src={item.thumbnail.replace('-I', '-C')}
							alt={item.title}
						/>

						<label htmlFor='counter-input' className='sr-only'>
							Choose quantity:
						</label>
						<div className='flex items-center justify-between md:order-3 md:justify-end'>
							<div className='flex items-center'>
								<button
									type='button'
									id='decrement-button'
									data-input-counter-decrement='counter-input'
									className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100'
								>
									<MinusIcon className='size-4' />
								</button>
								<span
									id='counter-input'
									data-input-counter
									className='px-3 shrink-0 text-center text-sm font-medium'
								>
									{item.quantity}
								</span>
								<button
									type='button'
									id='increment-button'
									data-input-counter-increment='counter-input'
									className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100'
								>
									<PlusIcon className='size-4' />
								</button>
							</div>
							<div className='text-end md:order-4 md:w-32'>
								<p className='text-base font-bold text-gray-900'>
									{currencyFormat(item.price)}
								</p>
							</div>
						</div>

						<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
							<Link
								href={{
									pathname: `/${formatSlug.generateSlug(item.title)}`,
									query: { id: item.id }
								}}
								className='text-base font-medium text-gray-900 hover:underline'
							>
								{item.title}
							</Link>

							<div className='flex items-center gap-4'>
								<button
									type='button'
									className='inline-flex items-center text-sm font-medium text-red-600 hover:underline'
									onClick={() => removeItem(item.id)}
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
