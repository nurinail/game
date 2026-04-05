import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
};

export default function Button({ title, style, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.btn, style]} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#2b6cb0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
