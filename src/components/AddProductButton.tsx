'use client'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { type Product, useCartStore } from '@/store/useCartStore'

export default function AddProductButton({
	id,
	originalPrice,
	price,
	thumbnail,
	title
}: Product) {
	const router = useRouter()
	const addProductCart = useCartStore((state) => state.addProduct)

	const handleAddProduct = () => {
		addProductCart({
			id,
			originalPrice,
			price,
			quantity: 1,
			thumbnail,
			title
		})
		toast('Producto agregado al carrito', {
			action: {
				label: 'Ver carrito',
				onClick: () => router.push('/cart')
			}
		})
	}

	return (
		<>
			<button
				type='button'
				className='cursor-pointer flex items-center justify-center gap-2 mt-4 bg-cyan-900 hover:bg-cyan-950 transition text-white font-medium px-6 py-2 rounded'
				onClick={handleAddProduct}
			>
				<ShoppingCartIcon className='size-5' />
				Agregar al carrito
			</button>
			<Toaster position='bottom-left' />
		</>
	)
}
