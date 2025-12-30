import type { PropsWithChildren } from "react";
import classes from "./Layout.module.css";

export const Layout = ({ children }: PropsWithChildren) => {
	return <div className={classes.layout}>{children}</div>;
};
