import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from "@/components/layout/Sidebar.tsx";

const MainLayout = () => {
	return (
			<div className="app-container">
				<Header/>
				<div className="content-wrapper">
					<Sidebar/>
					<main className="main-content">
						<Outlet/>
					</main>
				</div>
				<Footer/>
			</div>
	);
};

export default MainLayout;
