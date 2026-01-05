import { IconAlertTriangle } from "@tabler/icons-react";
import classes from "@/styles/product.module.css";

export const ErrorProduct = () => {
	return (
		<div className={classes.container}>
			<div className={classes.image} style={{ width: "100%" }}>
				<IconAlertTriangle
					color="#7c7c7c67"
					size="2rem"
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
					}}
				/>
			</div>

			<div className={classes.product_info}>
				<h2>El producto no existe</h2>
				<p>
					Lo siento, parece que el producto que buscabas no se encuentra en
					nuestra tienda.
				</p>
			</div>
		</div>
	);
};
