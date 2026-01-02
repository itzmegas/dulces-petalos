import clsx from "clsx";
import { type ComponentProps, Fragment } from "react";

import classes from "./Breadcrumbs.module.css";

interface BreadcrumbsProps extends ComponentProps<"div"> {
	breadcrumbs: React.ReactNode[];
	separator?: string;
}

export const Breadcrumbs = ({
	breadcrumbs,
	separator = ">",
	className,
	...props
}: BreadcrumbsProps) => {
	const breadcrumbsProps = {
		...props,
		className: clsx(classes.breadcrumbs, className),
	};

	return (
		<div {...breadcrumbsProps}>
			{breadcrumbs.map((item, index) => (
				<Fragment key={`separator-${index + 1}`}>
					<span className={classes.path}>{item}</span>

					{index < breadcrumbs.length - 1 && breadcrumbs.length > 1 && (
						<span>{separator}</span>
					)}
				</Fragment>
			))}
		</div>
	);
};
