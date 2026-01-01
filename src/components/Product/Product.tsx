import { IconArrowUpRight } from "@tabler/icons-react";
import type { Product as ProductType } from "@/types";
import { Button } from "../ui/Button";
import classes from "./Product.module.css";

interface ProductProps {
	product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
	return (
		<div className={classes.card}>
			<h2>{product.name}</h2>
			<p className={classes.subtitle}>{product.binomialName}</p>
			<div className={classes.card_image}>
				<img src={product.imgUrl} alt={product.name} />

				<div className={classes.footer}>
					<div className={classes.price}>{`€ ${product.price}`}</div>
					<Button>
						<IconArrowUpRight />
					</Button>
				</div>
			</div>
		</div>
	);
};
