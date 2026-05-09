import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../constants";

export const EmptyState: React.FC = () => {
  return (
    <View className="items-center py-16">
      <View className="w-16 h-16 rounded-2xl bg-mono-800 border border-mono-700 items-center justify-center mb-4">
        <Feather name="check-circle" size={32} color={COLORS.textSecondary} />
      </View>
      <Text className="text-mono-200 text-base font-bold mb-1">All tasks done</Text>
      <Text className="text-mono-500 text-sm">
        No tasks to do. Add one when ready.
      </Text>
    </View>
  );
};
