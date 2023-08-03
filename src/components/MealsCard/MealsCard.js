import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './MealsCard.styles';
const MealsCard = ({detail, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onSelect(detail)}>
      <ImageBackground
        style={styles.image}
        source={{uri: detail?.strMealThumb}}
        resizeMethod="stretch"
        imageStyle={{borderRadius: 10}}>
        <View style={styles.inner_container}>
          <Text style={styles.title}> {detail?.strMeal} </Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default MealsCard;
