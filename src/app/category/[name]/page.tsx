import { Suspense } from 'react'
import type { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import Section from '@/components/Section'
import api from '@/services/api'
import Pagination from '@/components/Pagination'
import formatSlug from '@/utils/generateSlug'
import Loading from '../loading'

export async function generateMetadata({
	params: { name }
}: { params: { name: string } }): Promise<Metadata> {
	return {
		title: `${formatSlug.slugToMetadataText(name)} - Nustore`
	}
}

export default async function CategoryPage({
	params: { name },
	searchParams: { id, page }
}: { params: { name: string }; searchParams: { id: string; page: string } }) {
	const { results: itemsByCategory, paging } = await api.getItemsByCategory(
		id,
		page ? Number(page) : 0
	)

	return (
		<Suspense fallback={<Loading />}>
			<Section
				mt='mt-8'
				subtitle={`Te encuentras en la categoria de ${formatSlug.slugToText(
					name
				)}`}
			>
				<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
					{itemsByCategory.map((item) => (
						<ProductCard
							key={item.id}
							id={item.id}
							alt={item.title}
							condition={item.condition}
							price={item.price}
							free_shipping={item.shipping.free_shipping}
							thumbnail={item.thumbnail}
							title={item.title}
						/>
					))}
				</div>
				<Pagination offset={paging.offset} />
			</Section>
		</Suspense>
	)
}
