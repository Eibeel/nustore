import type React from 'react'
interface GalleryWrapperProps {
	children: React.ReactNode
	classStyle: string
}

export default function GalleryWrapper({
	children,
	classStyle
}: GalleryWrapperProps) {
	return <div className={classStyle}>{children}</div>
}
