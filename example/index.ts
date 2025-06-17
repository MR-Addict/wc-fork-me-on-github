import "./style.css";
import "../src/index";

import { marked } from "marked";
import readme from "../README.md?raw";
import "github-markdown-css/github-markdown.css";

(async () => {
  const parsed = marked.parse(readme);
  const main = document.querySelector("main");
  if (main) main.innerHTML = typeof parsed === "string" ? parsed : await parsed;
})();
