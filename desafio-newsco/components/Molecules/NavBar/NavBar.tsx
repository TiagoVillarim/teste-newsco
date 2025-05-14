import { TextComponent } from "@/components/Atoms/Text/Text"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const NavBar = () => {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="home" size={24} color="#01FF5E" />
                <View style={styles.navText}>
                    <TextComponent Title="Início" color="#C3C3C3" fontSize={12} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="#FFF" />
                <TextComponent Title="Chat" color="#C3C3C3" fontSize={12} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="albums-outline" size={24} color="#FFF" />
                <TextComponent Title="Jornais" color="#C3C3C3" fontSize={12} />
            </TouchableOpacity>
        </View>
    )
}