'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

import { cn } from '@/shared/utils'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuGroup,
	DropdownMenuItem,
	buttonVariants
} from '@/shared/ui'

const themeMap = {
	system: 'Как в системе',
	light: 'Светлая',
	dark: 'Тёмная'
} as const
type Theme = keyof typeof themeMap

export const ThemeModeToggle: React.FC = () => {
	const { themes, theme, setTheme } = useTheme()

	const handleToggleTheme = (value: string) => {
		setTheme(value)
	}
	return (
		<DropdownMenu>
			<Trigger />
			<Content
				themes={themes}
				theme={theme}
				handleToggleTheme={handleToggleTheme}
			/>
		</DropdownMenu>
	)
}

const Trigger: React.FC = () => {
	return (
		<DropdownMenuTrigger
			className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
		>
			<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
			<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
			<span className='sr-only'>Переключение режима темы</span>
		</DropdownMenuTrigger>
	)
}

const Content: React.FC<{
	themes: string[]
	theme: string | undefined
	handleToggleTheme: (value: string) => void
}> = ({ themes, theme, handleToggleTheme }) => {
	return (
		<DropdownMenuContent>
			<DropdownMenuGroup>
				{themes.map(item => (
					<DropdownMenuItem
						key={item}
						onClick={() => handleToggleTheme(item)}
						variant={theme == item ? 'active' : 'default'}
					>
						{themeMap[item as Theme]}
					</DropdownMenuItem>
				))}
			</DropdownMenuGroup>
		</DropdownMenuContent>
	)
}
