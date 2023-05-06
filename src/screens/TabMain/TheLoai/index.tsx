import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import {Avatar, Text, Pressable, Image} from 'native-base';
import {HEIGHT, WIDTH, getFont} from '../../../config';
import R from '../../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
const ItemTheLoai = ({item}: any) => {
  const src = () => {
    switch (item) {
      case 'Hành động':
        return R.images.location;
      case 'Thư dãn':
        return R.images.lyingdDown;
      case 'Học tập':
        return R.images.teaching;
      case 'Khoa học':
        return R.images.science;
    }
  };
  return (
    <View style={styles.itemContainer}>
      <Image
        source={src()}
        width={WIDTH(120)}
        height={WIDTH(120)}
        alignSelf={'center'}
        mt={WIDTH(8)}
      />
      <Text bold alignSelf={'center'} mt={WIDTH(16)}>
        {item}
      </Text>
    </View>
  );
};
const listTheLoai = ['Hành động', 'Thư dãn', 'Học tập', 'Khoa học'];
const TheLoai = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Thể loại" />
      <FlatList
        data={listTheLoai}
        numColumns={2}
        renderItem={({item, index}: any) => <ItemTheLoai item={item} />}
      />
    </View>
  );
};
export default TheLoai;
