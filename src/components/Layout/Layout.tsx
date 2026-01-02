import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import classes from "./Layout.module.css";

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className={classes.layout}>
			<Header />
			<div className={classes.body}>{children}</div>
		</div>
	);
};
