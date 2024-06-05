'use client'
import { useState } from 'react'
import Link from 'next/link'
import formatSlug from '@/utils/generateSlug'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import type { Category } from '@/services/category'

export default function CategoriesMenu({
	categories
}: { categories: Category[] }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const closeDropdown = () => {
		setIsOpen(false)
	}

	return (
		<div className='relative inline-block'>
			<button
				type='button'
				className='flex items-center gap-1 text-white mx-auto p-1'
				onClick={toggleDropdown}
			>
				<Bars3Icon className='size-5 md:hidden' />
				<span className='hidden md:block font-medium text-sm'>Categorias</span>
				<ChevronDownIcon className='size-5 hidden md:block' />
			</button>

			{isOpen && (
				<div className='origin-top-right z-50 absolute right-0 mt-3 w-52 max-h-96 md:max-h-[640px] overflow-y-auto rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
					<ul
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='options-menu'
					>
						{categories.map((category) => (
							<li key={category.id}>
								<Link
									href={{
										pathname: `/category/${formatSlug.generateSlug(
											category.name
										)}`,
										query: { id: category.id, page: String(0) }
									}}
									className='block px-4 py-2 text-sm text-gray-800 hover:bg-slate-100'
									onClick={closeDropdown}
								>
									{category.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
