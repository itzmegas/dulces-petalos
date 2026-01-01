import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "@/api/hooks/useProducts";
import { Product } from "@/components/Product";
import classes from "@/styles/petalos.module.css";

export const Route = createFileRoute("/petalos")({
	component: Page,
});

function Page() {
	const { products, isLoading } = useProducts();

	return (
		<div className={classes.page}>
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
