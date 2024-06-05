import Features from '@/components/Features'
import GridCategories from '@/components/GridCategories'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Section from '@/components/Section'
import SquareBanner from '@/components/SquareBanner'

export default async function Home() {
	return (
		<div>
			<main>
				<Section mt='mt-4'>
					<Hero />
					<Features />
				</Section>

				<Section mt='mt-12'>
					<SquareBanner />
				</Section>

				{/* <Section subtitle='Buscado recientemente...' mt='mt-8'>
					<ProductCard />
				</Section> */}

				<Section mt='mt-12' subtitle='Categorias más buscadas...'>
					<GridCategories />
				</Section>

				<Section mt='mt-20'>
					<Newsletter />
				</Section>
			</main>
		</div>
	)
}
