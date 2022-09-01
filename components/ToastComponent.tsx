import { Button, ToastAndroid, View } from "react-native";

export function ToastComponent() {
    return (
        <View>
            <Button title="Abrir Toast 01" onPress={() => ToastAndroid.show("Olá mundo!", ToastAndroid.LONG) } />
            <Button title="Abrir Toast 02" onPress={() => ToastAndroid.showWithGravity("Teste", ToastAndroid.LONG, ToastAndroid.TOP) } />
            <Button title="Abrir Toast 03" onPress={() => ToastAndroid.showWithGravityAndOffset("Teste 02", ToastAndroid.LONG, ToastAndroid.TOP, 100, 100) } />
        </View>
    );
}