import classes from "@/styles/not-found.module.css";

export const NotFound = () => {
	return (
		<div className={classes.container}>
			<h1>404</h1>
			<h2>Not Found</h2>
			<p>La página que buscas no existe</p>
		</div>
	);
};
