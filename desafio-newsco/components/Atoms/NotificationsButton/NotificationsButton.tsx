import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const NotificationButton = () => {
    return (
        <View style={styles.NotificationContainer}>
            <TouchableOpacity style={styles.ButtonContainer}>
                <Image
                    source={require('@/assets/Icons/notification.png')}
                    style={styles.Icon}
                />
            </TouchableOpacity>
        </View>
    )
}
