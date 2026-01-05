import { useEffect, useState } from "react";
import type { Product } from "@/types";
import { getProduct } from "../services";

export const useProduct = (productId: string) => {
	const [product, setProduct] = useState<Product>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		getProduct(productId).then((res) => {
			setProduct(res);
			setIsLoading(false);
		});
	}, [productId]);

	return { product, isLoading };
};
