import type { Product } from "@/types";
import { get } from "..";

export const getProducts = async () => {
	const result = await get<Product[]>("/product");
	return result;
};
