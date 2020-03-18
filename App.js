import React from 'react';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { StyleSheet, Text, View } from 'react-native';

Appearance.getColorScheme();

function App() {
  const colorScheme = useColorScheme();

  const container = colorScheme === "dark" ? [styles.container, styles.containerDark] : styles.container;
  const text = colorScheme === "dark" ? [styles.text, styles.textDark] : styles.text;

  return (
    <View style={container}>
      <Text style={text}>{colorScheme}</Text>
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
  text: {
    color: "#000",
  },
  containerDark: {
    backgroundColor: "#000",
  },
  textDark: {
    color: "#fff",
  },
});


export default () => (
  <AppearanceProvider>
    <App />
  </AppearanceProvider>
);