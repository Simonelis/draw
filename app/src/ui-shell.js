export function createEditorShell(root) {
  root.replaceChildren(buildShell());
  const canvas = root.querySelector("canvas");
  if (!canvas) return;
  setupCanvasPlaceholder(canvas);
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
        Sprint 1 scaffold. This is the new app shell where the prototype editor will be ported next.
      </p>
      <div class="meta-row" aria-label="Sprint metadata">
        <div class="pill">
          <strong>Current Sprint</strong>
          S001
        </div>
        <div class="pill">
          <strong>Ticket</strong>
          T-0001
        </div>
      </div>
      <ol class="checklist" aria-label="Immediate next steps">
        <li>Port rectangle editor behavior from prototype.</li>
        <li>Keep state in a plan object.</li>
        <li>Add autosave and reopen.</li>
      </ol>
    </aside>
    <section class="panel editor-frame" aria-label="Editor">
      <div class="toolbar" role="toolbar" aria-label="Editor toolbar">
        <button type="button" class="primary">New Plan</button>
        <button type="button">Open Sample</button>
        <button type="button">Save (stub)</button>
        <span class="status">Editor shell ready. Prototype port is next.</span>
      </div>
      <div class="canvas-shell">
        <canvas id="editorCanvas" aria-label="Editor canvas"></canvas>
        <div class="canvas-overlay">
          Canvas placeholder only. This page confirms the app scaffold, ES module loading, and layout for the editor.
        </div>
      </div>
    </section>
  `;

  return wrapper;
}

function setupCanvasPlaceholder(canvas) {
  const context = canvas.getContext("2d");
  if (!context) return;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawPlaceholder(context, rect.width, rect.height);
  };

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  window.addEventListener("resize", resize);
  resize();
}

function drawPlaceholder(context, width, height) {
  context.clearRect(0, 0, width, height);

  context.save();
  context.translate(width / 2, height / 2);

  context.strokeStyle = "rgba(11, 110, 79, 0.4)";
  context.lineWidth = 1.5;
  context.setLineDash([8, 8]);
  context.strokeRect(-180, -110, 360, 220);

  context.setLineDash([]);
  context.fillStyle = "rgba(11, 110, 79, 0.06)";
  context.fillRect(-180, -110, 360, 220);

  context.fillStyle = "#1f1f1f";
  context.font = "600 18px Georgia, serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("Editor Placeholder", 0, -8);

  context.fillStyle = "rgba(31, 31, 31, 0.65)";
  context.font = "13px Georgia, serif";
  context.fillText("T-0001 complete when this runs via local server", 0, 20);
  context.restore();
}
