import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import R from '../../../../assets/R';
import {getFont, HEIGHT, WIDTH} from '../../../../config';
import TruyenItem from './TruyenItem';
const MucTheLoai = (props: any) => {
  console.log('🚀 ~ file: MucTheLoai.tsx:7 ~ MucTheLoai ~ props:', props);
  return (
    <View>
      <Text style={styles.title}>Khoa học viễn tưởng</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item, index}) => {
          return <TruyenItem {...props} />;
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
