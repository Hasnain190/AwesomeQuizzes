// OptionButton.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type CustomButtonProps = {
  text: string;
  onPress: () => void;
  isSelected: boolean;
  isCorrect: boolean | null;
  disabled: boolean;
};

const CustomButton = ({
  text,
  onPress,
  isSelected,
  isCorrect,
  disabled,
}: CustomButtonProps) => {
  let backgroundColor = '#e0e0e0'; // Default color
  let textColor = '#212121'; // Default text color

  if (isSelected && isCorrect === true) {
    backgroundColor = '#8bc34a';
    textColor = '#ffffff';
    // Green for correct
  } else if (isSelected && isCorrect === false) {
    backgroundColor = '#f44336';
    textColor = '#ffffff';
    // Red for incorrect
  } else if (isSelected) {
    backgroundColor = '#2196f3';
    textColor = '#ffffff';

    // Blue for selected but not submitted
  }

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 1,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#212121',
  },
});

export default CustomButton;
