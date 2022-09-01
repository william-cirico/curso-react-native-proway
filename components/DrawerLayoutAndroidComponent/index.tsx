import { useRef } from "react";
import { Button, DrawerLayoutAndroid, StyleSheet, Text, View } from "react-native";
import { Menu } from "./Menu";

export function DrawerLayoutAndroidComponent() {
    const menuRef = useRef<DrawerLayoutAndroid>(null!);

    return (
        <DrawerLayoutAndroid
            drawerPosition="right"
            drawerWidth={330}
            renderNavigationView={() => <Menu onClose={() => menuRef.current.closeDrawer()} />}
            ref={menuRef}
        >
            <View style={styles.container}>
                <Text>Arraste para o lado para abrir o menu 😁</Text>
                <Button title="Abrir o menu" onPress={() => menuRef.current.openDrawer()} />
            </View>
        </DrawerLayoutAndroid>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});