const formatSlug = {
	generateSlug: (slug: string) => {
		return slug
			.toLowerCase() // Convertir a minúsculas
			.trim() // Eliminar espacios al inicio y al final
			.replace(/\s+/g, '-') // Reemplazar espacios por guiones
			.replace(/[^a-z0-9áéíóúñü\-]/g, '') // Eliminar caracteres no permitidos (excepto acentos y guiones)
			.replace(/-+/g, '-') // Reemplazar múltiples guiones por uno solo
	},
	slugToText: (slug: string) => {
		const decodeSlug = decodeURIComponent(slug)
		return decodeSlug
			.replace(/-/g, ' ')
			.replace(/^\w/, (char) => char.toUpperCase())
	},
	slugToMetadataText: (slug: string) => {
		const decodeSlug = decodeURIComponent(slug)
		return decodeSlug
			.replace(/-/g, ' ')
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	}
}

export default formatSlug
