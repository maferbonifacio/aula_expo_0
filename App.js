import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './.expo/compact/exemplo_1';
import Exemplo2 from './.expo/compact/exemplo_2'; 
import Exemplo_3 from './.expo/compact/exemplo_3'; 

import Atividade_1 from './.expo/compact/atividade_1';
import Atividade_2 from './.expo/compact/atividade_2';
import Atividade_3 from './.expo/compact/atividade_3';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf86b4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
