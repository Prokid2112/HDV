import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import HeaderBase from '../../component/Header/HeaderBase';
import styles from './styles';
import {Avatar, Text, Pressable, Divider} from 'native-base';
import {HEIGHT, WIDTH, getFont} from '../../config';
import R from '../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, Center, Image} from 'native-base';
const ChiTietSach = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBase
        title="Sách A"
        disableBack={false}
        onPress={() => {
          props.navigation?.goBack();
        }}
      />
      <View>
        <View mt={HEIGHT(20)} ml={WIDTH(12)} flexDirection={'row'}>
          <Image
            source={R.images.bookCover}
            alt="Alternate Text"
            width={WIDTH(100)}
            height={HEIGHT(160)}
          />
          <View ml={WIDTH(8)}>
            <Text bold fontSize={getFont(18)}>
              Tiêu đề truyện
            </Text>
            <Text>Nội dung</Text>
            <Text maxWidth={WIDTH(240)} color={R.colors.gray6B}>
              Đây là câu truyện abcdefghik được xảy ra ở xyzgh
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text mt={WIDTH(12)} ml={WIDTH(12)} fontSize={getFont(16)} bold>
          Chọn chương
        </Text>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => {
                props.navigation?.navigate('DocSach');
              }}>
              <Text fontSize={getFont(18)} my={WIDTH(8)} ml={WIDTH(20)}>
                Chương {item}
              </Text>
            </Pressable>
          );
        }}
        style={styles.container}
      />
    </View>
  );
};
export default ChiTietSach;
