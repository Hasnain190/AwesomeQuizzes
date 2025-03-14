import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function Button({
  text,
  onPress,
  type = 'primary',
  disabled = false,
}: {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'outline' | 'wrong' | 'correct';
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[type], disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}>
      <Text
        style={[
          styles.text,
          styles[`${type}Text`],
          disabled && styles.disabledText,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  // Button types
  primary: {
    backgroundColor: '#3498db',
  },
  primaryText: {
    color: '#ffffff',
  },
  secondary: {
    backgroundColor: '#f1f5f9',
  },
  secondaryText: {
    color: '#334155',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3498db',
  },
  outlineText: {
    color: '#3498db',
  },
  correct: {
    backgroundColor: '#008000',
  },
  correctText: {
    color: '#ffffff',
  },
  wrong: {
    backgroundColor: '#ff0000',
  },
  wrongText: {
    color: '#ffffff',
  },
  // Disabled state
  disabled: {
    backgroundColor: '#e2e8f0',
    elevation: 0,
    shadowOpacity: 0,
  },
  disabledText: {
    color: '#94a3b8',
  },
});
