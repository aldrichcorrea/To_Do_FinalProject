/**
 * Core TypeScript types for the To-Do application
 */

export interface Task {
  id: string;
  text: string;
  done: boolean;
  createdAt: number;
}

export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  progress: number;
}

export interface UIState {
  loading: boolean;
  isKeyboardVisible: boolean;
}

export interface ThemeColors {
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
}
