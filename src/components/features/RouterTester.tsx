import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/layout/theme-provider"

const RouteTester = () => {
	const navigate = useNavigate()
	const { theme } = useTheme()

	const routes = [
		{ path: '/', name: 'Главная' },
		{ path: '/analytics', name: 'Аналитика' },
		{ path: '/settings', name: 'Настройки' },
		{ path: '/login', name: 'Логин' },
		{ path: '/register', name: 'Регистрация' },
		{ path: '/unknown-page', name: '404' }
	]

	return (
			<div className={cn(
					"p-4 border rounded-lg",
					"bg-card text-card-foreground",
					"shadow-sm"
			)}>
				<h3 className="text-lg font-semibold mb-3">Тест маршрутизации</h3>
				<div className="flex flex-wrap gap-2">
					{routes.map((route) => (
							<Button
									key={route.path}
									variant="secondary"
									onClick={() => navigate(route.path)}
									className={cn(
											theme === 'dark' ? 'bg-secondary text-secondary-foreground' : '',
											'hover:bg-secondary/80 transition-colors'
									)}
							>
								{route.name}
							</Button>
					))}
				</div>
			</div>
	)
}

export default RouteTester
