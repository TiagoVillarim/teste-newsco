import { BlurView } from 'expo-blur';
import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BTN_WIDTH = 160;
const DURATION = 300;

type ReactionButtonProps = {
    storyId?: number;
}

export const ReactionButton = ({ storyId }: ReactionButtonProps) => {
    const [isLikeButtonPressed, setIsLikeButtonPressed] = useState(false);
    const [isDislikeButtonPressed, setIsDislikeButtonPressed] = useState(false);
    const state = useSharedValue<0 | 1 | 2>(0);

    const dislikeWidth = useSharedValue(BTN_WIDTH);
    const likeWidth = useSharedValue(BTN_WIDTH);

    const dislikeColorFlag = useSharedValue(0);
    const likeColorFlag = useSharedValue(0);

    const reset = () => {
        dislikeWidth.value = withTiming(BTN_WIDTH, { duration: DURATION });
        likeWidth.value = withTiming(BTN_WIDTH, { duration: DURATION });
        dislikeColorFlag.value = withTiming(0, { duration: DURATION });
        likeColorFlag.value = withTiming(0, { duration: DURATION });
        state.value = 0;
        setIsLikeButtonPressed(false);
        setIsDislikeButtonPressed(false);
    };

    const onPressDislike = () => {
        if (state.value === 1) {
            reset();
        } else {
            state.value = 1;
            dislikeWidth.value = withTiming(SCREEN_WIDTH - 40, { duration: DURATION });
            likeWidth.value = withTiming(0, { duration: DURATION });
            dislikeColorFlag.value = withTiming(1, { duration: DURATION });
            likeColorFlag.value = withTiming(0, { duration: DURATION });
            setIsDislikeButtonPressed(!isDislikeButtonPressed);
        }
    };
    const onPressLike = () => {
        if (state.value === 2) {
            reset();
        } else {
            state.value = 2;
            likeWidth.value = withTiming(SCREEN_WIDTH - 40, { duration: DURATION });
            dislikeWidth.value = withTiming(0, { duration: DURATION });
            likeColorFlag.value = withTiming(1, { duration: DURATION });
            dislikeColorFlag.value = withTiming(0, { duration: DURATION });
            setIsLikeButtonPressed(!isLikeButtonPressed);
        }
    };

    const dislikeStyle = useAnimatedStyle(() => ({
        width: dislikeWidth.value,
        opacity: dislikeWidth.value === 0 ? 0 : 1,
        backgroundColor: interpolateColor(
            dislikeColorFlag.value,
            [0, 1],
            ['rgba(17,22,26,0.4)', 'rgba(255,80,80,0.8)']
        ),
    }));
    const likeStyle = useAnimatedStyle(() => ({
        width: likeWidth.value,
        opacity: likeWidth.value === 0 ? 0 : 1,
        backgroundColor: interpolateColor(
            likeColorFlag.value,
            [0, 1],
            ['rgba(17,22,26,0.4)', 'rgba(80,255,80,0.8)']
        ),
    }));

    useEffect(() => {
        reset();
    }, [storyId]);

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPressDislike} >
                <Animated.View style={[styles.blurWrap, dislikeStyle]}>
                    <BlurView intensity={40} tint="dark" style={styles.blurInner}>
                        <View style={styles.Button}>
                            <Image
                                source={require('@/assets/Icons/DislikeIcon.png')}
                                style={styles.Icon}
                            />
                            <Text style={styles.ButtonText}>Menos sobre</Text>
                        </View>
                    </BlurView>
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onPressLike}>
                <Animated.View style={[styles.blurWrap, likeStyle]}>
                    <BlurView intensity={40} tint="dark" style={styles.blurInner}>
                        <View style={styles.Button}>
                            <Image
                                source={require('@/assets/Icons/LikeIcon.png')}
                                style={styles.Icon}
                            />
                            <Text style={styles.ButtonText}>Mais sobre</Text>
                        </View>
                    </BlurView>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
};