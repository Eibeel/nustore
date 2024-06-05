import { Suspense } from 'react'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import Section from '@/components/Section'
import api from '@/services/api'
import Loading from './loading'

export async function generateMetadata({
	searchParams: { q }
}: { searchParams: { q: string } }) {
	return {
		title: `Resultados de "${q}" - Nustore`
	}
}

export default async function SearchResultPage({
	searchParams: { q, page }
}: { searchParams: { q: string; page: string } }) {
	const { results: productsBySearch, paging } = await api.searchItemByQuery(
		q,
		page ? Number(page) : 0
	)

	return (
		<Section mt='mt-8' subtitle={`Resultados de la búsqueda de "${q}"`}>
			<Suspense fallback={<Loading />}>
				<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
					{productsBySearch.map((item) => (
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
			</Suspense>
			<Pagination offset={paging.offset} />
		</Section>
	)
}
