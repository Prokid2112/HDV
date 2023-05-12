import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import MucTheLoai from './Items/MucTheLoai';
import SwiperFeat from './Items/SwiperFeat';
import HeaderHome from './Items/HeaderHome';
const Home = (props: any) => {
  const data = props?.data;
  const bannerData = data?.filter((item: any) => {
    return item?.banner ? true : false;
  });
  const noiBatData = data?.filter((item: any) => {
    return item?.noiBat ? true : false;
  });
  console.log('🚀 ~ file: index.tsx:10 ~ Home ~ data:', data);
  return (
    <View style={{flex: 1}}>
      <HeaderBase
        childrenLeft={<HeaderHome onPress={() => props?.onChangeIndex(3)} />}
        title="Home"
      />

      <SwiperFeat {...props} data={bannerData} />

      <FlatList
        data={[1]}
        renderItem={({item, index}) => {
          return <MucTheLoai {...props} data={noiBatData} />;
        }}
        style={styles.container}
      />
    </View>
  );
};
export default Home;
