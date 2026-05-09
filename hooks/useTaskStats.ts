/**
 * Custom hook for calculating task statistics
 */

import { useMemo } from "react";
import { Task, TaskStats } from "../types";
import { calculateTaskStats } from "../utils/taskUtils";

export const useTaskStats = (tasks: Task[]): TaskStats => {
  return useMemo(() => calculateTaskStats(tasks), [tasks]);
};
