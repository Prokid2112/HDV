import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import {Avatar, Text, Pressable} from 'native-base';
import {HEIGHT, WIDTH, getFont} from '../../../config';
import R from '../../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
const TaiKhoan = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Tài Khoản" />
      <Avatar
        alignSelf={'center'}
        mt={HEIGHT(32)}
        size="2xl"
        bg="green.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}>
        AJ
      </Avatar>
      <Text
        alignSelf={'center'}
        marginTop={HEIGHT(8)}
        fontWeight={'extrabold'}
        fontSize={getFont(24)}>
        Người dùng 1
      </Text>

      <Pressable
        w={WIDTH(343)}
        marginTop={HEIGHT(8)}
        paddingLeft={HEIGHT(20)}
        bgColor={R.colors.gray30}
        padding={WIDTH(8)}
        alignSelf={'center'}
        borderRadius={'xl'}
        flexDirection="row"
        onPress={() => {
          props.navigation.navigate('ThemSach');
        }}
        alignItems={'center'}>
        <Entypo name="plus" size={WIDTH(20)} color={R.colors.black0} />
        <Text
          marginLeft={WIDTH(16)}
          color={R.colors.black0}
          fontSize={getFont(18)}>
          Thêm sách
        </Text>
      </Pressable>
      <Pressable
        w={WIDTH(343)}
        marginTop={HEIGHT(8)}
        paddingLeft={HEIGHT(20)}
        bgColor={R.colors.gray30}
        padding={WIDTH(8)}
        alignSelf={'center'}
        borderRadius={'xl'}
        flexDirection="row"
        onPress={() => {
          props.navigation.replace('Intro');
        }}
        alignItems={'center'}>
        <Entypo name="log-out" size={WIDTH(20)} color={R.colors.black0} />
        <Text
          marginLeft={WIDTH(16)}
          color={R.colors.black0}
          fontSize={getFont(18)}>
          Đăng xuất
        </Text>
      </Pressable>
    </View>
  );
};
export default TaiKhoan;
