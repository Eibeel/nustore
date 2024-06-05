export default function percentage(
	original_price: number,
	price: number
): number {
	return Math.floor(((original_price - price) / original_price) * 100)
}
