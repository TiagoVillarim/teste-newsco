import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const SearchButton = () => {
    return (
        <View style={styles.SearchContainer}>
            <TouchableOpacity style={styles.ButtonContainer}>
                <Image
                    source={require('@/assets/Icons/SearchIcon.png')}
                    style={styles.Icon}
                />
            </TouchableOpacity>
        </View>
    )
}
