import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-animatable';
import R from '../../assets/R';
import {HEIGHT, WIDTH, getFont} from '../../config';
import {View, Image} from 'native-base';

const ItemBook = (props: any) => {
  const data = props?.dataBook;
  console.log('🚀 ~ file: ItemBook.tsx:9 ~ ItemBook ~ data:', data);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props?.navigation.navigate('ChiTietSach', {data: data});
      }}>
      <Image
        source={{uri: data?.urlBia}}
        alt="Alternate Text"
        width={WIDTH(120 * 0.75)}
        height={HEIGHT(160 * 0.75)}
        alignSelf={'center'}
        _alt={R.images.bookCover}
      />
      <View ml={WIDTH(8)}>
        <Text style={styles.text} numberOfLines={2}>
          {data?.title}
        </Text>
        <Text style={styles.textNom} numberOfLines={1}>
          Tác giả:
        </Text>
        <Text style={styles.textNom} numberOfLines={1}>
          Thể loại: {data?.theLoai}
        </Text>
        <Text style={styles.textNom} numberOfLines={1}>
          Nội dung: {data?.noiDung}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ItemBook;
const styles = StyleSheet.create({
  container: {
    marginRight: WIDTH(20),
    marginVertical: WIDTH(8),
    flexDirection: 'row',
  },
  image: {
    width: WIDTH(120 * 0.75),
    // backgroundColor: R.colors.amber100,
    height: HEIGHT(160 * 0.75),
  },
  text: {
    // alignSelf: 'center',
    fontWeight: 'bold',
    maxWidth: WIDTH(240),
    marginBottom: HEIGHT(4),
    color: R.colors.black0,
    fontSize: getFont(18),
  },
  textNom: {
    // alignSelf: 'center',
    // fontWeight: 'bold',
    maxWidth: WIDTH(240),
    marginBottom: HEIGHT(4),
    color: R.colors.black0,
    fontSize: getFont(16),
  },
});
