import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                    name="App"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="StoryScreen"
                    options={{
                        headerShown: false,
                        animation: 'fade_from_bottom',
                        gestureEnabled: false,
                    }}
                />
            </Stack>
        </GestureHandlerRootView>
    )
}