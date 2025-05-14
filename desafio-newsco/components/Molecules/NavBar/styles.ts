import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#0A0D10',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#0A0D10',
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8
    },
    navText: {
        marginTop: 4
    }
});