/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				text: 'text 4s infinite',
				'color-cycle': 'color-cycle 4s infinite',
				'stack-color-cycle': 'stack-color-cycle 5s ease-in-out 1s infinite',
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'color-cycle': {
					'0%, 100%': { color: '#B617E6' },
					'50%': { color: '#FAAB00' },
				},
				'stack-color-cycle': {
					'0%': { color: '#FFFFFF' },
					'20%': { color: '#B617E6' },
					'40%': { color: '#FAAB00' },
					'60%': { color: '#61DAFB' },
					'80%': { color: '#BC52EE' },
					'100%': { color: '#FFFFFF' },
				}
			}
		},
	},
	plugins: [animations],
}