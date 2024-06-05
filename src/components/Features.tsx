import {
	ArrowPathIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	ShieldCheckIcon,
	TruckIcon
} from '@heroicons/react/24/outline'

const FEATURES = [
	{
		title: 'Shipping',
		icon: <TruckIcon className='size-7 text-gray-800' />,
		description: 'Envíos a todo el país'
	},
	{
		title: 'Transparent',
		icon: <ArrowPathIcon className='size-7 text-gray-800' />,
		description: 'Sin costos ocultos'
	},
	{
		title: 'Secure',
		icon: <ShieldCheckIcon className='size-7 text-gray-800' />,
		description: 'Utilizamos las últimas medidas de seguridad.'
	},
	{
		title: 'Support',
		icon: <ChatBubbleOvalLeftEllipsisIcon className='size-7 text-gray-800' />,
		description: 'El soporte está disponible 24/7'
	}
]

export default function Features() {
	return (
		<div className='flex md:flex-row justify-between items-center mt-12'>
			{FEATURES.map((feature) => (
				<div
					key={feature.title}
					className='flex flex-col md:flex-row items-center gap-2 space-x-2'
				>
					{feature.icon}
					<div className='flex flex-col'>
						<span className='font-semibold text-sm'>{feature.title}</span>
						<p className='text-xs text-gray-600 hidden md:block'>
							{feature.description}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}
