import { create } from 'zustand'

export interface Product {
	id: string
	title: string
	price: number
	originalPrice: number
	thumbnail: string
	quantity: number
}

interface CartStore {
	products: Product[]
	addProduct: (product: Product) => void
	removeProduct: (id: string) => void
	increaseProduct: (id: string) => void
	clearCart: () => void
	removeAllProduct: (id: string) => void
}

export const useCartStore = create<CartStore>((set) => ({
	products: [],
	addProduct(product) {
		set((state) => {
			const index = state.products.findIndex((item) => item.id === product.id)

			if (index >= 0) {
				const newCart = structuredClone(state.products)
				newCart[index].quantity += 1
				newCart[index].originalPrice += product.originalPrice || 0
				newCart[index].price += product.price

				return { products: newCart }
			}

			return {
				products: [
					...state.products,
					{
						...product,
						quantity: 1
					}
				]
			}
		})
	},
	removeProduct(id) {
		set((state) => {
			const index = state.products.findIndex((item) => item.id === id)

			if (index >= 0) {
				const newCart = structuredClone(state.products)
				const product = newCart[index]
				newCart[index].quantity -= 1
				product.originalPrice -= product.originalPrice / (product.quantity + 1)
				product.price -= product.price / (product.quantity + 1)

				if (newCart[index].quantity === 0) {
					newCart.splice(index, 1)
				}

				return { products: newCart }
			}

			return {}
		})
	},
	increaseProduct(id) {
		set((state) => {
			const index = state.products.findIndex((item) => item.id === id)

			if (index >= 0) {
				const newCart = structuredClone(state.products)
				const existingProduct = newCart[index]
				existingProduct.originalPrice += existingProduct.originalPrice
					? existingProduct.originalPrice / existingProduct.quantity
					: 0
				existingProduct.price +=
					existingProduct.price / existingProduct.quantity
				existingProduct.quantity += 1

				return { products: newCart }
			}

			return {}
		})
	},
	removeAllProduct(id) {
		set((state) => ({
			products: state.products.filter((product) => product.id !== id)
		}))
	},
	clearCart() {
		set({ products: [] })
	}
}))
