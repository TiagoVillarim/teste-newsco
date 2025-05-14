import { Image, TouchableOpacity, View } from "react-native"
import { TextComponent } from "../Text/Text"
import { styles } from "./styles"

export const JornalButton = () => {
    return (
        <View>
            <TouchableOpacity style={styles.JornalButtonContainer}>
                <Image
                    source={require('@/assets/Icons/Play.png')}
                    style={styles.Icon}
                />
                <TextComponent Title="Jornal" fontSize={14} fontWeight='600' />
            </TouchableOpacity>
        </View>
    )
}
