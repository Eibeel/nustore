'use client'
import { useState } from 'react'
import type { Attribute } from '@/services/itemDetails'
const attributesId = {
	GTIN: 'GTIN',
	ADDITIONAL_INFO_REQUIRED: 'ADDITIONAL_INFO_REQUIRED',
	CARRIER: 'CARRIER',
	HAZMAT_TRANSPORTABILITY: 'HAZMAT_TRANSPORTABILITY',
	ESIMS_NUMBER: 'ESIMS_NUMBER',
	MPN: 'MPN',
	CELLPHONE_PORTABILITY_LABEL: 'CELLPHONE_PORTABILITY_LABEL',
	ANATEL_HOMOLOGATION_NUMBER: 'ANATEL_HOMOLOGATION_NUMBER',
	EMPTY_GTIN_REASON: 'EMPTY_GTIN_REASON',
	BATTERIES_FEATURES: 'BATTERIES_FEATURES'
}

export default function ProductDetails({
	attributes
}: { attributes: Attribute[] }) {
	const [visibleCount, setVisibleCount] = useState(6)
	const relevantAttributes = attributes.filter(
		(attribute) => !(attribute.id in attributesId)
	)

	const handleVisibleCount = () => {
		if (visibleCount === 6) {
			setVisibleCount(relevantAttributes.length)
		}

		if (visibleCount === relevantAttributes.length) {
			setVisibleCount(6)
		}
	}

	return (
		<>
			<div className='mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4 overflow-hidden'>
				{relevantAttributes
					.slice(0, visibleCount)
					.map((attribute: Attribute) => (
						<div key={attribute.id} className='w-auto'>
							<dl className='mt-6 divide-y divide-gray-100 text-sm'>
								<div className='grid grid-cols-2 gap-3 md:gap-3 py-2'>
									<dt className='font-semibold'>{attribute.name}</dt>
									<dd className='text-gray-700 text-pretty truncate'>
										{attribute.value_name}
									</dd>
								</div>
							</dl>
						</div>
					))}
			</div>

			<button
				className='flex items-center justify-center gap-2 mt-10 bg-cyan-900 hover:bg-cyan-950 transition-colors w-fit mx-auto text-white font-medium px-6 py-2 rounded'
				type='button'
				onClick={handleVisibleCount}
			>
				{visibleCount === 6 ? 'Ver más' : 'Ver menos'}
			</button>
		</>
	)
}
