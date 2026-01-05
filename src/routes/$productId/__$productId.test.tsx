import { render, screen } from "@testing-library/react";
import { describe, expect, it, type Mock, vi } from "vitest";

import { products } from "../../test/data/products";
import { TestRouter } from "../../test/utils";

// Mock the services
vi.mock("@/api/services", () => ({
	getProduct: vi.fn(),
}));

import { getProduct } from "@/api/services";

describe("Product page", () => {
	it("renders product page correctly", async () => {
		// Setup mock
		const mockProduct = products[1];
		(getProduct as Mock).mockResolvedValue(mockProduct);

		render(<TestRouter initialLocation={`/${mockProduct.id}`} />);

		expect(
			await screen.findByRole("heading", { name: mockProduct.name }),
		).toBeInTheDocument();
		expect(screen.getByText(mockProduct.binomialName)).toBeInTheDocument();
		expect(screen.getByText(`€ ${mockProduct.price}`)).toBeInTheDocument();
		const image = screen.getByAltText(mockProduct.name) as HTMLImageElement;
		expect(image).toBeInTheDocument();
		expect(image.src).toBe(mockProduct.imgUrl);
	});
});
