import { Feather } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Pressable, TextInput, View } from "react-native";
import { COLORS } from "../../constants";

interface TaskInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

export const TaskInput: React.FC<TaskInputProps> = ({
  value,
  onChangeText,
  onSubmit,
  isLoading = false,
}) => {
  const inputRef = useRef<TextInput>(null);
  const hasText = value.trim().length > 0;

  return (
    <View className="mb-6">
      <View className="flex-row items-center bg-mono-800 border border-mono-700 rounded-lg px-3.5 py-2.5">
        <Feather
          name="edit-3"
          size={16}
          color={COLORS.textSecondary}
          style={{ marginRight: 10 }}
        />

        <TextInput
          ref={inputRef}
          className="flex-1 text-mono-0 text-sm py-2.5 font-medium"
          placeholder="Add your next winning move..."
          placeholderTextColor={COLORS.textTertiary}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          returnKeyType="done"
          returnKeyLabel="Add"
          underlineColorAndroid="transparent"
          maxLength={150}
          editable={!isLoading}
        />

        <Pressable
          onPress={onSubmit}
          disabled={!hasText || isLoading}
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          className={`w-8 h-8 rounded-md items-center justify-center ml-2 flex-shrink-0 ${
            hasText ? "bg-mono-600" : "bg-mono-700"
          }`}>
          <Feather
            name="arrow-up"
            size={14}
            color={hasText ? COLORS.text : COLORS.textTertiary}
          />
        </Pressable>
      </View>
    </View>
  );
};
