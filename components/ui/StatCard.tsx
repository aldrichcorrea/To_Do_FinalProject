/**
 * StatCard component - displays single stat
 */

import React from "react";
import { Text, View } from "react-native";

interface StatCardProps {
  label: string;
  value: number;
  variant?: "primary" | "secondary" | "tertiary";
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  variant = "primary",
}) => {
  const bgVariants = {
    primary: "bg-mono-700",
    secondary: "bg-mono-800",
    tertiary: "bg-mono-900",
  };

  return (
    <View className={`flex-1 ${bgVariants[variant]} rounded-lg py-3 items-center border border-mono-700`}>
      <Text className="text-mono-0 text-2xl font-bold">{value}</Text>
      <Text className="text-mono-500 text-xs font-semibold tracking-wide uppercase mt-1">
        {label}
      </Text>
    </View>
  );
};
