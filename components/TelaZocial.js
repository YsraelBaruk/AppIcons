import { StyleSheet, Text, View } from 'react-native';
import { Zocial } from '@expo/vector-icons';

export default function TelaZocial() {
  return (
    <View style={styles.container}>
      <Text>Zocial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
