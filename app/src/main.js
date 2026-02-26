import { createEditorShell } from "./ui-shell.js";

const root = document.getElementById("app");

if (!root) {
  throw new Error("Missing #app mount node");
}

createEditorShell(root);
