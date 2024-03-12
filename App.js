import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './.expo/compact/exemplo_1';

import Atividade_1 from './.expo/compact/atividade_1';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a681a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
