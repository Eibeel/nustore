'use client'
import { Gallery as GalleryPhotoSwipe, Item } from 'react-photoswipe-gallery'
import type { PhotoSwipeOptions } from 'photoswipe'
import type { Picture } from '@/services/itemDetails'
import GalleryWrapper from './GalleryWrapper'
import 'photoswipe/dist/photoswipe.css'

export default function Gallery({ pictures }: { pictures: Picture[] }) {
	const replaceFormatImage = (url: string) => url.replace('-O', '-F')
	const splitSize = (max_size: string) => max_size.split('x')
	const options: PhotoSwipeOptions = {
		showHideAnimationType: 'fade',
		padding: {
			top: 20,
			bottom: 20,
			left: 0,
			right: 0
		}
	}

	return (
		<GalleryPhotoSwipe options={options}>
			<div className='flex flex-col w-full gap-4 md:gap-2 md:grid md:max-h-[22rem]'>
				<GalleryWrapper classStyle='max-h-[22rem] md:row-span-3 md:col-start-2 md:row-start-1'>
					{pictures.slice(0, 1).map((image) => (
						<Item
							key={image.id}
							original={replaceFormatImage(image.url)}
							thumbnail={replaceFormatImage(image.url)}
							height={splitSize(image.max_size)[1]}
							width={splitSize(image.max_size)[0]}
						>
							{({ ref, open }) => (
								<div className={'relative rounded'}>
									<img
										alt={''}
										ref={ref}
										src={image.url.replace('-O', '-C')}
										onClick={open}
										className={
											'cursor-zoom-in object-contain rounded w-full max-h-[22rem]'
										}
									/>
								</div>
							)}
						</Item>
					))}
				</GalleryWrapper>

				<GalleryWrapper classStyle='flex flex-row w-full md:flex-col md:max-h-[22rem] md:w-fit overflow-x-auto md:overflow-hidden'>
					<div className='flex flex-row gap-2 md:flex-col'>
						{pictures.slice(1).map((image, index) => (
							<Item
								key={image.id}
								original={replaceFormatImage(image.url)}
								thumbnail={replaceFormatImage(image.url)}
								height={splitSize(image.max_size)[1]}
								width={splitSize(image.max_size)[0]}
							>
								{({ ref, open }) => (
									<div
										className={`relative border rounded size-20 md:${
											index > 3 ? 'hidden' : 'block'
										}`}
									>
										<img
											alt=''
											ref={ref}
											src={image.url.replace('-O', '-C')}
											onClick={open}
											className='cursor-zoom-in object-contain rounded'
										/>

										<div
											onClick={open}
											className={`absolute cursor-pointer rounded top-0 h-full w-full z-10 hidden ${
												pictures.length > 3 && index === 3
													? 'md:flex md:items-center md:justify-center backdrop-brightness-50'
													: 'hidden'
											}`}
										>
											<span className='text-white font-bold'>Ver más</span>
										</div>
									</div>
								)}
							</Item>
						))}
					</div>
				</GalleryWrapper>
			</div>
		</GalleryPhotoSwipe>
	)
}
