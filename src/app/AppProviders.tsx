import React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: Props) {
  // Keep this minimal for now. We'll add providers (Zustand persistence,
  // I18n context, Reanimated setup) as we implement features.
  return <>{children}</>;
}
