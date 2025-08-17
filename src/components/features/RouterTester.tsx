import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {Button} from "@/components/ui/button.tsx";

const RouteTester = () => {
	const navigate = useNavigate();

	useEffect(() => {
		console.log('Текущий путь:', window.location.pathname);
	}, []);

	return (
			<div className="route-tester">
				<h3>Тест маршрутизации</h3>
				<div className="button-group">
					<Button onClick={() => navigate('/')}>Главная</Button>
					<Button onClick={() => navigate('/analytics')}>Аналитика</Button>
					<Button onClick={() => navigate('/settings')}>Настройки</Button>
					<Button onClick={() => navigate('/login')}>Логин</Button>
					<Button onClick={() => navigate('/register')}>Регистрация</Button>
					<Button onClick={() => navigate('/unknown-page')}>404</Button>
				</div>
			</div>
	);
};

export default RouteTester;
