import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Auth from './src/Components/Auth'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar visibility={false} />
      <Auth />
    </SafeAreaProvider>
  );
}
