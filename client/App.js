import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator'
import { View, Switch, TouchableOpacity, Text, Modal, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        visibility={false}
      // hidden={true}
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
