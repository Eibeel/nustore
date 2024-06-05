import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import CategoriesMenu from './CategoriesMenu'
import Search from './Search'
import api from '@/services/api'

export default async function Header() {
	const categories = await api.getCategories()

	return (
		<header className='w-full h-auto bg-cyan-950 px-4'>
			<nav className='flex max-w-5xl py-4 mx-auto text-white font-medium text-sm'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full'>
					<div className='flex flex-row items-center gap-8 w-full'>
						<h1 className='font-bold text-xl flex-1'>
							<Link href='/'>Nustore</Link>
						</h1>
						<CategoriesMenu categories={categories} />
						<div className='flex flex-row gap-2'>
							<Link href='/cart'>
								<ShoppingCartIcon className='size-5' />
								<span className='hidden md:block'>Carrito</span>
							</Link>
						</div>
					</div>
					<Search name='search' placeholder='Buscar productos' />
				</div>
			</nav>
		</header>
	)
}
