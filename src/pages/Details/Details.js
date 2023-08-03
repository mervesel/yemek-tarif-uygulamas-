import React from "react";
import { ActivityIndicator, SafeAreaView,ScrollView,Text, View ,Image,TouchableOpacity,Linking} from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from './Details.styles';

const Details=({route})=>{
    const routeData=route.params?.item || {};
    const {data,loading,error}=useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${routeData.strMeal}`);
    console.log(data.meals);
    if(loading){
        return <ActivityIndicator size="large" />
    }

    if(error){
        return <Text>{error}</Text>
    }
    const handleSubmitYoutube=async()=>{
        await Linking.openURL(data.meals[0].strYoutube);
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <Image style={styles.image}  source={{uri: data.meals[0].strMealThumb}} />
                    <Text style={styles.mealName}>{data.meals[0].strMeal}</Text>
                    <Text style={styles.mealArea}>{data.meals[0].strArea}</Text>
                    <Text style={styles.inst}>{data.meals[0].strInstructions}</Text>
                    <TouchableOpacity style={styles.yoContainer} onPress={handleSubmitYoutube}>
                        <Text style={styles.yoTitle}>Watch on Youtube</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
export default Details;