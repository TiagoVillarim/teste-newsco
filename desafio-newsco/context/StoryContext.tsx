import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import {
    cancelAnimation,
    Easing,
    runOnJS,
    SharedValue,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');
const STORY_DURATION = 5000;

type StoryContextType = {
    currentStory: any;
    progress: SharedValue<number>;
    fadeAnim: SharedValue<number>;
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
    goToNext: () => void;
    goToPrevious: () => void;
    closeStory: () => void;
    pauseProgress: () => void;
    resumeProgress: () => void;
};

const StoryContext = createContext<StoryContextType | null>(null);

export const StoryProvider = ({
    children,
    stories,
    initialIndex,
    onClose
}: {
    children: React.ReactNode;
    stories: any[];
    initialIndex: number;
    onClose: () => void;
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const progress = useSharedValue(0);
    const fadeAnim = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const lastProgressTime = useRef(Date.now());
    const remainingTime = useRef(STORY_DURATION);
    const wasPaused = useRef(false);

    const startProgress = useCallback(() => {
        lastProgressTime.current = Date.now();

        progress.value = withTiming(
            1,
            {
                duration: STORY_DURATION,
                easing: Easing.linear,
            },
            (finished) => {
                if (finished) runOnJS(goToNext)();
            }
        );
    }, [currentIndex]);

    const resumeProgress = useCallback(() => {
        lastProgressTime.current = Date.now();
        progress.value = withTiming(
            1,
            {
                duration: remainingTime.current,
                easing: Easing.linear,
            },
            (finished) => {
                if (finished) runOnJS(goToNext)();
            }
        );
    }, []);

    const pauseProgress = useCallback(() => {
        cancelAnimation(progress);
        const elapsed = Date.now() - lastProgressTime.current;
        remainingTime.current = Math.max(remainingTime.current - elapsed, 0);
        wasPaused.current = true;
    }, []);

    const goToNext = useCallback(() => {
        if (currentIndex < stories.length - 1) {
            translateX.value = withTiming(-screenWidth, { duration: 300 }, () => {
                runOnJS(setCurrentIndex)(currentIndex + 1);
                translateX.value = screenWidth;
                translateX.value = withTiming(0, { duration: 300 });
            });
        } else {
            closeStory();
        }
    }, [currentIndex, stories.length]);


    const goToPrevious = useCallback(() => {
        if (currentIndex > 0) {
            translateX.value = withTiming(screenWidth, { duration: 300 }, () => {
                runOnJS(setCurrentIndex)(currentIndex - 1);
                translateX.value = -screenWidth;
                translateX.value = withTiming(0, { duration: 300 });
            });
        } else {
            closeStory();
        }
    }, [currentIndex]);

    const closeStory = useCallback(() => {
        fadeAnim.value = withTiming(0, { duration: 200 });
        translateY.value = withTiming(150, { duration: 200 }, () => {
            runOnJS(onClose)();
        });
    }, [onClose]);

    useEffect(() => {
        progress.value = 0;
        remainingTime.current = STORY_DURATION;
        wasPaused.current = false;

        fadeAnim.value = withTiming(1, { duration: 300 });
        startProgress();

    }, [currentIndex, startProgress]);

    const value = {
        currentStory: stories[currentIndex],
        progress,
        fadeAnim,
        translateX,
        translateY,
        goToNext,
        goToPrevious,
        closeStory,
        pauseProgress,
        resumeProgress
    };

    return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>;
};

export const useStoryContext = () => {
    const context = useContext(StoryContext);
    if (!context) {
        throw new Error('Error');
    }
    return context;
};