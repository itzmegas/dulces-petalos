import type { ComponentProps, CSSProperties } from "react";
import classes from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {
	color?: string;
	radius?: string;
}

export const Button = ({
	children,
	type,
	style,
	color,
	radius,
	...restProps
}: ButtonProps) => {
	const buttonProps: ButtonProps = {
		type: type || "button",
		style: {
			...style,
			"--color": color,
			"--radius": radius,
		} as CSSProperties,
		className: classes.button,
		...restProps,
	};

	return <button {...buttonProps}>{children}</button>;
};
