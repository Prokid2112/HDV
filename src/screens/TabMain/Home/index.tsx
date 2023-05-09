import React, {PureComponent, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import MucTheLoai from './Items/MucTheLoai';
const Home = (props: any) => {
  const data = props?.data;

  console.log('🚀 ~ file: index.tsx:8 ~ Home ~ data:', data);
  const arrayCate = () => {
    let list: any = {};
    data?.map((item: any) => {
      if (item?.category in list) {
        list?.[item?.category]?.push(item);
      } else {
        list[item?.category] = [item];
      }
    });
    const listData = Object.keys(list).map((item: any) => {
      return {
        title: item,
        books: list?.[item],
      };
    });
    console.log(
      '🚀 ~ file: index.tsx:21 ~ arrayCate ~ list:',
      Object.keys(list),
      list,
      listData,
    );
    // let listData = list;
    return listData;
  };
  useEffect(() => {
    arrayCate();
  }, []);

  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Home" />
      <FlatList
        data={arrayCate()}
        renderItem={({item, index}) => {
          return <MucTheLoai {...props} item={item} />;
        }}
        style={styles.container}
      />
    </View>
  );
};
export default Home;
