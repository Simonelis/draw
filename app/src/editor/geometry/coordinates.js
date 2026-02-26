export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function screenToWorld(camera, screenX, screenY) {
  return {
    x: camera.x + screenX / camera.zoom,
    y: camera.y + screenY / camera.zoom
  };
}

export function worldToScreen(camera, worldX, worldY) {
  return {
    x: (worldX - camera.x) * camera.zoom,
    y: (worldY - camera.y) * camera.zoom
  };
}

export function panCameraByScreenDelta(camera, deltaScreenX, deltaScreenY) {
  return {
    ...camera,
    x: camera.x - deltaScreenX / camera.zoom,
    y: camera.y - deltaScreenY / camera.zoom
  };
}

export function zoomCameraAtScreenPoint(camera, screenX, screenY, wheelDeltaY, options = {}) {
  const minZoom = options.minZoom ?? 0.2;
  const maxZoom = options.maxZoom ?? 6;
  const sensitivity = options.sensitivity ?? 0.001;

  const before = screenToWorld(camera, screenX, screenY);
  const nextZoom = clamp(camera.zoom * Math.exp(-wheelDeltaY * sensitivity), minZoom, maxZoom);

  const zoomedCamera = {
    ...camera,
    zoom: nextZoom
  };

  const after = screenToWorld(zoomedCamera, screenX, screenY);

  return {
    ...zoomedCamera,
    x: camera.x + (before.x - after.x),
    y: camera.y + (before.y - after.y)
  };
}
