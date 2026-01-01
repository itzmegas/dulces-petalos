import type { Product as ProductType } from "@/types";
import { Card } from "../ui/Card";

import classes from "./Product.module.css";

interface ProductProps {
	product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
	return (
		<Card>
			<h2>{product.name}</h2>
			<p>{product.binomialName}</p>
			<div className={classes.card_image}>
				<img src={product.imgUrl} alt={product.name} />
			</div>
		</Card>
	);
};
