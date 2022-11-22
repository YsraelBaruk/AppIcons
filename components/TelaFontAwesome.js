import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function FontAwesome() {
  return (
    <View style={styles.container}>
      <Text>FontAwesome</Text>
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
