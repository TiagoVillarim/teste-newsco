import { TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

type FeedButtonProps = {
    Children: React.ReactNode
    onPress: () => void
}

export const FeedButton = ({ Children, onPress }: FeedButtonProps) => {
    return (
        <View>
            <TouchableOpacity style={styles.FeedButtonContainer} onPress={onPress}>
                {Children}
            </TouchableOpacity>
        </View>
    )
}
