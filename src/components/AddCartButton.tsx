'use client'
import { Toaster, toast } from 'sonner'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import {
	useShippingCartStore,
	type ItemStore
} from '@/store/shippingCart.store'

export default function AddCartButton({
	id,
	originalPrice,
	price,
	thumbnail,
	title
}: ItemStore) {
	const addItemToCart = useShippingCartStore((state) => state.setItem)

	const handleSetStore = () => {
		addItemToCart({
			id,
			originalPrice,
			price,
			thumbnail,
			title,
			quantity: 1
		})
		toast('Producto agregado al carrito')
	}

	return (
		<>
			<button
				type='button'
				className='flex items-center justify-center gap-2 mt-4 bg-cyan-900 hover:bg-cyan-950 transition hover:scale-[1.01] text-white font-medium px-6 py-2 rounded'
				onClick={handleSetStore}
			>
				<ShoppingCartIcon className='size-5' />
				Agregar al carrito
			</button>
			<Toaster position='bottom-left' />
		</>
	)
}
