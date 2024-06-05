import formatSlug from '@/utils/generateSlug'
import {
	MusicalNoteIcon,
	TagIcon,
	HomeIcon,
	TvIcon,
	ComputerDesktopIcon,
	DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const CATEGORIES = [
	{
		name: 'Computación',
		id: 'MCO1648',
		icon: <ComputerDesktopIcon className='size-5 text-white' />
	},
	{
		name: 'Celulares y Teléfonos',
		id: 'MCO1051',
		icon: <DevicePhoneMobileIcon className='size-5 text-white' />
	},
	{
		name: 'Electrónica, Audio y Video',
		id: 'MCO1000',
		icon: <MusicalNoteIcon className='size-5 text-white' />
	},
	{
		name: 'Electrodomésticos',
		id: 'MCO5726',
		icon: <TvIcon className='size-5 text-white' />
	},
	{
		name: 'Hogar y Muebles',
		id: 'MCO1574',
		icon: <HomeIcon className='size-5 text-white' />
	},
	{
		name: 'Ropa y Accesorios',
		id: 'MCO1430',
		icon: <TagIcon className='size-5 text-white' />
	}
]

export default function GridCategories() {
	return (
		<div className='grid grid-cols-3 md:grid-cols-6 gap-4 mt-8'>
			{CATEGORIES.map((category) => (
				<div key={category.name} className='flex flex-col items-center gap-1'>
					<Link
						href={{
							pathname: `/category/${formatSlug.generateSlug(category.name)}`,
							query: { id: category.id, page: String(0) }
						}}
						className='bg-cyan-900 hover:bg-cyan-950 transition-colors p-3 rounded-lg shadow-sm'
					>
						{category.icon}
					</Link>
					<span className='font-semibold text-sm text-center'>
						{category.name}
					</span>
				</div>
			))}
		</div>
	)
}
