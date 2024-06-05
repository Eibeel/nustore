export default function DetailsProductSkeleton() {
	return (
		<svg
			role='img'
			width='538'
			height='297'
			aria-labelledby='loading-aria'
			viewBox='0 0 538 297'
			preserveAspectRatio='none'
		>
			<title id='loading-aria'>Loading...</title>
			<rect
				x='0'
				y='0'
				width='100%'
				height='100%'
				clipPath='url(#clipPath)'
				style={{ fill: 'url("#fill")' }}
			/>
			<defs>
				<clipPath id='clipPath'>
					<rect x='448' y='123' rx='4' ry='4' width='32' height='12' />
					<rect x='312' y='51' rx='4' ry='4' width='216' height='18' />
					<rect x='312' y='123' rx='4' ry='4' width='132' height='20' />
					<rect x='13' y='32' rx='4' ry='4' width='266' height='273' />
					<rect x='312' y='72' rx='4' ry='4' width='133' height='18' />
					<rect x='312' y='156' rx='4' ry='4' width='139' height='26' />
					<rect x='312' y='194' rx='4' ry='4' width='154' height='12' />
					<rect x='312' y='32' rx='4' ry='4' width='30' height='12' />
					<rect x='349' y='32' rx='4' ry='4' width='58' height='12' />
				</clipPath>
				<linearGradient id='fill'>
					<stop offset='0.599964' stopColor='#f3f3f3' stopOpacity='1'>
						<animate
							attributeName='offset'
							values='-2; -2; 1'
							keyTimes='0; 0.25; 1'
							dur='2s'
							repeatCount='indefinite'
						/>
					</stop>
					<stop offset='1.59996' stopColor='#ecebeb' stopOpacity='1'>
						<animate
							attributeName='offset'
							values='-1; -1; 2'
							keyTimes='0; 0.25; 1'
							dur='2s'
							repeatCount='indefinite'
						/>
					</stop>
					<stop offset='2.59996' stopColor='#f3f3f3' stopOpacity='1'>
						<animate
							attributeName='offset'
							values='0; 0; 3'
							keyTimes='0; 0.25; 1'
							dur='2s'
							repeatCount='indefinite'
						/>
					</stop>
				</linearGradient>
			</defs>
		</svg>
	)
}
