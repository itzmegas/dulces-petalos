import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "@/api/hooks/useProducts";
import { Product } from "@/components/Product";
import classes from "@/styles/home.module.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
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
