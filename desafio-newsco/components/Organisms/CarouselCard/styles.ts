import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    carouselContainer: {
        width,
        height: 400,
        position: "relative",
    },
    progressBarContainer: {
        position: "absolute",
        top: 0,
        left: 10,
        right: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 6,
        gap: 4,
    },
    progressBarBackground: {
        flex: 1,
        height: 4,
        backgroundColor: "#444",
        borderRadius: 2,
        overflow: "hidden",
    },
    progressBar: {
        height: 4,
        backgroundColor: "#01FF5E",
    },
    leftOverlay: {
        flex: 1,
    },
    rightOverlay: {
        flex: 1,
    },
});
