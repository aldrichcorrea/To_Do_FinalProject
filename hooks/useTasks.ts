/**
 * Custom hook for managing tasks
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { storageService } from "../services/storage";
import { Task } from "../types";
import { sortTasks } from "../utils/taskUtils";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const isInitialized = useRef(false);

  // Load tasks from storage on mount
  useEffect(() => {
    if (!isInitialized.current) {
      loadTasks();
      isInitialized.current = true;
    }
  }, []);

  // Save tasks to storage whenever they change
  useEffect(() => {
    if (!loading) {
      storageService.saveTasks(tasks);
    }
  }, [tasks, loading]);

  const loadTasks = async () => {
    try {
      const savedTasks = await storageService.getTasks();
      setTasks(sortTasks(savedTasks));
    } catch (error) {
      console.error("Failed to load tasks:", error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  const addTask = useCallback((text: string): Task | null => {
    const trimmed = text.trim();
    if (!trimmed || trimmed.length > 150) return null;

    const newTask: Task = {
      id: Date.now().toString(),
      text: trimmed,
      done: false,
      createdAt: Date.now(),
    };

    setTasks((prev) => sortTasks([newTask, ...prev]));
    return newTask;
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      sortTasks(prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const markAllDone = useCallback(() => {
    setTasks((prev) => sortTasks(prev.map((t) => ({ ...t, done: true }))));
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((t) => !t.done));
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      sortTasks(
        prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
      )
    );
  }, []);

  return {
    tasks,
    loading,
    addTask,
    toggleTask,
    deleteTask,
    markAllDone,
    clearCompleted,
    updateTask,
    setTasks,
  };
};
