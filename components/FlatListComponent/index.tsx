import { FlatList } from "react-native";
import { Pet } from "./Pet";

export default function FlatListComponent() {
    const pets = [
        { id: 1, title: "Cachorro", image: "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg" },
        { id: 2, title: "Gato", image: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg" },
    ] 

    return (
        <FlatList 
            data={pets}
            renderItem={({ item }) => <Pet {...item} />}
            keyExtractor={item => ""+item.id}
        />
    );
}