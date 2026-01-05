import { createFileRoute } from "@tanstack/react-router";

import { getProduct } from "@/api/services";
import { Button } from "@/components/ui";
import classes from "@/styles/product.module.css";
import { ErrorProduct } from "./__error-product";

export const Route = createFileRoute("/$productId/")({
	component: RouteComponent,
	loader: ({ params }) => getProduct(params.productId),
	errorComponent: () => <ErrorProduct />,
});

type FertilizerType = "phosphorus" | "nitrogen";

const translateFertilizerType: Record<FertilizerType, string> = {
	phosphorus: "fósforo",
	nitrogen: "nitrógeno",
};

function RouteComponent() {
	const { productId } = Route.useParams();
	const product = Route.useLoaderData();

	if (!product) {
		return null;
	}
	return (
		<div className={classes.container}>
			<div className={classes.image}>
				<img
					src={product.imgUrl}
					alt={product.name}
					style={{
						viewTransitionName: `product-image-${productId}`,
					}}
				/>
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
