import { Button, StyleSheet, Text, View } from "react-native";
import { ToastComponent } from "../ToastComponent";

type Props = {
    onClose: VoidFunction;
}

export function Menu(props: Props) {
    return (
        <View style={styles.container}>
            <Text>Menu 👌</Text>
            <Button title="Fechar Menu" onPress={props.onClose} />
            <ToastComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});