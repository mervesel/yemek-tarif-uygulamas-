import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        margin: 5,
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 10,
   },
   image: {
    width: '35%',
    height: 100,
    resizeMode: 'stretch',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    
   },
   inner_container: {
    flex: 1,
    width: '65%',
    padding: 5
   },
   title: {
    fontSize: 18,
    fontWeight: 'bold'

   },
   desc: {
    fontStyle: 'italic',
    fontSize: 15
   }
    
})