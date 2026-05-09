/**
 * ActionSheetModal component - slides up from bottom
 */

import { Feather } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, SafeAreaView, Text, View } from "react-native";
import { COLORS } from "../../constants";

interface ActionSheetModalProps {
  visible: boolean;
  title: string;
  actions: ({
    label: string;
    icon?: keyof typeof Feather.glyphMap;
    onPress: () => void;
    isDangerous?: boolean;
  })[];
  onClose: () => void;
}

export const ActionSheetModal: React.FC<ActionSheetModalProps> = ({
  visible,
  title,
  actions,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <Pressable className="flex-1 bg-black/50" onPress={onClose} />

      <SafeAreaView className="bg-mono-900 border-t border-mono-700">
        <View className="px-5 py-4">
          <Text className="text-mono-0 text-lg font-bold mb-4">{title}</Text>

          {actions.map((action, index) => (
            <Pressable
              key={index}
              onPress={() => {
                action.onPress();
                onClose();
              }}
              className="flex-row items-center py-3 border-b border-mono-800 last:border-b-0">
              {action.icon && (
                <Feather
                  name={action.icon}
                  size={16}
                  color={
                    action.isDangerous ? COLORS.error : COLORS.textSecondary
                  }
                  style={{ marginRight: 12 }}
                />
              )}
              <Text
                className={`text-sm font-medium ${
                  action.isDangerous
                    ? "text-mono-500"
                    : "text-mono-200"
                }`}>
                {action.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );
};
