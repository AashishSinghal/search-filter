import { render } from "react-dom";
import App from "./App";
import { TagProvider } from "./TagContext";

const rootElement = document.getElementById("root");
render(
  <TagProvider>
    <App />
  </TagProvider>,
  rootElement
);
