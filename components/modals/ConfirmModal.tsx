/**
 * ConfirmModal component - premium modal for confirmations
 */

import React from "react";
import { Alert } from "react-native";

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDangerous?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  isDangerous = false,
  onConfirm,
  onCancel,
}) => {
  // Use native alert for simplicity - can be enhanced to custom modal
  React.useEffect(() => {
    if (visible) {
      Alert.alert(title, message, [
        { text: cancelLabel, style: "cancel", onPress: onCancel },
        {
          text: confirmLabel,
          style: isDangerous ? "destructive" : "default",
          onPress: onConfirm,
        },
      ]);
    }
  }, [visible, title, message, confirmLabel, cancelLabel, isDangerous, onConfirm, onCancel]);

  return null;
};
