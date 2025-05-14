import { BlurView } from "expo-blur";
import React from "react";
import { Image, Share, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const SendButton = () => {
    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Confira este conteúdo no Newsco: https://play.google.com/store/search?q=newsco&c=apps&hl=pt_BR',
                url: 'https://play.google.com/store/search?q=newsco&c=apps&hl=pt_BR',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Share dismissed');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <View style={styles.button}>
            <BlurView intensity={100} tint="dark" style={styles.blurInner}>
                <TouchableOpacity onPress={handleShare}>
                    <View>
                        <Image
                            source={require('@/assets/Icons/Send.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </View>
                </TouchableOpacity>
            </BlurView>
        </View>
    );
};