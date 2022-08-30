import { useState } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Modal } from './components/Modal';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { SegundoComponente } from './components/SegundoComponente';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"blue"} />
      <Modal visible={isModalVisible}>
        <Text>Esse é um Modal</Text>
      </Modal>
      <Text>Olá mundo!</Text>
      <PrimeiroComponente />
      <SegundoComponente />
      <Button title="Mostrar modal" onPress={() => setIsModalVisible(true)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
