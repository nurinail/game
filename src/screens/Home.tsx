import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import ThemedText from '../components/ThemedText';
import Card from '../components/Card';

export default function Home() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>QuickFun</ThemedText>

      <View style={styles.grid}>
        <Link href="/games/tap-speed">
          <Card title="Tap Speed" subtitle="Fast taps, big rewards" />
        </Link>
        <Link href="/games/memory">
          <Card title="Memory" subtitle="Match the pairs" />
        </Link>
        <Link href="/games/reflex">
          <Card title="Reflex" subtitle="Test your reaction" />
        </Link>
        <Link href="/games/quiz">
          <Card title="Quiz" subtitle="10 quick questions" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
});
