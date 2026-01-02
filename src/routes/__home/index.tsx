import { IconSearch } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useProducts } from "@/api/hooks/useProducts";
import { Product } from "@/components/Product";
import { InputText } from "@/components/ui";
import classes from "@/styles/home.module.css";
import { HomeSkeleton } from "./__home.skeleton";

export const Route = createFileRoute("/__home/")({
	component: App,
});

function App() {
	const [search, setSearch] = useState("");
	const { products, isLoading } = useProducts();

	if (isLoading) {
		return <HomeSkeleton />;
	}

	return (
		<div className={classes.page}>
			<InputText
				leftIcon={<IconSearch color="#A4A4A4" size={20} />}
				placeholder="Buscar en nuestra tienda"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<div className={classes.products}>
				{products
					.filter((product) =>
						product.name.toLowerCase().includes(search.toLowerCase()),
					)
					.map((product) => (
						<Product key={product.id} product={product} />
					))}
			</div>
		</div>
	);
}
