import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from "@/components/layout/Sidebar.tsx";
import {ModeToggle} from "@/components/layout/mode-toggle.tsx";

const MainLayout = () => {
	return (
			<div className="app-container">
				<ModeToggle/>
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
