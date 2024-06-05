'use client'
import OrderSumary from '@/components/OrderSumary'
import Section from '@/components/Section'
import ShoppingCard from '@/components/ShoppingCard'
import { useShippingCartStore } from '@/store/shippingCart.store'

export default function CartPage() {
	const itemsStore = useShippingCartStore((state) => state.item)
	console.log(itemsStore)

	return (
		<Section mt='mt-8'>
			<div className='mx-auto'>
				<h2 className='text-xl font-semibold text-gray-900 sm:text-2xl indent-4'>
					{itemsStore.length === 0 ? 'El carrito está vacío.' : 'Carrito'}
				</h2>

				<div className='mt-6 md:gap-4 lg:flex lg:items-start'>
					<div className='flex flex-col gap-2 lg:max-w-screen-md'>
						{itemsStore.map((item) => (
							<ShoppingCard key={item.id} item={item} />
						))}
					</div>
					{itemsStore.length ? <OrderSumary items={itemsStore} /> : ''}
				</div>
			</div>
		</Section>
	)
}
