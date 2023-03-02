import { StatusBar } from 'expo-status-bar';
import {
  Appearance,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import PageNavigation from './src/pages/pageNavigation/PageNavigation.js';

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    bg: '#fff',
  },
};

const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    bg: '#000',
  },
};

export default function App() {
  let colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <PaperProvider theme={theme}>
      <PageNavigation />
    </PaperProvider>
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
