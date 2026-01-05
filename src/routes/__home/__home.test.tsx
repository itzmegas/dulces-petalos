import { render, screen } from "@testing-library/react";
import { describe, expect, it, type Mock, vi } from "vitest";
import { TestRouter } from "../../test/utils";

vi.mock("@/api/services", () => ({
	getProducts: vi.fn(),
}));

import { getProducts } from "@/api/services";
import { products } from "@/test/data/products";

describe("Home page", () => {
	it("renders home page correctly", async () => {
		const mockProducts = products;
		(getProducts as Mock).mockResolvedValue(mockProducts);

		render(<TestRouter initialLocation="/" />);

		expect(await screen.findByText(products[0].name)).toBeInTheDocument();
		expect(screen.getByText(products[1].name)).toBeInTheDocument();
		expect(screen.getByText(products[2].name)).toBeInTheDocument();
	});
});
