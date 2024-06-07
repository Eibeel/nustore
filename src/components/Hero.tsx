export default function Hero() {
	return (
		<div className='relative'>
			<img
				src='/images/shipping.webp'
				alt='Shipping banner'
				className='w-full h-96 object-cover object-right md:object-center rounded-md shadow-sm'
			/>
			<a
				target='_blank'
				rel='noreferrer'
				href='https://www.freepik.es/foto-gratis/representacion-cadena-suministro-vehiculos-cajas_33752560.htm'
				className='absolute bottom-2 right-4 text-sm text-gray-900 font-semibold'
			>
				Diseñado por <span className='text-blue-600'>Freepik</span>
			</a>
		</div>
	)
}
