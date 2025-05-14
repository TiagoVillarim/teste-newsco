import { View } from "react-native"
import { AvatarButton } from "../AvatarButton/AvatarButton"
import { NotificationButton } from "../NotificationsButton/NotificationsButton"
import { SearchButton } from "../SearchButton/SearchButton"
import { styles } from "./styles"

export const HeaderButton = () => {
    return (
        <View style={styles.headerContainer}>
            <SearchButton />
            <NotificationButton />
            <AvatarButton />
        </View>
    )
}
