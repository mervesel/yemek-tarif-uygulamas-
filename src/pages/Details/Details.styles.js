import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        marginBottom: 50

    },

    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch'

    },
    yoTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'

    },
    mealName: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,

    },
    mealArea: {
        margin: 10,
        color: '#333'
    },
    inst: {
        margin: 10,

    },
    yoContainer: {
        backgroundColor: 'red',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,


    }
    
})