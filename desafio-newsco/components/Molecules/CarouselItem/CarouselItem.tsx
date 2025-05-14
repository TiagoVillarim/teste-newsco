import { MoreActionsButton } from "@/components/Atoms/MoreActionsButton/MoreActionsButton";
import { PlayJornalAudioButton } from "@/components/Atoms/PlayJornalAudioButton/PlayJornalAudioButton";
import { ReactionButton } from "@/components/Atoms/ReactionButton/ReactionButton";
import { SendButton } from "@/components/Atoms/SendButton/SendButton";
import { TextComponent } from "@/components/Atoms/Text/Text";
import { Image } from "expo-image";
import React from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import { styles } from "./styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export const CarouselItem = ({ item, index, scrollX }: any) => {
    const inputRange = [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
    ];

    const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0],
        extrapolate: "clamp",
    });

    return (
        <Animated.View style={[styles.cardWrapper, { opacity, width: SCREEN_WIDTH }]}>
            <View style={styles.carouselItem}>
                <Image source={item.image} style={styles.carouselImage} contentFit="cover" />
                <View style={styles.overlay} />
                <View style={styles.topRow}>
                    <View style={styles.liveBadge}>
                        <TextComponent Title="Acontecendo agora" fontWeight={700} />
                    </View>
                    <View style={styles.TopRightButtons}>
                        <View style={styles.MoreActionsContainer}>
                            <MoreActionsButton />
                        </View>
                        <View style={styles.PlayJornalAudioContainer}>
                            <PlayJornalAudioButton />
                        </View>
                        <View>
                            <SendButton />
                        </View>
                    </View>
                </View>
                <View style={styles.carouselContent}>
                    <Text style={styles.sectionLabel}>
                        {item.title.toUpperCase()} • 12:55H
                    </Text>
                    <Text style={styles.contentTitle}>{item.contentTitle}</Text>
                    <View style={styles.actionButtons}>
                        <ReactionButton />
                    </View>
                </View>
            </View>
        </Animated.View>
    );
};