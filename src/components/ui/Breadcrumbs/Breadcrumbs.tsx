import { useRouterState } from "@tanstack/react-router";
import clsx from "clsx";
import { type ComponentProps, Fragment, type JSX } from "react";
import type { Product } from "@/types";
import classes from "./Breadcrumbs.module.css";

interface BreadcrumbsProps extends ComponentProps<"div"> {
	breadcrumbs: JSX.Element[];
	separator?: string;
}

export const Breadcrumbs = ({
	breadcrumbs,
	separator = ">",
	className,
	...props
}: BreadcrumbsProps) => {
	const routeState = useRouterState();
	const breadcrumbsProps = {
		...props,
		className: clsx(classes.breadcrumbs, className),
	};

	return (
		<div {...breadcrumbsProps}>
			{breadcrumbs.map((item, index) => (
				<Fragment key={`separator-${index + 1}`}>
					<span className={classes.path} data-disabled={item?.props?.disabled}>
						{(() => {
							const data = routeState.matches?.find(
								(match) => match.pathname === `${item.key}/`,
							)?.loaderData;
							return (
								(data && !Array.isArray(data)
									? (data as Product).name
									: undefined) || item
							);
						})()}
					</span>

					{index < breadcrumbs.length - 1 && breadcrumbs.length > 1 && (
						<span>{separator}</span>
					)}
				</Fragment>
			))}
		</div>
	);
};
