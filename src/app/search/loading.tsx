import Section from '@/components/Section'
import ProductCardSkeleton from '@/components/skeletons/ProductCardSkeleton'
const ITERATOR = Array.from({ length: 10 })

export default function Loading() {
	return (
		<Section mt='mt-8'>
			<div className='h-5 bg-gray-200 rounded-lg w-48 mb-4 animate-puls' />
			<div
				role='status'
				className='grid grid-cols-2 md:grid-cols-5 gap-4 animate-pulse'
			>
				{ITERATOR.map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<ProductCardSkeleton key={index} />
				))}
				<span className='sr-only'>Loading...</span>
			</div>
		</Section>
	)
}
