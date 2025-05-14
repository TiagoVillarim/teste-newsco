import { Text, TextStyle, View } from "react-native";
import { styles } from "./styles";

type TextComponentProps = {
    Title: string,
    color?: string,
    fontSize?: number
    fontWeight?: TextStyle['fontWeight'];

}

export const TextComponent = ({
    Title,
    color = 'white',
    fontSize = 14,
    fontWeight = '600'
}: TextComponentProps) => {
    return (
        <View>
            <Text style={[
                styles.Title,
                { color, fontSize, fontWeight }
            ]}>{Title}</Text>
        </View>
    )
}
