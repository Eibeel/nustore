'use client'
import OrderSumary from '@/components/OrderSumary'
import Section from '@/components/Section'
import ShoppingCard from '@/components/ShoppingCard'
import { useCartStore } from '@/store/useCartStore'

export default function CartPage() {
	const productsStore = useCartStore((state) => state.products)

	return (
		<Section mt='mt-8'>
			<div className='mx-auto'>
				<h2 className='text-xl font-semibold text-gray-900 sm:text-2xl indent-4'>
					{productsStore.length === 0 ? 'El carrito está vacío.' : 'Carrito'}
				</h2>

				<div className='mt-6 md:gap-4 lg:flex lg:items-start'>
					<div className='flex flex-col gap-2 lg:max-w-screen-md'>
						{productsStore.map((product) => (
							<ShoppingCard key={product.id} product={product} />
						))}
					</div>
					{productsStore.length > 0 && <OrderSumary products={productsStore} />}
				</div>
			</div>
		</Section>
	)
}
