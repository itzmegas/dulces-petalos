import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "@/api/hooks/useProducts";
import { Product } from "@/components/Product";

import classes from "./main.module.css";

export const Route = createFileRoute("/petalos")({
	component: Page,
});

function Page() {
	const { products, isLoading } = useProducts();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "3rem",
				alignItems: "center",
				width: "100%",
			}}
		>
			<input type="text" />
			{isLoading && <div>Loading...</div>}

			<div className={classes.products}>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
