import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import MucTheLoai from './Items/MucTheLoai';
const Home = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Home" />
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item, index}) => {
          return <MucTheLoai {...props} />;
        }}
        style={styles.container}
      />
    </View>
  );
};
export default Home;
