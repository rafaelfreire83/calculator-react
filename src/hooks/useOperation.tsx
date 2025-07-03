import { useContext, useState } from "react";
import HistoryContext from "../contexts/history";

export function useOperation() {
	const [operation, setOperation] = useState("");
	const [result, setResult] = useState("");
	const { updateHistory } = useContext(HistoryContext);

	function handleOperation(input: string) {
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

	return {
		operation,
		result,
		handleOperation,
	};
}
