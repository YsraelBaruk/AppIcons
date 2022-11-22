import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Zocial } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Zocial style={styles.iconWindows} name="windows" size={24} color="black" /> 
      <Text>Bem vindo ao Winddows</Text>

      <Zocial name="appstore" size={24} color="black" />
      <Text></Text>
      <StatusBar style="auto" />
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
