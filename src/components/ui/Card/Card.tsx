import type { ComponentProps } from "react";
import classes from "./Card.module.css";

interface CardProps extends ComponentProps<"div"> {}

export const Card = ({ children, ...props }: CardProps) => {
	const cardProps = {
		...props,
		className: classes.card,
	};
	return <div {...cardProps}>{children}</div>;
};
