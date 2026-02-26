import { editorUiReducer } from "./editor-ui.js";
import { planReducer } from "./plan.js";

export function createEditorSessionStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState,
    dispatch,
    subscribe
  };

  function getState() {
    return state;
  }

  function dispatch(action) {
    const nextPlan = action.type.startsWith("plan/")
      ? planReducer(state.plan, action)
      : state.plan;

    const nextEditorState = action.type.startsWith("editor/")
      ? editorUiReducer(state.editorState, action)
      : state.editorState;

    if (nextPlan === state.plan && nextEditorState === state.editorState) {
      return state;
    }

    state = {
      plan: nextPlan,
      editorState: nextEditorState
    };

    for (const listener of listeners) {
      listener(state, action);
    }

    return state;
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
}
