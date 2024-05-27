import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        borderColor: '#B93D80',
        backgroundColor: '#ECC4D6',

    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#B93D80',
        margin: 10
    },
    textContainer: {
        width: 200,
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

    photoGrid: {
        flexDirection: 'row',
        margin: 5,
        width: 100,
        height: 100,
        img: {
            width: 117,
            height: 100,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#B93D80',
            margin: 5
        }
    },
    photoGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 100
    }

});