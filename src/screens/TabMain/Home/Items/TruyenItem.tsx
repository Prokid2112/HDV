import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-animatable';
import R from '../../../../assets/R';
import {HEIGHT, WIDTH} from '../../../../config';
import {Image} from 'native-base';

const TruyenItem = (props: any) => {
  const {data} = props;
  console.log('🚀 ~ file: TruyenItem.tsx:9 ~ TruyenItem ~ data:', data);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props?.navigation.navigate('ChiTietSach', {data: data});
      }}>
      <Image
        source={{uri: data?.urlBia}}
        alt="Alternate Text"
        width={WIDTH(120)}
        height={HEIGHT(160)}
        alignSelf={'center'}
        _alt={R.images.bookCover}
      />
      <Text style={styles.text} numberOfLines={2}>
        {data?.title}
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
