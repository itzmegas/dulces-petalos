import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { useProduct } from "@/api/hooks";
import { Button } from "@/components/ui";
import classes from "@/styles/product.module.css";

export const Route = createFileRoute("/$productId")({
	component: RouteComponent,
});

type FertilizerType = "phosphorus" | "nitrogen";

const translateFertilizerType: Record<FertilizerType, string> = {
	phosphorus: "fósforo",
	nitrogen: "nitrógeno",
};

function RouteComponent() {
	const { productId } = Route.useParams();
	const { product, isLoading } = useProduct(productId);

	if (isLoading || !product) {
		return null;
	}
	return (
		<div
			className={classes.container}
			style={
				{
					viewTransitionName: `product-image-${productId}`,
				} as CSSProperties
			}
		>
			<div className={classes.image}>
				<img src={product.imgUrl} alt={product.name} />
			</div>

			<div className={classes.product_info}>
				<h1>{product.name}</h1>
				<p>{product.binomialName}</p>
				<h2>{`€ ${product.price}`}</h2>

				<ul>
					<li>{`Regar ${product.wateringsPerWeek} por semana`}</li>
					<li>{`Fertilizar con ${translateFertilizerType[product.fertilizerType as FertilizerType]}`}</li>
				</ul>

				<Button
					className={classes.button}
					color="#771E42"
					c="white"
					padding="0.7rem"
				>
					Añadir al carrito
				</Button>
			</div>
		</div>
	);
}
