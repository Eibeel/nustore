export default function SquareBanner() {
	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-4 max-h-96 place-content-center'>
			<div className='relative h-fit row-span-2'>
				<img
					className='h-96 w-full object-cover object-right md:object-center rounded-md shadow-sm'
					src='/images/home.webp'
					alt='Banner de Muebles'
					loading='lazy'
				/>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.freepik.es/foto-gratis/vista-interior-habitacion-muebles-espacio-copiar_58556713.htm'
					className='absolute bottom-2 left-2 md:left-4 text-sm text-white font-semibold'
				>
					Diseñado por Freepik
				</a>
			</div>

			<div className='relative'>
				<img
					className='h-full w-full object-cover object-right md:object-bottom rounded-md shadow-sm'
					src='/images/tech.webp'
					alt='Banner de tecnologia'
					loading='lazy'
				/>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.freepik.es/foto-gratis/copie-espacio-auriculares-portatil-concepto-aire_10357395.htm'
					className='absolute bottom-2 left-2 md:left-4 text-sm text-white md:text-gray-900 font-semibold'
				>
					Diseñado por Freepik
				</a>
			</div>

			<div className='relative col-start-2'>
				<img
					className='h-full w-full object-cover rounded-md shadow-sm'
					src='/images/ropa.webp'
					alt='Banner de ropa'
					loading='lazy'
				/>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.freepik.es/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_27828403.htm'
					className='absolute bottom-2 left-2 md:left-4 text-sm text-white font-semibold'
				>
					Diseñado por Freepik
				</a>
			</div>
		</div>
	)
}
