import { useContext } from "react";
import HistoryContext from "../contexts/history";

export function History() {
	const { history, clearHistory } = useContext(HistoryContext);

	return (
		<div className="flex w-full  flex-col gap-1">
			<div className="flex justify-between items-center">
				<h2 className="mb-2">Histórico de Operações</h2>
				{history.length > 0 && (
					<button
						className="text-gray text-sm cursor-pointer hover:text-white"
						type="button"
						onClick={clearHistory}
					>
						Limpar
					</button>
				)}
			</div>

			{history.length > 0 ? (
				<div className="flex flex-col gap-1">
					{history.map((operation: string, index: any) => (
						<span key={index}>{operation}</span>
					))}
				</div>
			) : (
				<p className="text-gray text-sm">Nenhuma operação realizada</p>
			)}
		</div>
	);
}
