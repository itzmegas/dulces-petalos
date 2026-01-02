import { Link } from "@tanstack/react-router";
import classes from "./Layout.module.css";

export const Header = () => {
	return (
		<header className={classes.header}>
			<Link to="/">
				<img src="/logo.svg" alt="logo petalos" />
			</Link>
		</header>
	);
};
