/**
 * Storage service for persistent task management
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../constants";
import { Task } from "../types";

class StorageService {
  async getTasks(): Promise<Task[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error reading tasks from storage:", error);
      return [];
    }
  }

  async saveTasks(tasks: Task[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to storage:", error);
    }
  }

  async clearAllTasks(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing tasks from storage:", error);
    }
  }

  async addTask(text: string): Promise<Task> {
    const task: Task = {
      id: Date.now().toString(),
      text,
      done: false,
      createdAt: Date.now(),
    };
    return task;
  }
}

export const storageService = new StorageService();
