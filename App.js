import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Meu primeiro App</Text>
      <ScrollView>
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  },

  title: {
    color: "#FFF",
    fontSize: 24,
    marginBottom: 24
  }
});
