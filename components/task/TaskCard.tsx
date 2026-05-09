import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { COLORS } from "../../constants";
import { Task } from "../../types";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onDelete }) => {
  return (
    <Pressable
      onPress={() => onToggle(task.id)}
      style={({ pressed }) => ({
        opacity: pressed ? 0.7 : 1,
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
      className="mb-3">
      <View
        className={`flex-row items-center rounded-xl border-2 px-4 py-3.5 shadow-sm transition-all ${
          task.done
            ? "bg-mono-900 border-mono-600 opacity-70"
            : "bg-gradient-to-r from-mono-800 to-mono-750 border-mono-600"
        }`}
        style={{ borderWidth: 2 }}>
        {/* Indicator line */}
        <View
          className={`w-1 h-10 rounded-full mr-3 ${
            task.done ? "bg-mono-600" : "bg-mono-400"
          }`}
        />

        {/* Checkbox */}
        <Pressable
          onPress={() => onToggle(task.id)}
          style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
          className={`w-5 h-5 rounded-md border-1.5 items-center justify-center mr-3 flex-shrink-0 ${
            task.done
              ? "bg-mono-700 border-mono-600"
              : "bg-transparent border-mono-600"
          }`}>
          {task.done && <Feather name="check" size={12} color={COLORS.text} />}
        </Pressable>

        {/* Task text */}
        <Text
          numberOfLines={2}
          className={`flex-1 text-sm font-medium leading-5 ${
            task.done
              ? "text-mono-500 line-through"
              : "text-mono-100"
          }`}>
          {task.text}
        </Text>

        {/* Delete button */}
        <Pressable
          onPress={() => onDelete(task.id)}
          style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
          className="w-8 h-8 rounded-md items-center justify-center ml-2 flex-shrink-0">
          <Feather name="trash-2" size={14} color={COLORS.textTertiary} />
        </Pressable>
      </View>
    </Pressable>
  );
};
