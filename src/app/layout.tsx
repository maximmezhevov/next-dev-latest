import { Inter } from 'next/font/google'

import Providers from '@/shared/providers'
import { cn } from '@/shared/utils'

import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic']
})

export default function AppLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn(inter.className, 'antialiased')}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
