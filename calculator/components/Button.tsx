import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    text: string;
    onPress: VoidFunction;
    isBlue?: boolean;
    isGray?: boolean;
};
; 
export function Button(props: Props) {
    let backgroundColor = "#2E2F38";

    if (props.isBlue) {
        backgroundColor = "#4B5EFC";
    } else if (props.isGray) {
        backgroundColor = "#4E505F"
    }

    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={[styles.button, { backgroundColor }]}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    text: {
        fontSize: 32,
        color: "#fff"
    }
});