import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#0A0D10',
        height: "10%",
        position: 'absolute',
        top: 0,
        zIndex: 10000000,
        justifyContent: 'space-between',
    },
    Image: {
        marginTop: 20,
        marginLeft: 25,
        width: 137,
        height: 20
    }
});