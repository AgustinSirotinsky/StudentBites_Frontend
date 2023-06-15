import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function App() {
  const generateSample = () => { console.log('a')}
  return (
    <View style={styles.container}>
      <Text>Holi</Text>
      <Pressable variant="danger" onClick={generateSample}>
        Generate Text Sample
      </Pressable>
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
