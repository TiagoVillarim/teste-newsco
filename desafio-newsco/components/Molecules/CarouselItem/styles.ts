import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    cardWrapper: {
        width
    },
    carouselItem: {
        width,
        height: 400,
        justifyContent: "flex-end",
        position: "relative",
    },
    carouselImage: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%",
        borderRadius: 12,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    topRow: {
        position: "absolute",
        top: 16,
        left: 16,
        right: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    liveBadge: {
        backgroundColor: "#01FF5F4D",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
        marginTop: '-30%',
        borderWidth: 1,
        borderColor: "#01FF5F",
        opacity: 0.7,
    },
    carouselContent: {
        padding: 16,
    },
    sectionLabel: {
        color: "#FF5078",
        fontSize: 13,
        marginBottom: 4,
        fontWeight: "600",
    },
    contentTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 12,
    },
    actionButtons: {
        flexDirection: "row",
        gap: 12,
    },
    actionText: {
        color: "#fff",
        fontSize: 14,
    },
    TopRightButtons: {
        marginTop: 10,

    },
    MoreActionsContainer: {
        marginBottom: 10,
    },
    PlayJornalAudioContainer: {
        marginBottom: 10,
    },
});
