import { useEffect, useState } from "react";
import type { Product } from "@/types";
import { getProducts } from "../services";

export const useProducts = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		getProducts().then((res) => {
			setProducts(res);
			setIsLoading(false);
		});
	}, []);

	return { products, isLoading };
};
