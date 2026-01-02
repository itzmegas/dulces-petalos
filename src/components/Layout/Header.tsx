import classes from "./Layout.module.css";

export const Header = () => {
	return (
		<header className={classes.header}>
			<img src="/logo.svg" alt="logo petalos" />
		</header>
	);
};
