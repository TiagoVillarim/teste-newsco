import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: "#000",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "60%",
        position: "absolute",
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        opacity: 0.6,
    },
    InteractionButtons: {
        position: "absolute",
        bottom: screenHeight * 0.45,
        left: '8%',
        right: '8%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 2,
    },
    PlayButton: {
        width: 50,
        height: 50,
        alignItems: "center",
    },
    SendButton: {
        width: 50,
        height: 50,
        alignItems: "center",
    },
    progressBarContainer: {
        position: "absolute",
        top: 25,
        left: 10,
        right: 10,
        width: "95%",
        height: 4,
        backgroundColor: "#333",
    },
    progressBar: {
        height: "100%",
        backgroundColor: "#01FF5F",
    },
    title: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "600",
        paddingLeft: 15,
    },
    touchZones: {
        position: "absolute",
        width: "100%",
        height: "100%",
        flexDirection: "row",
    },
    leftZone: {
        flex: 1,
    },
    rightZone: {
        flex: 1,
    },
    pauseZone: {
        position: "absolute",
        top: 0,
        left: "33%",
        width: "34%",
        height: "100%",
        zIndex: 10,
    },
    storyHighlight: {
        position: "absolute",
        top: 50,
        left: 10,
        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    storyCircle: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderColor: '#01FF5F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    storyImage: {
        width: '85%',
        height: '85%',
        borderRadius: 100,
    },
    bottomContentWrapper: {
        position: 'absolute',
        top: screenHeight * 0.6 + 16,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        zIndex: 2,
    },
    fullScreen: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    actionsButtons: {
        position: 'absolute',
        right: 30,
        top: 70,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10000000
    }
});
