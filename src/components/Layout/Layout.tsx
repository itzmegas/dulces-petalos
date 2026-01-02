import { Link, useLocation } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Header } from "./Header";
import classes from "./Layout.module.css";

export const Layout = ({ children }: PropsWithChildren) => {
	const location = useLocation();

	const breadcrumbs = location.pathname.split("/").map((item, i) => {
		const root = "/";
		const path = root + item;

		return (
			<Link key={path} to={path}>
				{i === 0 ? "Inicio" : item}
			</Link>
		);
	});

	return (
		<div className={classes.layout}>
			<Header />
			<div className={classes.body}>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				{children}
			</div>
		</div>
	);
};
