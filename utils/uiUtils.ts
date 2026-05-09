/**
 * UI utility functions
 */

export const formatNumber = (num: number): string => {
  return num.toString().padStart(2, "0");
};

export const getInitialLetter = (text: string): string => {
  return text.charAt(0).toUpperCase();
};

export const getPressedOpacity = (pressed: boolean): number => {
  return pressed ? 0.7 : 1;
};
