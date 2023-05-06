import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import MucTheLoai from './Items/MucTheLoai';
import SwiperFeat from './Items/SwiperFeat';
import HeaderHome from './Items/HeaderHome';
const Home = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBase
        childrenLeft={<HeaderHome onPress={() => props?.onChangeIndex(3)} />}
        title="Home"
      />

      <SwiperFeat />

      <FlatList
        data={[1]}
        renderItem={({item, index}) => {
          return <MucTheLoai {...props} />;
        }}
        style={styles.container}
      />
    </View>
  );
};
export default Home;
