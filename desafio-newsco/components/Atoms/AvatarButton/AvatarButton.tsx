import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const AvatarButton = () => {
    return (
        <View style={styles.AvatarContainer}>
            <TouchableOpacity>
                <Image
                    source={require('@/assets/images/avatar.png')}
                    style={styles.Avatar}
                />
            </TouchableOpacity>
        </View>
    )
}
