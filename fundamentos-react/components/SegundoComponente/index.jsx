import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// Adicione 10 cores diferentes dentro do vetor abaixo
const colors = [
    "red",
    "green",
    "yellow",
    "blue",
    "black",
    "orange",
    "cyan",
    "lime",
    "darkbrown",
    "lightblue"
];

// Crie uma função que retorne uma cor aleatória presente no vetor acima (Utilize a função math.random).
function getRandomColor() {
    return colors[Math.floor(Math.random() * (colors.length - 0) + 0)];
}

export function SegundoComponente() {
    const [color1, setColor1] = useState(getRandomColor());
    const [color2, setColor2] = useState(getRandomColor());
    const [color3, setColor3] = useState(getRandomColor());

    function changeColors() {
        setColor1(getRandomColor())
        setColor2(getRandomColor())
        setColor3(getRandomColor())
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.box, { backgroundColor: color1 }]} />
            <View style={[styles.box, { backgroundColor: color2, flex: 2 }]} />
            <View style={[styles.box, { backgroundColor: color3 }]} />
            <Button title="Clique aqui para mudar de cor" onPress={changeColors} />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        width: "100%",
    }
});