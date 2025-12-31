import { ENV } from "../constants";

export const get = async <T = unknown>(url: string): Promise<T> => {
	const requestUrl = `${ENV.API_URL}${url}`;
	const response = await fetch(requestUrl, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	return await response.json();
};
