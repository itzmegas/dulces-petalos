import type { ComponentProps, CSSProperties } from "react";
import classes from "./Skeleton.module.css";

type Shape = "rect" | "circle";
interface SkeletonProps extends ComponentProps<"div"> {
	shape?: Shape;
	height?: CSSProperties["height"];
	width?: CSSProperties["width"];
	maxWidth?: CSSProperties["maxWidth"];
	minWidth?: CSSProperties["minWidth"];
	maxHeight?: CSSProperties["maxHeight"];
	minHeight?: CSSProperties["minHeight"];
}

export const Skeleton = ({
	shape = "rect",
	maxHeight,
	minHeight,
	maxWidth,
	minWidth,
	height,
	width,
	...props
}: SkeletonProps) => {
	const shapeProps = {
		className: classes.skeleton,
		style: {
			"--skeleton-height": height,
			"--skeleton-width": width,
			"--skeleton-max-height": maxHeight,
			"--skeleton-min-height": minHeight,
			"--skeleton-max-width": maxWidth,
			"--skeleton-min-width": minWidth,
			"--skeleton-radius": shape === "circle" ? "50%" : "1rem",
		} as CSSProperties,
		...props,
	};

	return <div {...shapeProps} />;
};
