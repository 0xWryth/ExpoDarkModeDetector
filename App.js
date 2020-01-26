import React from 'react';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { StyleSheet, Text, View } from 'react-native';

Appearance.getColorScheme();

function App() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text>{colorScheme}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default () => (
  <AppearanceProvider>
    <App />
  </AppearanceProvider>
);