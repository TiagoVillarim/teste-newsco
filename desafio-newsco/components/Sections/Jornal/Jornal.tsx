import { JornalButton } from "@/components/Atoms/JornalButton/JornalButton";
import { TextComponent } from "@/components/Atoms/Text/Text";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export default function Jornal() {

    const [userName] = useState('Gabriel')

    return (
        <View style={styles.JornalContainer}>
            <View>
                <TextComponent Title={`Bom dia, ${userName}.`} color="white" fontSize={16} fontWeight="600" />
                <View style={styles.Location}>
                    <Ionicons name="location-outline" color='#C3C3C3' style={styles.LocationIcon} />
                    <TextComponent Title={'Marília • SP +2'} color="#C3C3C3" fontWeight="500" fontSize={13} />
                    <Ionicons name="chevron-down-outline" color='#01FF5F' style={styles.ArrowDownIcon} />
                </View>
            </View>
            <View >
                <JornalButton />
            </View>
        </View>
    )
}
