import './global.css'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className = 'flex-1 justify-center items-center bg-green-100'>
      <Text className = 'text-bold text-9xl text-green-600'>
        THE GLEN!
      </Text>
    </SafeAreaView>
  );
}


