# ExpoDarkModeDetector

This project show how to use react-native-appearance to detect current user's color scheme.

It may not works with every Android version. Please see [react-native-appearance](https://github.com/expo/react-native-appearance) for more informations.

---

App.js

```javascript
import React from 'react';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { StyleSheet, Text, View } from 'react-native';

Appearance.getColorScheme();

function App() {
  var colorScheme = useColorScheme();

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
    <App/>
  </AppearanceProvider>
);
```
