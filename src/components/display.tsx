type DisplayProps = {
	operation: string;
	result: string;
};

export function Display({ operation, result }: DisplayProps) {
	return (
		<div className="w-full flex flex-col gap-2">
			<span className="text-gray text-sm text-right h-8">
				{result && operation}
			</span>
			<div className="flex justify-between h-12">
				<span className="text-gray">=</span>
				<span className="font-bold text-2xl">{result || operation}</span>
			</div>
		</div>
	);
}
