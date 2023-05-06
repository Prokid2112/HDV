import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-animatable';
import R from '../../../../assets/R';
import {HEIGHT, WIDTH} from '../../../../config';

const TruyenItem = (props: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props?.navigation.navigate('ChiTietSach');
      }}>
      <Image
        resizeMethod="auto"
        resizeMode="contain"
        source={R.images.bookCover}
        style={styles.image}
      />
      <Text style={styles.text} numberOfLines={2}>
        The place of Knowing
      </Text>
    </TouchableOpacity>
  );
};
export default TruyenItem;
const styles = StyleSheet.create({
  container: {
    marginRight: WIDTH(20),
    marginTop: WIDTH(8),
  },
  image: {
    width: WIDTH(120),
    // backgroundColor: R.colors.amber100,
    height: HEIGHT(160),
  },
  text: {
    alignSelf: 'center',
    maxWidth: WIDTH(120),
    marginVertical: HEIGHT(12),
    color: R.colors.black0,
  },
});
