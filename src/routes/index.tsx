import { createFileRoute } from "@tanstack/react-router";
import classes from "./main.module.css";
export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return <div className={classes.main}></div>;
}
