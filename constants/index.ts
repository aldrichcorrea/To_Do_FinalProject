/**
 * Central constants export
 */

export * from "./colors";
export * from "./spacing";

// Storage and configuration
export const STORAGE_KEY = "premium_tasks";
export const ANIMATION_DURATION = 300;
export const HAPTIC_FEEDBACK_ENABLED = true;

export const EMPTY_STATE_MESSAGES = {
  title: "All caught up",
  subtitle: "Your tasks are complete. Time to celebrate! 🎉",
};

export const ERROR_MESSAGES = {
  emptyInput: "Write something first",
  noTasks: "No tasks yet. Add one to get started",
  alreadyAllDone: "All tasks are already completed",
  nothingToClear: "No completed tasks to clear",
};

export const BUTTON_LABELS = {
  add: "Add",
  done: "Done",
  delete: "Delete",
  cancel: "Cancel",
  clear: "Clear",
  allDone: "Mark All Done",
  clearCompleted: "Clear Done",
  confirm: "Confirm",
};
