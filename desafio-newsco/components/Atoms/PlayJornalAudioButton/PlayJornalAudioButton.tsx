import { BlurView } from "expo-blur";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const PlayJornalAudioButton = () => {
    return (
        <View style={styles.button}>
            <BlurView intensity={100} tint="dark" style={styles.blurInner}>
                <TouchableOpacity >
                    <View >
                        <Image
                            source={require('@/assets/Icons/Play.png')}
                            style={{ width: 20, height: 21 }}
                        />
                    </View>
                </TouchableOpacity>
            </BlurView>
        </View>
    );
};
