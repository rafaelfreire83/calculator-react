import { createContext, useEffect, useState } from "react";

type HistoryProviderProps = {
	children: React.ReactNode;
};

interface HistoryContextType {
	history: string[];
	updateHistory: (operation: string, parsedResult: string) => void;
	clearHistory: () => void;
}

const HistoryContext = createContext<HistoryContextType>({
	history: [],
	updateHistory: () => {},
	clearHistory: () => {},
});

export function HistoryProvider({ children }: HistoryProviderProps) {
	const [history, setHistory] = useState<string[]>([]);
	const historyLocalStorageKey = "history";

	useEffect(() => {
		const storedHistory = localStorage.getItem(historyLocalStorageKey);
		if (storedHistory) {
			setHistory(JSON.parse(storedHistory) || "[]");
		}
	}, []);

	function updateHistory(operation: string, parsedResult: string) {
		setHistory((prev) => {
			const updateHistory = [`${operation}=${parsedResult}`, ...prev];
			localStorage.setItem(
				historyLocalStorageKey,
				JSON.stringify(updateHistory),
			);
			return updateHistory;
		});
	}
	function clearHistory() {
		setHistory([]);
		localStorage.removeItem(historyLocalStorageKey);
	}

	return (
		<HistoryContext.Provider value={{ history, updateHistory, clearHistory }}>
			{children}
		</HistoryContext.Provider>
	);
}

export default HistoryContext;
