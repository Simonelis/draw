import { screenToWorld, worldToScreen, zoomCameraAtScreenPoint } from "../../src/editor/geometry/coordinates.js";
import { assertClose, assertEqual, test } from "../test-runner.js";

test("screen/world transforms round-trip at the same camera", () => {
  const camera = { x: -120, y: 80, zoom: 2.5 };
  const world = { x: 33.5, y: -18.25 };
  const screen = worldToScreen(camera, world.x, world.y);
  const roundTrip = screenToWorld(camera, screen.x, screen.y);

  assertClose(roundTrip.x, world.x);
  assertClose(roundTrip.y, world.y);
});

test("zoom at screen point keeps the same world point under cursor", () => {
  const camera = { x: 10, y: -20, zoom: 1.5 };
  const cursor = { x: 240, y: 180 };
  const before = screenToWorld(camera, cursor.x, cursor.y);
  const nextCamera = zoomCameraAtScreenPoint(camera, cursor.x, cursor.y, -120, {
    minZoom: 0.2,
    maxZoom: 6,
    sensitivity: 0.001
  });
  const after = screenToWorld(nextCamera, cursor.x, cursor.y);

  assertClose(after.x, before.x, 1e-6);
  assertClose(after.y, before.y, 1e-6);
  assertEqual(nextCamera.zoom > camera.zoom, true);
});
