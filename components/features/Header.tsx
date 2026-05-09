import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../constants";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = "My Tasks",
}) => {
  return (
    <View className="bg-mono-900 px-5 pt-6 pb-6 border-b border-mono-800">
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-1">
          <Text className="text-mono-0 text-3xl font-bold tracking-tight">
            {title}
          </Text>
        </View>
        <View className="w-11 h-11 rounded-lg bg-mono-800 border border-mono-700 items-center justify-center">
          <Feather name="check" size={24} color={COLORS.textSecondary} />
        </View>
      </View>
    </View>
  );
};
