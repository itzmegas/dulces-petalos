import type { ComponentProps } from "react";
import classes from "./InputText.module.css";

interface InputTextProps extends ComponentProps<"input"> {
	leftIcon?: React.ReactElement;
}

export const InputText = ({ leftIcon, ...props }: InputTextProps) => {
	const inputProps = {
		className: classes.input,
		...props,
	};

	return (
		<label className={classes.container}>
			<div className={classes.wrapper}>
				{leftIcon}
				<input {...inputProps} />
			</div>
		</label>
	);
};
