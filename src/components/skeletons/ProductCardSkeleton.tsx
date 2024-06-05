export default function ProductCardSkeleton() {
	return (
		<svg
			role='img'
			width='476'
			height='250'
			aria-labelledby='loading-aria'
			viewBox='0 0 476 250'
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
					<rect x='7' y='220' rx='4' ry='4' width='86' height='20' />
					<rect x='96' y='220' rx='4' ry='4' width='46' height='20' />
					<rect x='7' y='167' rx='4' ry='4' width='115' height='23' />
					<rect x='7' y='194' rx='4' ry='4' width='176' height='20' />
					<rect x='25' y='12' rx='4' ry='4' width='142' height='144' />
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
