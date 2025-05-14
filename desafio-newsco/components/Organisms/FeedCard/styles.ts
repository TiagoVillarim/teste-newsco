import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: '#11161A',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: '95%',

    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: undefined,
        minHeight: 250,
        backgroundColor: '#11161A',
        opacity: 0.5
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '40%',
    },
    contentContainer: {
        padding: 16,
    },
    categoryText: {
        color: '#0A58FF',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: -10
    },
    titleText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
        lineHeight: 22,
    },
    descriptionText: {
        color: '#666',
        fontSize: 14,
        lineHeight: 20,
        borderLeftWidth: 2,
        borderLeftColor: 'blue',
        paddingLeft: 10,

    },
    reactionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        marginTop: -15,
    },
    timestampContainer: {
        position: 'absolute',
        top: 12,
        left: 5,
        zIndex: 2,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ButtonsContainer: {
        position: 'absolute',
        top: 12,
        right: '2%',
        zIndex: 2,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    MoreActionsButtonContainer: {
        marginBottom: 10,
    },
    PlayJornalAudioButtonContainer: {
        marginBottom: 10,
    },
    clockIcon: {
        width: 18,
        height: 18,
        marginRight: 6,
        tintColor: '#fff'
    },
    timeText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
});