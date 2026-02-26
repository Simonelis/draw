import { panCameraByScreenDelta, zoomCameraAtScreenPoint } from "../geometry/coordinates.js";

const DEFAULT_CAMERA = {
  x: -120,
  y: -80,
  zoom: 1,
  minZoom: 0.2,
  maxZoom: 6
};

export function createInitialEditorState() {
  return {
    tool: "navigate",
    viewport: {
      cssWidth: 1,
      cssHeight: 1,
      dpr: 1
    },
    camera: { ...DEFAULT_CAMERA },
    interaction: {
      mode: "idle",
      pointerId: null,
      lastScreen: null
    }
  };
}

export function editorUiReducer(state, action) {
  switch (action.type) {
    case "editor/viewport/set":
      return {
        ...state,
        viewport: {
          cssWidth: action.cssWidth,
          cssHeight: action.cssHeight,
          dpr: action.dpr
        }
      };

    case "editor/camera/reset":
      return {
        ...state,
        camera: { ...DEFAULT_CAMERA }
      };

    case "editor/camera/panByScreenDelta":
      return {
        ...state,
        camera: panCameraByScreenDelta(state.camera, action.dx, action.dy)
      };

    case "editor/camera/zoomAtScreenPoint":
      return {
        ...state,
        camera: zoomCameraAtScreenPoint(
          state.camera,
          action.screenX,
          action.screenY,
          action.deltaY,
          { minZoom: state.camera.minZoom, maxZoom: state.camera.maxZoom }
        )
      };

    case "editor/interaction/panStart":
      return {
        ...state,
        interaction: {
          mode: "panning",
          pointerId: action.pointerId,
          lastScreen: { x: action.screenX, y: action.screenY }
        }
      };

    case "editor/interaction/panMove":
      if (
        state.interaction.mode !== "panning" ||
        state.interaction.pointerId !== action.pointerId
      ) {
        return state;
      }
      return {
        ...state,
        interaction: {
          ...state.interaction,
          lastScreen: { x: action.screenX, y: action.screenY }
        }
      };

    case "editor/interaction/panEnd":
      if (state.interaction.pointerId !== action.pointerId) {
        return state;
      }
      return {
        ...state,
        interaction: {
          mode: "idle",
          pointerId: null,
          lastScreen: null
        }
      };

    default:
      return state;
  }
}
