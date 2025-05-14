import { BlurView } from "expo-blur"
import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const MoreActionsButton = () => {
    return (
        <View style={styles.MoreActionsContainer}>
            <BlurView intensity={100} tint="dark" style={styles.blurInner}>
                <TouchableOpacity >
                    <Image
                        source={require('@/assets/Icons/MoreActions.png')}
                        style={styles.MoreActionsIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </BlurView>
        </View>
    )
}