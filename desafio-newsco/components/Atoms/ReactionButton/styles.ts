import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SCREEN_WIDTH * 0.1,
        width: '100%',
        alignSelf: 'center',
        zIndex: 1000000
    },
    blurWrap: {
        overflow: 'hidden',
        borderRadius: 8,
        marginHorizontal: SCREEN_WIDTH * 0.01,
    },
    blurInner: {
        width: '100%',
        height: SCREEN_WIDTH * 0.1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#323842',
        borderRadius: 8,
    },
    Button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SCREEN_WIDTH * 0.02,
        paddingVertical: SCREEN_WIDTH * 0.025,
        paddingHorizontal: SCREEN_WIDTH * 0.04,
        width: '100%',
    },
    ButtonText: {
        fontSize: SCREEN_WIDTH * 0.035,
        fontWeight: '600',
        color: '#C3C3C3',
    },
    Icon: {
        width: SCREEN_WIDTH * 0.04,
        height: SCREEN_WIDTH * 0.04,
    },
});