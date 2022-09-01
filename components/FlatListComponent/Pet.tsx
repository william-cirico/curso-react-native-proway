import { Image, Text, View } from "react-native";

type Props = {
    id: number;
    title: string;
    image: string;
}

export function Pet(props: Props) {
    return (
        <View style={{ flex: 1 }}>
            <Text>{props.title}</Text>
            <Image 
                source={{ uri: props.image }}
                style={{ width: 300, height: 300 }}
            />
        </View>
    );
}