import { IconSearch } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getProducts } from "@/api/services";
import { Product } from "@/components/Product";
import { InputText } from "@/components/ui";
import classes from "@/styles/home.module.css";

export const Route = createFileRoute("/__home/")({
	component: App,
	loader: () => getProducts(),
});

function App() {
	const [search, setSearch] = useState("");
	const products = Route.useLoaderData();

	const filteredProducts = products.filter(
		(product) =>
			product.name.toLowerCase().includes(search.toLowerCase()) ||
			product.binomialName.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div className={classes.page}>
			<InputText
				leftIcon={<IconSearch color="#A4A4A4" size={20} />}
				placeholder="Buscar en nuestra tienda"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<div className={classes.products}>
				{filteredProducts.length === 0 ? (
					<p>No se encontraron coincidencias</p>
				) : (
					filteredProducts.map((product) => (
						<Product key={product.id} product={product} />
					))
				)}
			</div>
		</div>
	);
}
