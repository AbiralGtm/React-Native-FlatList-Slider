import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Text,Dimensions} from 'react-native';

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(index)}>
      <Image
        style={[styles.image, style, {height: height}]}
        source={local ? item[imageKey] : {uri: item[imageKey]}}
      />
      <Text style={styles.captionBox}>{item.title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
  },
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
  captionBox:{
    padding:5,
    width:Math.round(Dimensions.get('window').width) - 20
  }
});
