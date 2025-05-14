import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type CloseStoryButtonProps = {
    closeStory: () => void;
}

export const CloseStoryButton = ({ closeStory }: CloseStoryButtonProps) => {
    return (
        <View style={styles.CloseIconContainer}>
            <TouchableOpacity onPress={closeStory}>
                <Image
                    source={require('@/assets/Icons/CloseIcon.png')}
                    style={styles.CloseIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}