import Button from "./components/button";
import { Card } from "./components/card";
import { Display } from "./components/display";
import { History } from "./components/history";
import { BUTTONS } from "./data/buttons";
import { useOperation } from "./hooks/useOperation";

export default function App() {
	const { operation, result, handleOperation } = useOperation();

	function handleButtonClick(input: string) {
		handleOperation(input);
	}

	return (
		<div className="flex justify-center items-center h-screen flex-1 px-4 select-none">
			<div className="bg-bg rounded-[15px] px-4 py-20 container">
				<div className="gap-4 w-full max-w-[890px] flex flex-wrap justify-center m-auto">
					<Card className="w-fit max-w-full">
						<div className="p-4">
							<Display operation={operation} result={result} />
							<div className="mt-4 flex flex-col gap-3">
								{BUTTONS.map((row, index) => (
									<div key={`row-${index}`} className="flex gap-3">
										{row.map((button) => (
											<Button
												onClick={() => handleButtonClick(button.input)}
												key={button.input}
												variant={
													button?.variant as
														| "default"
														| "secondary"
														| "tertiary"
														| undefined
												}
												className={button?.className}
											>
												{button.input}
											</Button>
										))}
									</div>
								))}
							</div>
						</div>
					</Card>
					<Card className="flex-1">
						<History />
					</Card>
				</div>
			</div>
		</div>
	);
}
