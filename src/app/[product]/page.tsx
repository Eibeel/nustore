import { Suspense } from 'react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import ProductDetails from '@/components/ProductDetails'
import Section from '@/components/Section'
import DetailsProductSkeleton from '@/components/skeletons/DetailsProductSkeleton'
import Gallery from '@/components/Gallery'
import AddProductButton from '@/components/AddProductButton'
import api from '@/services/api'
import formatSlug from '@/utils/generateSlug'
import percentage from '@/utils/percentage'
import currencyFormat from '@/utils/currencyFormat'

export async function generateMetadata({
	params: { product }
}: { params: { product: string } }) {
	return {
		title: `${formatSlug.slugToMetadataText(product)} - Nustore`
	}
}

export default async function ProductDetailsPage({
	searchParams: { id }
}: { searchParams: { id: string } }) {
	if (!id) return
	const { plain_text } = await api.getDescriptionByItem(id)
	const item = await api.getDetailsItem(id)

	return (
		<Section>
			<div className='max-w-4xl mx-auto'>
				<Suspense fallback={<DetailsProductSkeleton />}>
					<div className='flex flex-col md:grid md:grid-cols-2 justify-center gap-4 md:gap-12 pt-8 md:pt-14 md:px-4 lg:px-0'>
						<div className='lg:max-w-lg w-full md:min-w-96 mx-auto md:mx-0'>
							<Gallery pictures={item.pictures} />
						</div>

						<div className='lg:mt-2 md:min-w-96'>
							<div className='flex gap-3'>
								<span
									className={`text-xs font-semibold rounded px-2.5 py-0.5 w-fit ${
										item.condition === 'new'
											? 'bg-emerald-100 text-emerald-700'
											: 'bg-orange-100 text-orange-700'
									}`}
								>
									{item.condition === 'new' ? 'Nuevo' : 'Usado'}
								</span>
								<span
									className={`text-xs font-semibold rounded px-2.5 py-0.5 w-fit ${
										item.shipping.free_shipping
											? 'bg-emerald-100 text-emerald-700'
											: 'bg-orange-100 text-orange-700'
									}`}
								>
									{item.shipping.free_shipping
										? 'Envío gratis'
										: 'Envío no incluido'}
								</span>
							</div>

							<h2 className='text-xl font-bold sm:text-2xl text-pretty mt-2'>
								{item.title}
							</h2>
							<div className='mt-1 md:mt-3 flex items-center gap-2'>
								<span className='text-2xl font-extrabold sm:text-3xl'>
									{currencyFormat(item.price)} {item.currency_id}
									<span
										className={`${
											item.original_price ? 'inline-block' : 'hidden'
										} text-sm align-top font-semibold rounded text-emerald-700 pl-1`}
									>
										{percentage(item.original_price, item.price)}% OFF
									</span>
								</span>

								<div
									className={`${
										item.original_price ? 'inline-block' : 'hidden'
									}`}
								>
									<span className='line-through text-base text-gray-400 font-semibold'>
										{currencyFormat(item.original_price)}
									</span>
								</div>
							</div>

							<AddProductButton
								id={item.id}
								originalPrice={item.original_price}
								price={item.price}
								thumbnail={item.thumbnail}
								title={item.title}
								quantity={1}
							/>

							<div
								className={`text-sm text-gray-600 mt-4 inline-flex gap-1.5 ${
									item.warranty ? 'block' : 'hidden'
								}`}
							>
								<ShieldCheckIcon className='size-5' />
								<span>{item.warranty}</span>
							</div>
						</div>
					</div>
				</Suspense>
				<hr className='mb-8 mt-8 md:mt-14 mx-auto' />
				<h3 className='text-xl md:text-2xl font-semibold text-pretty'>
					Características
				</h3>
				<ProductDetails attributes={item.attributes} />

				<hr className='my-8 mx-auto' />
				<div className='mx-auto flex flex-col gap-2 md:gap-3'>
					<h3 className='text-xl md:text-2xl font-semibold text-pretty'>
						Descripción
					</h3>
					<p className='text-pretty'>{plain_text}</p>
				</div>
			</div>
		</Section>
	)
}
