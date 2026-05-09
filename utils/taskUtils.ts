/**
 * Utility functions for task operations
 */

import { Task, TaskStats } from "../types";

export const calculateTaskStats = (tasks: Task[]): TaskStats => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.done).length;
  const pending = total - completed;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { total, completed, pending, progress };
};

export const sortTasks = (tasks: Task[]): Task[] => {
  // Sort by: incomplete first, then by created date (newest first)
  return [...tasks].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    return b.createdAt - a.createdAt;
  });
};

export const validateTaskInput = (input: string): boolean => {
  return input.trim().length > 0 && input.trim().length <= 150;
};

export const getTruncatedText = (text: string, maxLength: number = 50): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};
