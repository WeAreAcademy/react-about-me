import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("react-app-root");
const root = createRoot(container!);
root.render(<App />);
