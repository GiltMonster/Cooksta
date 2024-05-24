import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        borderColor: '#B93D80',
        height: '40%',
        backgroundColor: '#ECC4D6',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#B93D80',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 15,
    },
});