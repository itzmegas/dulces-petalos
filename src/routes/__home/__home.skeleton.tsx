import { Skeleton } from "@/components/ui/Skeleton";
import classes from "@/styles/home.module.css";

export const HomeSkeleton = () => {
	return (
		<div className={classes.page}>
			<Skeleton minWidth="25rem" width="80%" height="3rem" />
			<div className={classes.products}>
				{Array(6)
					.fill(null)
					.map((_, index) => (
						<Skeleton
							key={`skeleton-${index + 1}`}
							minWidth="20rem"
							height="22rem"
						/>
					))}
			</div>
		</div>
	);
};
