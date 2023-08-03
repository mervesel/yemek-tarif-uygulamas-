import React from "react";
import { SafeAreaView,Text,FlatList ,ActivityIndicator} from "react-native";
import styles from './Categories.styles';
import useFetch from "../../hooks/useFetch/useFetch";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";

const Categories=({navigation})=>{
    const {data,loading,error}=useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    console.log(data.categories);

    if(loading){
        return <ActivityIndicator size="large" />
    }

    if(error){
        return <Text>{error}</Text>
    }
    
    const handleCategorySelect=(data)=>{
        navigation.navigate('Meals', {data})
        
    }

    const renderCategories=({item})=> (
    <CategoriesCard categor={item} onSelect={handleCategorySelect} />);

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data?.categories} keyExtractor={item=>item.idCategory} renderItem={renderCategories}  />
            
        </SafeAreaView>
    )
}

export default Categories;