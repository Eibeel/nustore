import type { Category, CategoryDetailsType } from './category'
import type { DescriptionType, ItemsType } from './item'
import type { ItemDetailsType } from './itemDetails'

const baseURL = 'https://api.mercadolibre.com'
const site_id = 'MCO'

const api = {
	getCategories: async (): Promise<Category[]> => {
		const resp = await fetch(`${baseURL}/sites/${site_id}/categories`)
		const categories: Category[] = await resp.json()

		return categories
	},
	getCategory: async (category_id: string): Promise<CategoryDetailsType> => {
		const resp = await fetch(`${baseURL}/categories/${category_id}`)
		const category: CategoryDetailsType = await resp.json()

		return category
	},
	getItemsByCategory: async (
		category_id: string,
		page?: number
	): Promise<ItemsType> => {
		const offset = page ? `&offset=${page}` : ''
		const resp = await fetch(
			`${baseURL}/sites/${site_id}/search?category=${category_id}&limit=20${offset}`
		)
		const items: ItemsType = await resp.json()

		return items
	},
	searchItemByQuery: async (
		query: string,
		page?: number
	): Promise<ItemsType> => {
		const offset = page ? `&offset=${page}` : ''
		const resp = await fetch(
			`${baseURL}/sites/${site_id}/search?q=${encodeURI(
				query
			)}&limit=20${offset}`
		)
		const item: ItemsType = await resp.json()

		return item
	},
	getDetailsItem: async (itemId: string): Promise<ItemDetailsType> => {
		const resp = await fetch(
			`${baseURL}/items/${itemId}?include_attributes=all`
		)
		const item: ItemDetailsType = await resp.json()

		return item
	},
	getDescriptionByItem: async (itemId: string): Promise<DescriptionType> => {
		const resp = await fetch(`${baseURL}/items/${itemId}/description`)
		const description: DescriptionType = await resp.json()

		return description
	}
}

export default api
