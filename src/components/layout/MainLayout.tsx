import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/AppSidebar.tsx";

const MainLayout = () => {
	return (
			<SidebarProvider>
				<AppSidebar/>
				<div className="app-container">
					<Header/>
					<div>
						<SidebarInset>
							<main>
								<Outlet/>
							</main>
						</SidebarInset>
					</div>
					<Footer/>
				</div>
			</SidebarProvider>
	);
};

export default MainLayout;
