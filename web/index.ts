import "./style.css";
import "../src/index";

import readme from "../README.md?raw";

import "github-markdown-css/github-markdown.css";
import "@catppuccin/highlightjs/css/catppuccin-latte.css";

import hljs from "highlight.js";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";

marked.use(
  markedHighlight({
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

(async () => {
  const parsed = marked.parse(readme);
  const main = document.querySelector("main");
  if (main) main.innerHTML = typeof parsed === "string" ? parsed : await parsed;
})();
