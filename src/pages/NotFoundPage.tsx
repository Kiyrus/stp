import RouteTester from "@/components/features/RouterTester.tsx";

function NotFoundPage() {
	return (
			<div>
				<h1>404 - Страница не найдена</h1>
				<p>Извините, запрошенная страница не существует</p>
				<RouteTester />
			</div>
	)
}

export default NotFoundPage;
