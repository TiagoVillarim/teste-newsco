import { CarouselItem } from "@/components/Molecules/CarouselItem/CarouselItem";
import { FeedCarousselCardMock } from "@/Mock(API)/FeedCarousselCard";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, FlatList, PanResponder, View } from "react-native";
import { styles } from "./styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export const CarouselCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const progress = useRef(new Animated.Value(0)).current;
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        animateProgress();
    }, [currentIndex]);

    const animateProgress = () => {
        progress.setValue(0);
        Animated.timing(progress, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const handleNext = () => {
        if (currentIndex < FeedCarousselCardMock.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            flatListRef.current?.scrollToIndex({ index: currentIndex - 1, animated: true });
        }
    };

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return Math.abs(gestureState.dy) > 20;
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy < -50) {
                    handleNext();
                } else if (gestureState.dy > 50) {
                    handlePrevious();
                }
            },
        })
    ).current;

    return (
        <View
            style={styles.carouselContainer}
            onStartShouldSetResponderCapture={() => true}
            {...panResponder.panHandlers}
        >
            <Animated.FlatList
                ref={flatListRef}
                data={FeedCarousselCardMock}
                renderItem={({ item, index }) => (
                    <CarouselItem item={item} index={index} scrollX={scrollX} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                scrollEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(
                        event.nativeEvent.contentOffset.x / SCREEN_WIDTH
                    );
                    setCurrentIndex(index);
                }}
            />
            <View style={styles.progressBarContainer}>
                {FeedCarousselCardMock.map((_, index) => {
                    const isCurrent = index === currentIndex;
                    return (
                        <View key={index} style={styles.progressBarBackground}>
                            {isCurrent ? (
                                <Animated.View
                                    style={[
                                        styles.progressBar,
                                        {
                                            width: progress.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ["0%", "100%"],
                                            }),
                                        },
                                    ]}
                                />
                            ) : (
                                <View style={[styles.progressBar, { width: "0%" }]} />
                            )}
                        </View>
                    );
                })}
            </View>
        </View>
    );
};