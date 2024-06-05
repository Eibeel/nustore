export default function Newsletter() {
	return (
		<div className='p-8 md:p-12 lg:px-16 lg:py-24 bg-gray-50 rounded-lg'>
			<div className='mx-auto max-w-lg text-center'>
				<h2 className='text-2xl font-bold md:text-3xl'>
					Suscribete a nuestro boletín para recibir ofertas exclusivas
				</h2>

				<p className='hidden text-gray-500 sm:mt-4 sm:block text-pretty'>
					No enviamos spam. Prometemos enviarte solo las mejores ofertas y
					descuentos.
				</p>
			</div>

			<div className='mx-auto mt-8 max-w-xl'>
				<form action='#' className='sm:flex sm:gap-4'>
					<div className='sm:flex-1'>
						<input
							type='email'
							placeholder='Email address'
							className='w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring-2 focus:ring-yellow-400'
						/>
					</div>

					<button
						type='button'
						className='group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:mt-0 sm:w-auto'
					>
						<span className='text-sm font-medium'> Sign Up </span>
					</button>
				</form>
			</div>
		</div>
	)
}
