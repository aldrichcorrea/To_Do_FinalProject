import React from "react";
import { View } from "react-native";
import { StatCard } from "./StatCard";

interface StatsSectionProps {
  total: number;
  completed: number;
  pending: number;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  total,
  completed,
  pending,
}) => {
  return (
    <View className="flex-row gap-3 mb-6">
      <StatCard label="📋 Total" value={total} variant="primary" />
      <StatCard label="✅ Done" value={completed} variant="secondary" />
      <StatCard label="🔥 Active" value={pending} variant="tertiary" />
    </View>
  );
};
