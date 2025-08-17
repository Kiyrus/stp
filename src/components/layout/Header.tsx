import {APP_NAME, APP_VERSION} from "@/types/version.ts";

function Header () {
	return(
			<header>
				<span>Header</span>
				<span>{APP_NAME}</span>
				<br/>
				<span>v{APP_VERSION}</span>
			</header>
	)
}

export default Header;
