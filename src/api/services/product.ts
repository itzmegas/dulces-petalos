import type { Product } from "@/types";
import { get } from "..";

export const getProduct = async (id: string) => {
	const result = await get<Product>(`/product/${id}`);
	return result;
};
