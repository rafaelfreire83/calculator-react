import { useContext, useState } from "react";
import Button from "./components/button";
import { Card } from "./components/card";
import { Display } from "./components/display";
import { History } from "./components/history";
import HistoryContext from "./contexts/history";
import { BUTTONS } from "./data/buttons";

export default function App() {
	const [operation, setOperation] = useState("");
	const [result, setResult] = useState("");
	const { updateHistory } = useContext(HistoryContext);

	function handleButtonClick(input: string) {
		if (input === "C") {
			setOperation("");
			setResult("");
			return;
		}

		if (input === "CE") {
			setResult("");
			setOperation(operation.slice(0, -1));
			return;
		}

		if (result) {
			setOperation(isNaN(parseFloat(input)) ? `${result + input}` : input);
			setResult("");
			return;
		}

		if (input === "=") {
			const operationResult = eval(
				operation.replace(/,/g, ".").replace(/x/g, "*"),
			);

			const operationResultString = operationResult
				.toString()
				?.replace(/\./g, ",");
			setResult(operationResultString);
			updateHistory(operation, operationResultString);
			return;
		}

		if (input === "," && !operation.includes(",")) {
			setOperation(`${operation},`);
			return;
		}

		setOperation(`${operation}${input}`);
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
												key={button.input}
												variant={button?.variant}
												className={button?.className}
												onClick={() => handleButtonClick(button.input)}
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
