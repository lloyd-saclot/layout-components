import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ListFruits from '../components/listFruits';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the App!</Text>
      <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
        <ListFruits />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    paddingTop: 90,
  },
});