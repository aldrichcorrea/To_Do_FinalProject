import React from "react";
import { Text, View } from "react-native";

interface ProgressCardProps {
  progress: number;
  completed: number;
  total: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  progress,
  completed,
  total,
}) => {
  return (
    <View className="mb-6 bg-gradient-to-r from-mono-800 to-mono-700 rounded-xl border border-mono-600 px-5 py-5 shadow-md">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-mono-200 text-sm font-bold tracking-wide">📊 PROGRESS</Text>
        <Text className="text-mono-100 text-lg font-black">{progress}%</Text>
      </View>

      {/* Progress bar - Enhanced */}
      <View className="h-3 bg-mono-700 rounded-full overflow-hidden mb-4 shadow-inner">
        <View
          className="h-3 bg-gradient-to-r from-mono-300 to-mono-200 rounded-full shadow-md"
          style={{ width: `${progress}%` }}
        />
      </View>

      {/* Stats with emojis */}
      <View className="flex-row justify-between">
        <Text className="text-mono-400 text-xs font-semibold">✅ {completed} Complete</Text>
        <Text className="text-mono-400 text-xs font-semibold">🎯 {total - completed} Remaining</Text>
      </View>
    </View>
  );
};
