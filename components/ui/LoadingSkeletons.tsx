/**
 * Loading skeleton component
 */

import React from "react";
import { View } from "react-native";

export const LoadingSkeletons: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-8 h-8 rounded-full border-2 border-mono-700 border-t-mono-400" />
    </View>
  );
};
