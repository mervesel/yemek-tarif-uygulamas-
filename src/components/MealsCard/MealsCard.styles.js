import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        width: '100%',
        height: 220,
        marginBottom: 10,
        justifyContent: 'flex-end'
    },
    inner_container: {
        width: '100%',
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
        marginRight: 10,
    }
})