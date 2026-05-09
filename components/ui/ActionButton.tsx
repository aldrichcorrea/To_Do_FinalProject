import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text } from "react-native";
import { COLORS } from "../../constants";

interface ActionButtonProps {
  label: string;
  icon?: keyof typeof Feather.glyphMap;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  fullWidth?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  onPress,
  variant = "primary",
  disabled = false,
  fullWidth = false,
}) => {
  const variantStyles = {
    primary: "bg-mono-600",
    secondary: "bg-mono-800 border border-mono-700",
    danger: "bg-mono-700 border border-mono-600",
  };

  const textColorMap = {
    primary: "text-mono-0",
    secondary: "text-mono-300",
    danger: "text-mono-300",
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => ({
        opacity: pressed && !disabled ? 0.8 : disabled ? 0.5 : 1,
      })}
      className={`${
        fullWidth ? "flex-1" : ""
      } py-3 px-4 rounded-xl flex-row items-center justify-center gap-2 shadow-md transition-all ${
        variantStyles[variant]
      } ${disabled ? "opacity-50" : ""}`}>
      {icon && <Feather name={icon} size={14} color={COLORS.text} />}
      <Text className={`text-xs font-bold ${textColorMap[variant]}`}>
        {label}
      </Text>
    </Pressable>
  );
};
