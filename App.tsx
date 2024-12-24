import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View  className=' bg-yellow-500 h-screen items-center justify-center '>
      <Text className='  text-3xl font-semibold'>Welcom to GUideBuddy!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
});
