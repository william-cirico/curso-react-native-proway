import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

export function PrimeiroComponente() {
    const nome = "William";

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Oi, meu nome é {nome}</Text>
        </View>
    );
}