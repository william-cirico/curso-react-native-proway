import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TimerDialogScreen } from './screens/TimerDialogScreen';
import { colors } from './styles/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TimerDialogScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
