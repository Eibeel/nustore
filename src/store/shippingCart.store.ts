import { create } from 'zustand'

type ShippingCartStore = {
	item: ItemStore[]
	setItem: (item: ItemStore) => void
	removeItem: (id: string) => void
}

export interface ItemStore {
	id: string
	title: string
	price: number
	originalPrice: number
	thumbnail: string
	quantity: number
}

export const useShippingCartStore = create<ShippingCartStore>((set) => ({
	item: [],
	setItem: (item) =>
		set((state) => {
			const index = state.item.findIndex((i) => i.id === item.id)

			if (index >= 0) {
				const updatedItem = [...state.item]
				updatedItem[index] = {
					...updatedItem[index],
					price: updatedItem[index].price * updatedItem[index].quantity,
					originalPrice:
						updatedItem[index].originalPrice * state.item[index].quantity,
					quantity: updatedItem[index].quantity + 1
				}

				return { item: updatedItem }
			}

			return { item: [...state.item, { ...item, quantity: 1 }] }
		}),
	removeItem: (id) =>
		set((state) => ({ item: state.item.filter((item) => item.id !== id) }))
}))
