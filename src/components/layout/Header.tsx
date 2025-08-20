import {APP_NAME, APP_VERSION} from "@/types/version.ts";
import {ModeToggle} from "@/components/layout/mode-toggle.tsx";
import {SidebarTrigger} from "@/components/ui/sidebar.tsx";

function Header () {
	return(
			<header>
				<div className='flex justify-between'>
					<SidebarTrigger/>
					<ModeToggle/>
				</div>
				<div className="flex items-center justify-between p-4">
					<div className="flex items-center gap-2">
						<h1 className="text-xl font-semibold">My Application</h1>
					</div>
					<span>Header</span>
					<span>{APP_NAME}</span>
					<br/>
					<span>v{APP_VERSION}</span>
				</div>
			</header>
	)
}

export default Header;
