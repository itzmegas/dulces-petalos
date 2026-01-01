import { IconSearch } from "@tabler/icons-react";
import type { ComponentProps } from "react";
import classes from "./InputSearch.module.css";

interface InputSearchProps extends ComponentProps<"input"> {}

export const InputSearch = ({ ...props }: InputSearchProps) => {
	const inputProps = {
		...props,
		placeholder: "Buscar en nuestra tienda",
		className: classes.input,
	};

	return (
		<div className={classes.container}>
			<IconSearch color="#A4A4A4" size={20} />
			<input {...inputProps} />
		</div>
	);
};
