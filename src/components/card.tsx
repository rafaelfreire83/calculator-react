import { cn } from "../lib/utils";

type CardProps = {
	children: React.ReactNode;
	className?: string;
};

export function Card({ children, className }: CardProps) {
	return (
		<div className={cn("bg-secondary rounded-[15px] p-9", className)}>
			<h1>{children}</h1>
		</div>
	);
}
