import { mountEditorRuntime } from "./editor/runtime.js";

export function createEditorShell(root) {
  if (root.__editorRuntime && typeof root.__editorRuntime.destroy === "function") {
    root.__editorRuntime.destroy();
  }

  root.replaceChildren(buildShell());

  const canvas = root.querySelector("#editorCanvas");
  const statusElement = root.querySelector("[data-editor-status]");
  const overlayElement = root.querySelector("[data-editor-overlay]");
  const shellElement = root.querySelector(".canvas-shell");
  const resetViewButton = root.querySelector("[data-editor-action='camera-reset']");
  const resetPlanButton = root.querySelector("[data-editor-action='plan-reset']");
  const seedDebugButton = root.querySelector("[data-editor-action='plan-seed-debug']");

  if (!canvas || !shellElement) return;

  root.__editorRuntime = mountEditorRuntime({
    canvas,
    statusElement,
    overlayElement,
    shellElement,
    controls: {
      resetViewButton,
      resetPlanButton,
      seedDebugButton
    }
  });
}

function buildShell() {
  const wrapper = document.createElement("div");
  wrapper.className = "shell";

  wrapper.innerHTML = `
    <aside class="panel sidebar" aria-label="Project info">
      <div>
        <h1>Apartment Planner MVP</h1>
      </div>
      <p>
        T-0004 runtime foundation. This slice adds the canvas runtime, camera controls, render loop,
        and reducer-based state shells for plan + editor UI.
      </p>
      <div class="meta-row" aria-label="Sprint metadata">
        <div class="pill">
          <strong>Current Sprint</strong>
          S001
        </div>
        <div class="pill">
          <strong>Ticket</strong>
          T-0004
        </div>
      </div>
      <ol class="checklist" aria-label="Immediate next steps">
        <li>Runtime foundation (this ticket): camera + render + state shell.</li>
        <li>T-0005: rectangle selection and drag on Plan Model v0.</li>
        <li>T-0006: rectangle create + resize (no snapping yet).</li>
      </ol>
    </aside>
    <section class="panel editor-frame" aria-label="Editor">
      <div class="toolbar" role="toolbar" aria-label="Editor toolbar">
        <button type="button" class="primary" data-editor-action="plan-reset">New Empty Plan</button>
        <button type="button" data-editor-action="plan-seed-debug">Seed Debug Rects</button>
        <button type="button" data-editor-action="camera-reset">Reset View</button>
        <span class="status" data-editor-status>Initializing editor runtime…</span>
      </div>
      <div class="canvas-shell" data-pan-mode="idle">
        <canvas id="editorCanvas" aria-label="Editor canvas"></canvas>
        <div class="canvas-overlay" data-editor-overlay>
          Runtime foundation loading…
        </div>
      </div>
    </section>
  `;

  return wrapper;
}
