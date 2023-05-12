import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import R from '../../../../assets/R';
import {getFont, HEIGHT, WIDTH} from '../../../../config';
import TruyenItem from './TruyenItem';
const MucTheLoai = (props: any) => {
  const {data} = props;
  console.log('🚀 ~ file: MucTheLoai.tsx:8 ~ MucTheLoai ~ data:', data);
  return (
    <View>
      <Text style={styles.title}>Nổi bật</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return <TruyenItem {...props} data={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default MucTheLoai;
const styles = StyleSheet.create({
  title: {
    color: R.colors.primaryColor,
    fontWeight: 'bold',
    marginTop: HEIGHT(12),
    marginLeft: WIDTH(12),
    fontSize: getFont(20),
  },
});
