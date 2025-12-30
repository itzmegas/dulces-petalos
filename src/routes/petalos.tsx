import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/petalos")({
	component: Page,
});

function Page() {
	const [data, setData] = useState([]);
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((data) => console.log(data));
	return (
		<div>
			<input type="text" />
		</div>
	);
}
