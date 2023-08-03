import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './CategoriesCard.styles';

const CategoriesCard = ({categor, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onSelect(categor)}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={{uri: categor.strCategoryThumb}} />
        <View style={styles.inner_container}>
          <Text style={styles.title}> {categor.strCategory} </Text>
          <Text numberOfLines={3} style={styles.desc}>
            {categor.strCategoryDescription}
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default CategoriesCard;
