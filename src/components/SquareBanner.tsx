export default function SquareBanner() {
	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-4 max-h-96 place-content-center'>
			<img
				className='row-span-2 h-96 w-full object-cover rounded-lg shadow-sm'
				src='https://placehold.co/400'
				alt=''
			/>
			<img
				className='h-full w-full object-cover rounded-lg shadow-sm'
				src='https://placehold.co/600x400'
				alt=''
			/>
			<img
				className='col-start-2 h-full w-full object-cover rounded-lg shadow-sm'
				src='https://placehold.co/600x400'
				alt=''
			/>
		</div>
	)
}
