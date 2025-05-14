import { CloseStoryButton } from "@/components/Atoms/CloseStoryButton/CloseStoryButton";
import { MoreActionsButton } from "@/components/Atoms/MoreActionsButton/MoreActionsButton";
import { PlayJornalAudioButton } from "@/components/Atoms/PlayJornalAudioButton/PlayJornalAudioButton";
import { ReactionButton } from "@/components/Atoms/ReactionButton/ReactionButton";
import { SendButton } from "@/components/Atoms/SendButton/SendButton";
import { StoriesBottomContent } from "@/components/Molecules/StoriesBottomContent/StoriesBottomContent";
import { useStoryContext } from "@/context/StoryContext";
import { categoryColors } from "@/globalStyle/theme";
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { styles } from "./styles";

const SWIPE_CLOSE_THRESHOLD = 100;

export const StoryContent = () => {
    const {
        currentStory,
        progress,
        fadeAnim,
        translateX,
        translateY,
        goToNext,
        goToPrevious,
        closeStory,
        pauseProgress,
        resumeProgress
    } = useStoryContext();

    const progressStyle = useAnimatedStyle(() => ({
        width: `${progress.value * 100}%`,
    }));

    const swipeGesture = Gesture.Pan()
        .onUpdate((e) => {
            translateY.value = e.translationY;
        })
        .onEnd((e) => {
            if (e.translationY > SWIPE_CLOSE_THRESHOLD) {
                runOnJS(closeStory)();
            }
            else if (e.translationY < -SWIPE_CLOSE_THRESHOLD) {
                translateY.value = withTiming(0, { duration: 200 });
            }
            else if (e.translationX < -50) {
                runOnJS(goToNext)();
            } else if (e.translationX > 50) {
                runOnJS(goToPrevious)();
            } else {
                translateY.value = withTiming(0, { duration: 200 });
            }
        });

    const containerStyle = useAnimatedStyle(() => ({
        opacity: fadeAnim.value,
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));

    return (
        <View style={styles.container}>
            <GestureDetector gesture={swipeGesture}>
                <Animated.View style={[styles.fullScreen, containerStyle]}>
                    <View style={styles.fullScreen}>
                        <Image
                            source={currentStory.image}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <View style={styles.InteractionButtons}>
                            <View style={styles.PlayButton}>
                                <PlayJornalAudioButton />
                            </View>
                            <View style={styles.SendButton}>
                                <SendButton />
                            </View>
                        </View>
                        <View style={styles.bottomContentWrapper}>
                            <StoriesBottomContent
                                category={`${currentStory.title} • 12:55H`}
                                categoryColor={categoryColors[currentStory.title] || '#FFF'}
                                categoryFontSize={14}
                                categoryFontWeight={'700'}
                                title={currentStory.contentTitle || ""}
                                titleColor="#FFF"
                                titleFontSize={24}
                                titleFontWeight={'700'}
                                description={currentStory.description || ""}
                                descriptionColor="#C3C3C3"
                                descriptionFontSize={13}
                                descriptionFontWeight={'400'}
                            />
                            <ReactionButton storyId={currentStory.id} />

                        </View>
                        <View style={styles.progressBarContainer}>
                            <Animated.View style={[styles.progressBar, progressStyle]} />
                        </View>
                        <View style={styles.storyHighlight}>
                            <View style={styles.storyCircle}>
                                <Image
                                    source={currentStory.image}
                                    style={styles.storyImage}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.title}>{currentStory.title}</Text>
                        </View>
                        <View style={styles.actionsButtons}>
                            <MoreActionsButton />
                            <CloseStoryButton closeStory={closeStory} />
                        </View>

                        <View style={styles.touchZones}>
                            <TouchableOpacity style={styles.leftZone} onPress={goToPrevious} />
                            <TouchableOpacity style={styles.rightZone} onPress={goToNext} />
                        </View>

                        <TouchableWithoutFeedback
                            onPressIn={pauseProgress}
                            onPressOut={resumeProgress}
                        >
                            <View style={styles.pauseZone} />
                        </TouchableWithoutFeedback>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};
