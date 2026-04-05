import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
};

export default function Card({ title, subtitle, style }: Props) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    color: '#666',
    fontSize: 13,
  },
});
