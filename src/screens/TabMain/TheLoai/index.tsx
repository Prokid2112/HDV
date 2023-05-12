import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import {Avatar, Text, Pressable, Image} from 'native-base';
import {HEIGHT, WIDTH, getFont} from '../../../config';
import R from '../../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
const ItemTheLoai = (props: any) => {
  const src = () => {
    switch (props?.item) {
      case 'Hành động':
        return R.images.location;
      case 'Thư giãn':
        return R.images.lyingdDown;
      case 'Học tập':
        return R.images.teaching;
      case 'Khoa Học':
        return R.images.science;
    }
  };
  const data = props.data?.filter((item: any) => item?.theLoai === props?.item);
  return (
    <Pressable
      onPress={() => {
        props?.navigation.navigate('DanhSachSach', {
          data: data,
          theLoai: props?.item,
        });
      }}
      style={styles.itemContainer}>
      <Image
        source={src()}
        width={WIDTH(120)}
        height={WIDTH(120)}
        alignSelf={'center'}
        mt={WIDTH(8)}
      />
      <Text bold alignSelf={'center'} mt={WIDTH(16)}>
        {props?.item}
      </Text>
    </Pressable>
  );
};
const listTheLoai = ['Hành động', 'Thư giãn', 'Học tập', 'Khoa Học'];
const TheLoai = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Thể loại" />
      <FlatList
        data={listTheLoai}
        numColumns={2}
        renderItem={({item, index}: any) => (
          <ItemTheLoai item={item} {...props} />
        )}
      />
    </View>
  );
};
export default TheLoai;
