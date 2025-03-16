import { Metadata } from 'next'
import Link from 'next/link'

import { cn } from '@/shared/utils'
import { buttonVariants } from '@/shared/ui'
import { ThemeModeToggle } from '@/widgets'

export const metadata: Metadata = {
	title: 'next-dev-latest'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='space-y-6'>
			<RootHeader />
			<div className='mx-auto max-w-screen-lg px-3'>{children}</div>
		</div>
	)
}

const RootHeader: React.FC = () => {
	return (
		<div className='bg-background sticky top-0 h-fit border-b'>
			<header className='mx-auto flex h-14 max-w-screen-lg items-center justify-between px-3'>
				<Link href='/' className={cn(buttonVariants({ variant: 'ghost' }))}>
					next-dev-latest
				</Link>
				<ThemeModeToggle />
			</header>
		</div>
	)
}
