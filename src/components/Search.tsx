'use client'
import { useState, type InputHTMLAttributes } from 'react'
import type React from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	placeholder: string
}

export default function Search({ name, placeholder, ...rest }: InputProps) {
	const [query, setQuery] = useState<string>('')
	const router = useRouter()

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!query) return
		setQuery('')
		router.push(`/search?q=${query}&page=0`)
	}

	return (
		<form className='w-full' onSubmit={onSubmit}>
			<label
				htmlFor='default-search'
				className='text-sm font-medium text-gray-900 sr-only dark:text-white'
			>
				Search
			</label>
			<div className='relative'>
				<input
					required
					type='search'
					id='default-search'
					className='w-full py-1.5 pl-3 pr-7 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-700 focus:border-gray-700 outline-none'
					autoComplete='off'
					placeholder={placeholder}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					{...rest}
				/>
				<button
					type='submit'
					className='absolute top-0 end-0 px-3 text-sm font-medium h-full text-white bg-cyan-800 rounded-e-md border border-cyan-800 outline-none hover:bg-cyan-900 transition-colors'
				>
					<MagnifyingGlassIcon className='size-4' />
					<span className='sr-only'>Search</span>
				</button>
			</div>
		</form>
	)
}
