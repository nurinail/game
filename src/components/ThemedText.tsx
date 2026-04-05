import React from 'react';
import { Text, TextProps } from 'react-native';

const ThemedText: React.FC<TextProps> = (props) => {
  return <Text {...props} />;
};

export default ThemedText;
