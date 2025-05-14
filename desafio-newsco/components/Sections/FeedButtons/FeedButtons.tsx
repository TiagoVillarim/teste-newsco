import { TextComponent } from "@/components/Atoms/Text/Text";
import { useState } from "react";
import { View } from "react-native";
import Animated, { Layout, LightSpeedInLeft, LightSpeedOutRight } from "react-native-reanimated";
import { FeedButton } from "../../Atoms/FeedButton/FeedButton";
import { styles } from "./styles";

export default function FeedButtons() {
    const [selectedButton, setSelectedButton] = useState('Para você');

    const handlePress = (buttonTitle: string) => {
        setSelectedButton(buttonTitle);
    };

    return (
        <View style={styles.FeedButtons}>
            <Animated.View
                entering={LightSpeedInLeft}
                exiting={LightSpeedOutRight}
                layout={Layout.springify()}
            >
                <FeedButton
                    onPress={() => handlePress('Para você')}
                    Children={
                        <TextComponent
                            Title="Para você"
                            fontSize={14}
                            fontWeight='600'
                            color={selectedButton === 'Para você' ? '#01FF5E' : '#C3C3C3'}
                        />
                    }
                />
            </Animated.View>
            <Animated.View
                entering={LightSpeedInLeft.delay(100)}
                exiting={LightSpeedOutRight}
                layout={Layout.springify()}
            >
                <FeedButton
                    onPress={() => handlePress('Seu Local')}
                    Children={
                        <TextComponent
                            Title="Seu Local"
                            fontSize={14}
                            fontWeight='600'
                            color={selectedButton === 'Seu Local' ? '#01FF5E' : '#C3C3C3'}
                        />
                    }
                />
            </Animated.View>
        </View>
    )
}