import React from "react";
import { ActivityIndicator, FlatList, SafeAreaView,Text,View } from "react-native";
import styles from './Meals.styles';
import useFetch from "../../hooks/useFetch/useFetch";
import MealsCard from "../../components/MealsCard/MealsCard";

const Meals=({route,navigation})=>{
    const category=route.params.data || {};
    const {data,loading,error}=useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);

    const handleMealDetail=item=>{
        navigation.navigate('Details',{item})
    }
    
    if(loading) {
        return <ActivityIndicator />
    }

    if(error){
        return <Text> {error} </Text>
    }
 
    const renderMealsDetail=({item})=> <MealsCard detail={item} onSelect={handleMealDetail} />
    return(
        <SafeAreaView style={styles.container}>
            <FlatList keyExtractor={item=>item.idMeal} data={data?.meals} renderItem={renderMealsDetail} style={styles.mealDetail} />
        </SafeAreaView>
    )
}

export default Meals;