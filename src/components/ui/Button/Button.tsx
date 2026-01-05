import { clsx } from "clsx";
import type { ComponentProps, CSSProperties } from "react";
import classes from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {
	color?: string;
	c?: string;
	radius?: string;
	padding?: string;
}

export const Button = ({
	children,
	type,
	style,
	color,
	c,
	radius,
	padding,
	className,
	...restProps
}: ButtonProps) => {
	const buttonProps: ButtonProps = {
		type: type || "button",
		style: {
			...style,
			"--color": color,
			"--radius": radius,
			"--padding": padding,
			"--c": c,
		} as CSSProperties,
		className: clsx(classes.button, className),
		...restProps,
	};

	return <button {...buttonProps}>{children}</button>;
};
