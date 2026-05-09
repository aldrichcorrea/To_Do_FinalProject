import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  Keyboard,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Imports from components, hooks, and constants
import { Header } from "../components/features/Header";
import { ProgressCard } from "../components/features/ProgressCard";
import { TaskList } from "../components/task/TaskList";
import { ActionButton } from "../components/ui/ActionButton";
import { LoadingSkeletons } from "../components/ui/LoadingSkeletons";
import { StatsSection } from "../components/ui/StatsSection";
import { TaskInput } from "../components/ui/TaskInput";

import { COLORS, ERROR_MESSAGES } from "../constants";
import { useTasks, useTaskStats } from "../hooks";

export default function App() {
  const { tasks, loading, addTask, toggleTask, deleteTask, markAllDone, clearCompleted } = useTasks();
  const { total, completed, pending, progress } = useTaskStats(tasks);
  const [input, setInput] = useState("");

  // Personalized greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  };

  // Handle hardware back button
  useEffect(() => {
    const subscription = BackHandler.addEventListener("hardwareBackPress", () => {
      if (Keyboard.isVisible()) {
        Keyboard.dismiss();
        return true;
      }
      return false;
    });

    return () => subscription.remove();
  }, []);

  // Handle task addition
  const handleAddTask = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) {
      Alert.alert("Hold on", ERROR_MESSAGES.emptyInput);
      return;
    }

    const task = addTask(trimmed);
    if (task) {
      setInput("");
    }
  }, [input, addTask]);

  // Handle mark all done
  const handleMarkAllDone = useCallback(() => {
    if (total === 0) {
      Alert.alert("Empty", "Add some tasks first.");
      return;
    }
    if (tasks.every((t) => t.done)) {
      Alert.alert("Already done!", "Nothing left.");
      return;
    }
    markAllDone();
  }, [total, tasks, markAllDone]);

  // Handle clear completed
  const handleClearCompleted = useCallback(() => {
    if (completed === 0) {
      Alert.alert("Nothing to clear", "No completed tasks.");
      return;
    }
    const taskWord = completed > 1 ? "tasks" : "task";
    Alert.alert(
      "Clear completed",
      `Delete ${completed} completed ${taskWord}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          style: "destructive",
          onPress: clearCompleted,
        },
      ]
    );
  }, [completed, clearCompleted]);

  // Handle task deletion
  const handleDeleteTask = useCallback(
    (id: string) => {
      Alert.alert("Delete task", "This action cannot be undone.", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteTask(id),
        },
      ]);
    },
    [deleteTask]
  );

  if (loading) {
    return (
      <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.background }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
        <LoadingSkeletons />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="flex-1"
      style={{ backgroundColor: COLORS.background }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <Header title="My Tasks" subtitle="Stay organized" />

        {/* Main Content */}
        <View className="px-5 pt-6">
          {/* Stats Section */}
          <StatsSection total={total} completed={completed} pending={pending} />

          {/* Progress Card */}
          <ProgressCard progress={progress} completed={completed} total={total} />

          {/* Action Buttons */}
          <View className="flex-row gap-3 mb-6">
            <ActionButton
              label="Mark All Done"
              icon="check-square"
              onPress={handleMarkAllDone}
              variant="primary"
              fullWidth
            />
            <ActionButton
              label="Clear Done"
              icon="trash-2"
              onPress={handleClearCompleted}
              variant="secondary"
              fullWidth
              disabled={completed === 0}
            />
          </View>

          {/* Task Input */}
          <TaskInput
            value={input}
            onChangeText={setInput}
            onSubmit={handleAddTask}
          />

          {/* Task List */}
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={handleDeleteTask}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
