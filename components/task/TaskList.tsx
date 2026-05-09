/**
 * TaskList component - displays all tasks
 */

import React from "react";
import { View } from "react-native";
import { Task } from "../../types";
import { EmptyState } from "../ui/EmptyState";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggle,
  onDelete,
}) => {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <View className="gap-2">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </View>
  );
};
