import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarHeader,
	SidebarFooter
} from "@/components/ui/sidebar";
import {
	Home,
	BarChart3,
	Settings,
	LogOut, LogInIcon, SaveIcon, CherryIcon
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const AppSidebar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const navItems = [
		{ name: "Dashboard", icon: Home, path: "/" },
		{ name: "Analytics", icon: BarChart3, path: "/analytics" },
		{ name: "Settings", icon: Settings, path: "/settings" },
		{ name: "Login", icon: LogInIcon, path: "/login" },
		{ name: "Register", icon: SaveIcon, path: "/register" },
		{ name: "404", icon: CherryIcon, path: "/*" }
	];

	const handleNavigation = (path: string) => {
		navigate(path);
	};

	return (
			<Sidebar variant="inset" collapsible="icon">
				<SidebarHeader>
					{/*empty*/}
				</SidebarHeader>

				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu>
								{navItems.map((item) => (
										<SidebarMenuItem key={item.path}>
											<SidebarMenuButton
													isActive={location.pathname === item.path}
													onClick={() => handleNavigation(item.path)}
													tooltip={item.name}
											>
												<item.icon />
												<span>{item.name}</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>

				<SidebarFooter>
					<SidebarMenuButton>
						<LogOut/>
						<span>Logout</span>
					</SidebarMenuButton>
				</SidebarFooter>
			</Sidebar>
	);
};

export default AppSidebar;
