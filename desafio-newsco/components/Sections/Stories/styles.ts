import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContent: {
        paddingHorizontal: 10,
        gap: 6,
    },
    storyItem: {
        alignItems: 'center',
        gap: 5,
    },
    storyCircle: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#0A0D10',
        borderWidth: 2,
        borderColor: '#01FF5F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    storyImage: {
        width: '85%',
        height: '85%',
        borderRadius: 100,
    },
    AddStoryButton: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#1D2127',
        borderWidth: 1,
        borderColor: '#323842',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PlusIcon: {
        width: 20,
        height: 20
    },
    storyTitle: {
        fontSize: 12,
        fontWeight: '500',
        maxWidth: 80,
        textAlign: 'center'
    }
})