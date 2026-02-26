const registeredTests = [];

export function test(name, fn) {
  if (typeof name !== "string" || !name) {
    throw new Error("Test name must be a non-empty string.");
  }
  if (typeof fn !== "function") {
    throw new Error(`Test "${name}" must provide a function.`);
  }
  registeredTests.push({ name, fn });
}

export function assert(condition, message = "Assertion failed.") {
  if (!condition) {
    throw new Error(message);
  }
}

export function assertEqual(actual, expected, message = null) {
  if (actual !== expected) {
    throw new Error(message ?? `Expected ${formatValue(expected)} but received ${formatValue(actual)}.`);
  }
}

export function assertClose(actual, expected, epsilon = 1e-6, message = null) {
  if (!Number.isFinite(actual) || !Number.isFinite(expected)) {
    throw new Error(message ?? `assertClose requires finite numbers (got ${actual}, ${expected}).`);
  }
  if (Math.abs(actual - expected) > epsilon) {
    throw new Error(
      message ?? `Expected ${formatValue(actual)} to be within ${epsilon} of ${formatValue(expected)}.`
    );
  }
}

export function assertDeepEqual(actual, expected, message = null) {
  if (!deepEqual(actual, expected)) {
    throw new Error(message ?? `Deep equality failed.\nExpected: ${formatValue(expected)}\nActual: ${formatValue(actual)}`);
  }
}

export async function runRegisteredTests(options = {}) {
  const summaryElement = options.summaryElement ?? null;
  const resultsElement = options.resultsElement ?? null;
  const startedAt = performance.now();
  const results = [];

  for (const entry of registeredTests) {
    const start = performance.now();
    try {
      await entry.fn();
      results.push({
        name: entry.name,
        status: "pass",
        durationMs: performance.now() - start
      });
    } catch (error) {
      results.push({
        name: entry.name,
        status: "fail",
        durationMs: performance.now() - start,
        error
      });
    }
  }

  renderResults(results, performance.now() - startedAt, summaryElement, resultsElement);
  window.__APP_TEST_RESULTS__ = results;
  return results;
}

function renderResults(results, totalDurationMs, summaryElement, resultsElement) {
  const passed = results.filter((result) => result.status === "pass").length;
  const failed = results.length - passed;

  if (summaryElement) {
    summaryElement.classList.toggle("pass", failed === 0);
    summaryElement.classList.toggle("fail", failed > 0);
    summaryElement.textContent =
      failed === 0
        ? `PASS - ${passed}/${results.length} tests passed in ${totalDurationMs.toFixed(1)}ms`
        : `FAIL - ${failed} failed, ${passed} passed (${results.length} total) in ${totalDurationMs.toFixed(1)}ms`;
  }

  if (!resultsElement) {
    return;
  }

  resultsElement.replaceChildren();
  for (const result of results) {
    const item = document.createElement("li");
    const label = document.createElement("div");
    label.innerHTML = result.status === "pass"
      ? `<strong class="pass-label">PASS</strong> ${escapeHtml(result.name)} <small>(${result.durationMs.toFixed(1)}ms)</small>`
      : `<strong class="fail-label">FAIL</strong> ${escapeHtml(result.name)} <small>(${result.durationMs.toFixed(1)}ms)</small>`;
    item.append(label);

    if (result.error) {
      const detail = document.createElement("pre");
      detail.textContent = result.error && result.error.stack ? result.error.stack : String(result.error);
      item.append(detail);
    }

    resultsElement.append(item);
  }
}

function deepEqual(a, b) {
  if (Object.is(a, b)) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a == null || b == null) {
    return a === b;
  }

  if (typeof a !== "object") {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let index = 0; index < a.length; index += 1) {
      if (!deepEqual(a[index], b[index])) {
        return false;
      }
    }
    return true;
  }

  const aKeys = Object.keys(a).sort();
  const bKeys = Object.keys(b).sort();
  if (!deepEqual(aKeys, bKeys)) {
    return false;
  }

  for (const key of aKeys) {
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

function formatValue(value) {
  if (typeof value === "string") {
    return JSON.stringify(value);
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
