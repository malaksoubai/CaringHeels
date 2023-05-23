import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/CaringHeels.png')} />
      <Text style={{ color: '#FFFFFF', fontSize: 25}}>CaringHeels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    font: '#fff',
    backgroundColor: '#4B9CD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
