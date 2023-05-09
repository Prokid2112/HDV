import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import {Avatar, Text, Pressable} from 'native-base';
import {HEIGHT, WIDTH, getFont} from '../../../config';
import R from '../../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
const TaiKhoan = (props: any) => {
  const userdata = props?.route?.params?.userData?.userDTO;
  console.log('🚀 ~ file: index.tsx:10 ~ TaiKhoan ~ props:', userdata);
  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Tài Khoản" />
      <Avatar
        alignSelf={'center'}
        mt={HEIGHT(32)}
        size="2xl"
        bg="green.500"
        source={{
          uri:
            userdata?.avatar ?? 'http://www.gravatar.com/avatar/?d=identicon',
        }}>
        U
      </Avatar>
      <Text
        alignSelf={'center'}
        marginTop={HEIGHT(8)}
        fontWeight={'extrabold'}
        fontSize={getFont(24)}>
        {userdata?.fullname ?? userdata?.username ?? userdata?.email}
      </Text>
      <Pressable
        w={WIDTH(343)}
        marginTop={HEIGHT(8)}
        paddingLeft={HEIGHT(20)}
        bgColor={R.colors.gray30}
        padding={WIDTH(8)}
        alignSelf={'center'}
        borderRadius={'2xl'}
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
