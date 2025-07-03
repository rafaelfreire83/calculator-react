import { cn } from "../lib/utils";

type ButtonProps = {
	children: React.ReactNode;
	variant?: "default" | "secondary" | "tertiary" | undefined;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	children,
	variant,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"bg-[#2D2A37] text-lg bg-gradient-to-b w-16 h-16 from-white/0 to-white/5 text-white px-4 py-2 rounded-lg shadow-2xl border border-white/5 cursor-pointer",
				className,
				{
					"from-blue-500/60 to-blue-500/30 ": variant === "secondary",
					"bg-orange-500": variant === "tertiary",
				},
			)}
			{...props}
		>
			{children}
		</button>
	);
}
