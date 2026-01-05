import {
	createMemoryHistory,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";
import type React from "react";

// Import the generated route tree
import { routeTree } from "../../routeTree.gen";

// Create test router with generated route tree
export function createTestRouterFromFiles(initialLocation = "/") {
	const router = createRouter({
		routeTree,
		history: createMemoryHistory({
			initialEntries: [initialLocation],
		}),
	});

	return router;
}

// Custom helper to render with the real file-based router
export function createTestRouter(initialLocation = "/") {
	return createRouter({
		routeTree,
		history: createMemoryHistory({
			initialEntries: [initialLocation],
		}),
	});
}

export function TestRouter({
	initialLocation = "/",
}: {
	initialLocation?: string;
}) {
	const router = createTestRouter(initialLocation);
	return <RouterProvider router={router} />;
}

export function renderWithRouter(initialLocation = "/") {
	return {
		user: render(<TestRouter initialLocation={initialLocation} />),
		router: createTestRouter(initialLocation),
	};
}

// Helper to test specific file routes
export function createMockFileRoute(
	path: string,
	component: React.ComponentType,
) {
	// This is useful for isolated testing when you don't want to use the full route tree
	return {
		path,
		component,
	};
}
