import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { HistoryProvider } from "./contexts/history.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HistoryProvider>
			<App />
		</HistoryProvider>
	</StrictMode>,
);
